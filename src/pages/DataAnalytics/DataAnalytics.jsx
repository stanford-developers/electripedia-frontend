import React, { useEffect, useState } from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeTwoFooter from '../HomeTwo/HomeTwoFooter/HomeTwoFooter';
import HomeTwoHeader from '../HomeTwo/HomeTwoHeader/HomeTwoHeader';
import getBaseUrl from '../../config';

// deepsolar-1's DataAnalytics page embedded a (now defunct) flask iframe.
// This version keeps the same page chrome but explores the ElectriPedia API
// directly (see electripedia-backend). Not linked in the nav, same as
// deepsolar — reachable at /dataAnalytics.

const integer = new Intl.NumberFormat('en-US');

const fetchJson = async (path, params = {}) => {
   const url = new URL(`${getBaseUrl()}${path}`);
   Object.entries(params).forEach(([k, v]) => {
      if (v !== undefined && v !== null && v !== '') url.searchParams.set(k, v);
   });
   const resp = await fetch(url);
   if (!resp.ok) throw new Error(`API ${path} failed: ${resp.status}`);
   return resp.json();
};

const DataAnalytics = () => {
   const [meta, setMeta] = useState(null);
   const [filters, setFilters] = useState({ level: 'county', state: '', period: '', der: 'EV', sort_by: 'permits' });
   const [summary, setSummary] = useState(null);
   const [page, setPage] = useState(null);
   const [error, setError] = useState(null);

   useEffect(() => {
      fetchJson('/api/meta').then(setMeta).catch((e) => setError(e.message));
   }, []);

   useEffect(() => {
      let stale = false;
      setError(null);
      Promise.all([
         fetchJson('/api/summary', filters),
         fetchJson('/api/metrics', { ...filters, limit: 50, order: 'desc' }),
      ])
         .then(([s, p]) => {
            if (!stale) {
               setSummary(s);
               setPage(p);
            }
         })
         .catch((e) => !stale && setError(e.message));
      return () => {
         stale = true;
      };
   }, [filters]);

   const set = (key) => (e) => setFilters((f) => ({ ...f, [key]: e.target.value }));
   const derLabel = (code) => meta?.der_labels?.[code] ?? code;
   const periodLabel = (code) => meta?.period_labels?.[code] ?? code;

   return (
      <>
         <PageHelmet pageTitle="Data Analytics Page" />

         <HomeTwoHeader />
         <PageTitle title="Data Analytics" />

         <section className="section pt-50 pb-100">
            <div className="container">
               {error && (
                  <div className="alert alert-danger">
                     Could not reach the ElectriPedia API at {getBaseUrl()}. Start the
                     backend (<code>make dev</code> in electripedia-backend) or set
                     VITE_API_URL. <br />
                     <small>{error}</small>
                  </div>
               )}

               <div className="row g-3 mb-4">
                  <div className="col-6 col-md-2">
                     <label className="form-label" htmlFor="level">Level</label>
                     <select className="form-select" id="level" value={filters.level} onChange={set('level')}>
                        <option value="county">County</option>
                        <option value="zip">ZIP code</option>
                     </select>
                  </div>
                  <div className="col-6 col-md-3">
                     <label className="form-label" htmlFor="der">DER technology</label>
                     <select className="form-select" id="der" value={filters.der} onChange={set('der')}>
                        <option value="">All</option>
                        {meta?.ders.map((d) => (
                           <option key={d} value={d}>{derLabel(d)}</option>
                        ))}
                     </select>
                  </div>
                  <div className="col-6 col-md-3">
                     <label className="form-label" htmlFor="period">Period</label>
                     <select className="form-select" id="period" value={filters.period} onChange={set('period')}>
                        <option value="">All periods</option>
                        {meta?.periods.map((p) => (
                           <option key={p} value={p}>{periodLabel(p)}</option>
                        ))}
                     </select>
                  </div>
                  <div className="col-6 col-md-2">
                     <label className="form-label" htmlFor="state">State</label>
                     <select className="form-select" id="state" value={filters.state} onChange={set('state')}>
                        <option value="">All states</option>
                        {meta?.states.map((s) => (
                           <option key={s} value={s}>{s}</option>
                        ))}
                     </select>
                  </div>
                  <div className="col-6 col-md-2">
                     <label className="form-label" htmlFor="sort">Rank by</label>
                     <select className="form-select" id="sort" value={filters.sort_by} onChange={set('sort_by')}>
                        <option value="permits">Permits</option>
                        <option value="detections">Detections</option>
                        <option value="instances">Instances</option>
                     </select>
                  </div>
               </div>

               {summary && (
                  <div className="row g-3 mb-4">
                     {[
                        [filters.level === 'county' ? 'Counties' : 'ZIP codes', summary.regions],
                        ['Permits', summary.permits],
                        ['Detections', summary.detections],
                        ['Instances', summary.instances],
                     ].map(([label, value]) => (
                        <div className="col-6 col-md-3" key={label}>
                           <div className="border rounded p-3 h-100">
                              <div className="text-muted small">{label}</div>
                              <div className="fs-3 fw-semibold">{integer.format(value)}</div>
                           </div>
                        </div>
                     ))}
                  </div>
               )}

               <div className="table-responsive border rounded">
                  <table className="table table-hover align-middle mb-0">
                     <thead className="table-light">
                        <tr>
                           <th>Rank</th>
                           <th>{filters.level === 'county' ? 'County' : 'ZIP'}</th>
                           <th>State</th>
                           <th>DER</th>
                           <th>Period</th>
                           <th className="text-end">Permits</th>
                           <th className="text-end">Detections</th>
                           <th className="text-end">Instances</th>
                        </tr>
                     </thead>
                     <tbody>
                        {page?.records.map((r, i) => (
                           <tr key={`${r.region_id}-${r.der}-${r.period}`}>
                              <td>{i + 1}</td>
                              <td>{r.region_name ? `${r.region_name} (${r.region_id})` : r.region_id}</td>
                              <td>{r.state}</td>
                              <td>{derLabel(r.der)}</td>
                              <td>{periodLabel(r.period)}</td>
                              <td className="text-end">{integer.format(r.permits)}</td>
                              <td className="text-end">{integer.format(r.detections)}</td>
                              <td className="text-end">{integer.format(r.instances)}</td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
                  {!page && !error && <div className="p-4 text-muted">Loading…</div>}
                  {page && page.records.length === 0 && (
                     <div className="p-4 text-muted">No rows match these filters.</div>
                  )}
               </div>
               {page && (
                  <p className="text-muted small mt-3">
                     Showing top {page.records.length} of {integer.format(page.total)} rows.
                     Full data is available via <a href={`${getBaseUrl()}/docs`}>the API</a>.
                  </p>
               )}
            </div>
         </section>
         <HomeTwoFooter />
      </>
   );
};

export default DataAnalytics;
