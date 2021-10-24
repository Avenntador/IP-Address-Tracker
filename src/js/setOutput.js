


const setOutput = (ip_name, location_name, timezone, isp, data) => {
    ip_name.textContent = data.ip;
    location_name.textContent = data.location.city;
    timezone.textContent = data.location.timezone + ' UTC';
    isp.textContent = data.isp;
};

export default setOutput;