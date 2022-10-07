import { useRef, useState } from "react";
import './App.css'


function App() {
const[theFrom,setTheFrom] = useState('Meter')
const[rate,setRate] = useState(100)
const[theTo,setTheTo] = useState('Centimeter')
const[valueFrom,setValueFrom] = useState('')
const[valueTo,setValueTo] = useState('')
const inputFrom = useRef()
const inputTo = useRef()

function handleSwitch(){
  setTheFrom(theTo)
  setTheTo(theFrom)
  setRate(1/rate)
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
  return (
    <>
    <section>
      <div className="miniSection mini1">
        <span>
        <select value={theFrom} onChange={e=>(setTheFrom(e.target.value))}>
            <option>{theFrom}</option>
            <option>Miles</option>
            <option>Kilometer</option>
          </select>
        </span>
        <input onChange={handleConvertFrom} ref={inputFrom} value={valueFrom} type='number' />
      </div>
      <button onClick={handleSwitch}>Switch</button>
      <div className="miniSection mini2">
        <span>
          <select value={theTo} onChange={e=>(setTheTo(e.target.value))}>
            <option>{theTo}</option>
            <option>Miles</option>
            <option>Kilometer</option>
          </select>
        </span>
        <input onChange={handleConvertTo} ref={inputTo} value={valueTo} type='number' />
      </div>
    </section>
    </>
  );
}

export default App;
