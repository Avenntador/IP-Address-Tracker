import iconLocation from '../assets/images/icon-location.svg'
import getIp from './getIp';
import setOutput from './setOutput';

const initialize = (map) => {
    const ip_name = document.querySelector('.section-output__ip > p'),
        location_name = document.querySelector('.section-output__location > p'),
        timezone = document.querySelector('.section-output__timezone > p'),
        isp = document.querySelector('.section-output__isp > p'),
        input = document.querySelector('#input'),
        btn = document.querySelector('#submit_btn');

    let lat, lng, inputVal;
    let marker;

    let myIcon = L.icon({
        iconUrl: iconLocation,
    });

    getIp().then(data => {
        lat = data.location.lat;
        lng = data.location.lng;

        marker = L.marker([lat, lng], {
            icon: myIcon,
            title: 'You here!'
        }).addTo(map);

        map.setView([lat, lng], 2);

        setOutput(ip_name, location_name, timezone, isp, data);

    });

    btn.addEventListener('click', (e) => {
        e.preventDefault();

        inputVal = input.value;

        
        getIp(inputVal)
            .then(data => {

                map.removeLayer(marker);

                lat = data.location.lat;
                lng = data.location.lng;

                marker = L.marker([lat, lng], {
                    icon: myIcon,
                    title: 'You here!'
                }).addTo(map);

                map.setView([lat, lng], 2);

                setOutput(ip_name, location_name, timezone, isp, data);

            })
            .finally(() => {
                // input.value = '';
            })
    });



};

export default initialize;