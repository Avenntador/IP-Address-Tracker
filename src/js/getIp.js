

const getIp = async (ip = '') => {

    let req = await fetch(`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_HTyvYgTJk1tRMr5aCfdGAUD7A7qXe&ipAddress=${ip}`);

    
    return await req.json();
};

export default getIp;