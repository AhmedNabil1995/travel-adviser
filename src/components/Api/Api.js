const axios = require("axios");


 const getList = async (type,bounds)=>{
     
    try{

        let  {data} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,{
            params: {
              bl_latitude: bounds.ne.lat,
              bl_longitude: bounds.ne.lng,
              tr_longitude: bounds.sw.lat,
              tr_latitude: bounds.sw.lng,
            },
            headers: {
              'X-RapidAPI-Key': '01ae3c52e6msh78a3659f8c2854cp1aa567jsn733f8b9afe8d',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          })
           return data;
    }catch(err){
        console.log(err)
    }
}

export default getList;