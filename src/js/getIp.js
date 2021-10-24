

const getIp = async (data = "") => {

    let query;


    if (data.match(/\.(com|cn|net|ru|org|io)$/i)) {
        query = `domain=${data}`;
    } else {
        query = `ipAddress=${data}`;
    }

   
    console.log(query);

    let req = await
     fetch(`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_HTyvYgTJk1tRMr5aCfdGAUD7A7qXe
     &${query}`);

    
    return await req.json();
};

export default getIp;