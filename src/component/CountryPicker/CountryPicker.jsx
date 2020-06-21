import React,{useState,useEffect} from 'react'
import {NativeSelect,FormControl} from '@material-ui/core'
import styles from './CountryPicker.module.css'
import {countries} from '../../Api'



function CountryPicker({handleCountryChange})
{
const [countrystate,updatecountrystate]=useState([]);

  useEffect(()=>{
    const fetchcountries=async()=>{
    updatecountrystate(await countries())
      }
    fetchcountries()
  },[updatecountrystate])

  return(
<FormControl className={styles.FormControl}>
<NativeSelect defaultValue='' onChange={(e)=>handleCountryChange(e.target.value)} >

<option className={styles.container} value="">Global </option>
{countrystate.map((countrydata,index)=><option key={index} value={countrydata}>{countrydata} </option>)}
</NativeSelect>

</FormControl>
  )

}
export default CountryPicker
