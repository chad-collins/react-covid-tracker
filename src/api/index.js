import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async ()=> {
    try {
        const { data: { recovered, confirmed, deaths, lastUpdate } } = await axios.get(url)
        return { recovered, confirmed, deaths, lastUpdate }
    } catch (e) {
        console.log(e)
    }   
}

export const fetchDailyData = async () => {
    try {
      const { data } = await axios.get(`${url}/daily`);
      return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
    } catch (error) {
      return error;
    }
  };