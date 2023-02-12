import './App.css';
import axios from 'axios'
import {useState} from 'react'
import { Route,Link } from 'react-router-dom';


function Yield() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState()

  
  const [nit,setnit]=useState('')
  const [phos,setphos]=useState('')
  const [pot,setpot]=useState('')
  const [temp,settemp]=useState('')
  const [humid,sethumid]=useState('')
  const [ph,setph]=useState('')
  const [rain,setrain]=useState('')

  const handlenit=(event)=>{
    setnit(event.target.value)
  }
  const handlephos=(event)=>{
    setphos(event.target.value)
  }
  const handlepot=(event)=>{
    setpot(event.target.value)
  }
  const handletemp=(event)=>{
    settemp(event.target.value)
  } 
  const handlehumid=(event)=>{
    sethumid(event.target.value)
  }
  const handleph=(event)=>{
    setph(event.target.value)
  }
  const handlerain=(event)=>{
    setrain(event.target.value)
  }

  const handleRequest = () => {
    setLoading(true)
    axios.get(`http://localhost:8080/yield?nit=${nit}&phos=${phos}&pot=${pot}&temp=${temp}&humid=${humid}&ph=${ph}&rain=${rain}`).then((res) => {
    setResult(res.data)
    console.log(res);
    setLoading(false)
    }).catch((err) => {
      alert("Plese enter proper value")
    })
  }



  return (
    <div className="ypart">
      <form className='whole' action='#'>
        <label className='ydiv'>Nitrogen: </label><input className='ydiv e' type="text" id='nitrogen' name='nitrogen' onChange={handlenit}/><br/>
        <label className='ydiv'>Phosporous: </label><input className='ydiv e' type="text" id='phosporous' name='phosporous' onChange={handlephos}/><br/>
        <label className='ydiv'>Potassium: </label><input className='ydiv e' type="text" id='potassium' name='potassium' onChange={handlepot} /><br/>
        <label className='ydiv'>Temperature: </label><input className='ydiv e' type="text" id='temp' name='temp' onChange={handletemp}/><br/>
        <label className='ydiv'>Humidity: </label><input className='ydiv e' type="text" id='humid' name='humid' onChange={handlehumid}/><br/>
        <label className='ydiv'> Ph: </label><input className='ydiv e' type="text" id='ph' name='ph' onChange={handleph}/><br/>
        <label className='ydiv'>Rainfall: </label><input className='ydiv e' type="text" id='rain' name='rain' onChange={handlerain}/><br/>
      </form>
      <div className='bright'>
      <h2 className='res'>{result}</h2>
      </div>
      
      <button className='pbtn' onClick={handleRequest}>Predict</button>
    </div>
  );
}

export default Yield;