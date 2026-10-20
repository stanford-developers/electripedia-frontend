// Data stories listed on the /data page, oldest first. Each entry links out
// to a standalone story page; `image` is optional. `blurb` may contain JSX.
const dataStoriesData = [
    {
        id: 1,
        title: "Assessing Disparities in California's Electric Panel Bottleneck",
        blurb: <>Many U.S. homes lack the electric panel capacity needed to support residential electrification, an issue we refer to as the <em>electric panel bottleneck</em>. In this map, we explore how redlining, a form of historical financial discrimination, affects the contemporary electric panel bottleneck, along with income and California's current instrument for equitably directing climate investment, the Disadvantaged Communities (DAC) designation.</>,
        href: '/data/electric-panel-bottleneck-map.html',
        image: 'assets/img/data/panel-bottleneck-redlining.jpg',
    },
    {
        id: 2,
        title: "Where California Plugged In",
        blurb: "Public charging stations are well documented, but at-home EV chargers had not been mapped at scale until ElectriPedia. These chargers have spread rapidly across California over the past fifteen years, though not every home has shared in that growth. In this data story, we map them across the state and explore how adoption varies with home value, housing type, and garage access.",
        href: 'https://storymaps.arcgis.com/stories/51d1706bbfab4859bd347e6374f485ac',
        image: 'assets/img/data/home-ev-chargers.jpg',
    },
];

export default dataStoriesData;
