import React, { useEffect, useState} from 'react';
import "./Story1.css"
import { TextField, Button, Table, TableHead, TableRow, TableCell, TableBody, CircularProgress } from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";
import getBaseUrl from "../config";
const Story1 = () => {
    const [zipcode, setZipcode] = useState("");
    const [year, setYear] = useState("");
    const [record, setRecord] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`${getBaseUrl()}/api/record/${zipcode}/${year}`);
            const data = await response.json();
            setRecord(data);
            console.log(data);
        } catch (error) {
            console.error(error.message);
        }
        setLoading(false);
    };

    return(
        <div>
            <style>{`
        .custom-form {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          padding: 2rem;
          border-radius: 1rem;
          background-color: #fff;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .custom-textfield {
          width: 30% !important;
        }
        .custom-textfield * {
          font-size: 1.5rem;
        }
        .custom-button {
          width: 30% !important;
        }
        .custom-error {
          color: red;
          font-weight: bold;
          margin-top: 1rem;
        }
        .custom-table {
          border-collapse: collapse;
          margin-top: 1rem;
          width: 100%;
        }
          .custom-table * {
            font-size: 2rem;
          }
        .custom-table th,
        .custom-table td {
          border: 1px solid #ccc;
          padding: 8px;
          text-align: left;
        }
        .custom-table th {
          background-color: #f2f2f2;
          font-weight: bold;
        }
        .custom-table tbody tr:nth-child(even) {
          background-color: #f2f2f2;
        }
        .custom-table td:first-child {
          width: 40%;
        }
      `}</style>

            <form
                className="custom-form"
                onSubmit={handleSubmit}
            >
                <TextField
                    className="custom-textfield"
                    variant="outlined"
                    label="Zipcode"
                    value={zipcode}
                    onChange={(event) =>
                        setZipcode(event.target.value)
                    }
                    required
                />
                <TextField
                    className="custom-textfield"
                    variant="outlined"
                    label="Year"
                    value={year}
                    onChange={(event) =>
                        setYear(event.target.value)
                    }
                    required
                />
                <Button
                    className="custom-button"
                    variant="contained"
                    color="primary"
                    type="submit"
                    startIcon={<SearchIcon />}
                    disabled={!zipcode || !year || loading}
                >
                    Fetch Data
                </Button>
            </form>

            {loading && <CircularProgress />}
            {error && (
                <div className="custom-error">
                    {error}
                </div>
            )}
            {record && (
                <Table className="custom-table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Field Name</TableCell>
                            <TableCell>Value</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.entries(record).map(([key, value]) => (
                            <TableRow key={key}>
                                <TableCell>{key}</TableCell>
                                <TableCell>{value ?? "-"}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}
        </div>
    );
}

export default Story1;