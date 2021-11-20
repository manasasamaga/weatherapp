import axios from 'axios';
const URL='https://api.openweathermap.org/data/2.5/weather';
const API_KEY='d01e13891dd59e6df51430c5353c2952'
export const fetchWeather=async(query)=>{ //query is the name of the town
    const {data}=await axios.get(URL,{
        params:{
            q:query,
            units:'metric',
            APPID:API_KEY,
        }
    });
    return data;
}
