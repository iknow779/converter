import { useEffect, useRef, useState } from "react";
import './App.css'


function App() {
const[theFrom,setTheFrom] = useState('Meter')
const[rate,setRate] = useState()
const[theTo,setTheTo] = useState('Centimeter')
const[valueFrom,setValueFrom] = useState('')
const[valueTo,setValueTo] = useState('')
const inputFrom = useRef()
const inputTo = useRef()

function handleSwitch(){
  setTheFrom(theTo)
  setTheTo(theFrom)
  setValueFrom('')
  setValueTo('')
}
function handleConvertFrom(){
  setValueFrom(inputFrom.current.value)
  setValueTo(inputFrom.current.value*rate)
}
function handleConvertTo(){
  setValueTo(inputTo.current.value)
  setValueFrom(inputTo.current.value/rate)
}
useEffect(() => {
    if(theFrom==='Meter' && theTo==='Kilometer'){
      setRate(0.001)
      setValueFrom('')
      setValueTo('')
    }
    else if(theFrom==='Meter' && theTo==='Miles'){
      setRate(1/1069.34)
      setValueFrom('')
      setValueTo('')
    }
    else if(theFrom==='Meter' && theTo==='Centimeter'){
      setRate(100)
      setValueFrom('')
      setValueTo('')
    }
    else if(theFrom==='Kilometer' && theTo==='Centimeter'){
      setRate(100000)
      setValueFrom('')
      setValueTo('')
    }
    else if(theFrom==='Kilometer' && theTo==='Miles'){
      setRate(1.60934)
      setValueFrom('')
      setValueTo('')
    }
    else if(theFrom==='Kilometer' && theTo==='Meter'){
      setRate(1000)
      setValueFrom('')
      setValueTo('')
    }
    else if(theFrom==='Miles' && theTo==='Meter'){
      setRate(1609.34)
      setValueFrom('')
      setValueTo('')
    }
    else if(theFrom==='Miles' && theTo==='Kilometer'){
      setRate(1/1.60934)
      setValueFrom('')
      setValueTo('')
    }
    else if(theFrom==='Miles' && theTo==='Centimeter'){
      setRate(160934)
      setValueFrom('')
      setValueTo('')
    }
    else if(theFrom==='Centimeter' && theTo==='Miles'){
      setRate(1/160934)
      setValueFrom('')
      setValueTo('')
    }    
    else if(theFrom==='Centimeter' && theTo==='Meter'){
      setRate(0.01)
      setValueFrom('')
      setValueTo('')
    }
    else if(theFrom==='Centimeter' && theTo==='Kilometer'){
      setRate(0.00001)
      setValueFrom('')
      setValueTo('')
    }
    
    
    
    else if(theFrom===theTo){
      setRate(1)
      setValueFrom('')
      setValueTo('')
    }
},[theFrom,theTo])
  return (
    <>
    <section>
      <div className="miniSection mini1">
        <span>
        <select value={theFrom} onChange={e=>(setTheFrom(e.target.value))}>
            <option>Miles</option>
            <option>Kilometer</option>
            <option>Centimeter</option>
            <option>Meter</option>
          </select>
        </span>
        <input onChange={handleConvertFrom} ref={inputFrom} value={valueFrom} type='number' />
      </div>
      <button onClick={handleSwitch}>Switch</button>
      <div className="miniSection mini2">
        <span>
          <select value={theTo} onChange={e=>(setTheTo(e.target.value))}>
            <option>Miles</option>
            <option>Kilometer</option>
            <option>Meter</option>
            <option>Centimeter</option>
          </select>
        </span>
        <input onChange={handleConvertTo} ref={inputTo} value={valueTo} type='number' />
      </div>
    </section>
    </>
  );
}

export default App;
