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
function handleSetValue(){
   setTheFrom(this.props.value)
}
  return (
    <>
    <section>
      <div className="miniSection mini1">
        <span>
          {theFrom}
        </span>
        <input onChange={handleConvertFrom} ref={inputFrom} value={valueFrom} type='number' />
      </div>
      <button onClick={handleSwitch}>🔁</button>
      <div className="miniSection mini2">
        <span>
          {theTo}
        </span>
        <input onChange={handleConvertTo} ref={inputTo} value={valueTo} type='number' />
      </div>
    </section>
    <ul>
      <li onClick={handleSetValue} prop value='lol'>  my value is lol</li>
      <li onClick={handleSetValue} value='bro'>  my value is bro</li>
      <li onClick={handleSetValue} value='lmao'>  my value is lmao</li>
    </ul>
    </>
  );
}

export default App;
