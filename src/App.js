import {fetchdata} from './Api'

import {Cards,Chart,CountryPicker} from './component'
import cronaimg from './images/image.png'
import React from 'react'
import styles from "./App.module.css"

class App extends React.Component
{
  state={
    data:{},
    country:''
  }
  async componentDidMount(){
    const fetch=await fetchdata();
    this.setState({data:fetch})
  }
 handleCountryChange=async (country)=>{
 const fetch=await fetchdata(country)
 this.setState({data:fetch,country:country})
 }

  render()
  {
const {data,country}=this.state;
  return(
    <div className="container"> <img className={styles.image} src={cronaimg} alt="cronaimg"/> <Cards data={data}/> <CountryPicker handleCountryChange={this.handleCountryChange} /> <Chart data={data} country={country} /> </div>
  )
}}

export default App
