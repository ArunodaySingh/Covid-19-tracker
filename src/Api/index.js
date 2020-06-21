import axios from 'axios'

const url="https://covid19.mathdro.id/api"

export const fetchdata=  async function(country){

 let chnageableurl=url;
 if(country){
   chnageableurl=`${url}/countries/${country}`
 }

try {
  const {data:{confirmed,recovered,deaths,lastUpdate}} =await axios.get(chnageableurl)
   return {confirmed,recovered,deaths,lastUpdate}
} catch (err) {

}
}
export const fetchdatadaily=async function(){

  try {
    const {data}=await axios.get(`${url}/daily`);
  return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
  } catch (e)
  {

  }
}
export  const countries = async ()=>{
  try {
const {data:{countries}} = await axios.get(`${url}/countries`)
    return countries.map((item=>item.name)
  )}
   catch (e)
  {
    console.log(e);
}
}
