import L from 'leaflet'
import getIp from './getIp';


const map = () => {

    let mymap = L.map('mapid');

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiYXZlbm50YWRvciIsImEiOiJja3V4cHZpNXcxcHJrMm5vMGFtcDF6Y3hwIn0.xPk6dQU3KZ-0baE6s-sJOQ'
    }).addTo(mymap);
    
    getIp().then(data => {
        let lat = data.location.lat;
        let lng = data.location.lng;
        
        mymap.setView([lat, lng], 13);
    });
 
    
    
};

export default map;