const splash = document.querySelector('.splash')


document.addEventListener('DOMContentLoaded',(e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none')
    },4000)
})

/*
const options = {
    // Required: API key
    key: 'AKgmwpEHATAa5o6IXsATlaJVoazJFDTo', // REPLACE WITH YOUR KEY !!!

    // Put additional console output
    verbose: true,

    // Optional: Initial state of the map
    lat: 23.314621,
    lon: 78.454205,
    zoom: 5,
};

windyInit(options, windyAPI => {

    const { map } = windyAPI;
    // .map is instance of Leaflet map

    L.popup()
        .setLatLng([50.4, 14.3])
        .setContent('Hello World')
        .openOn(map);
});*/

// Initialize Windy API
/*windyInit(options, windyAPI => {
    // windyAPI is ready, and contain 'map', 'store',
    // 'picker' and other usefull stuff

    const { map } = windyAPI;
    // .map is instance of Leaflet map

    L.popup()
        .setLatLng([23.314621, 78.454205])
        .setContent('Our India...<3')
        .openOn(map);
});*/