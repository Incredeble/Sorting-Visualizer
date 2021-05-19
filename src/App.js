
import React , { useEffect, useState } from 'react';
import './App.css';
import Bubble from './sort/bubbleSort';
import Selection from './sort/selectionSort';
import Insertion from './sort/insertionSort';
import Array from './sort/array'

export default function App() {
  const [arr,setArr] = useState([])
  const [clr,setClr] = useState([])
  const [slide,setSlide] = useState(5)
  const [selected,setSelected] = useState(null)

  useEffect(() => {
    generate_new_array();
  },[])


  const generate_new_array = () => {
    setArr([])
    setClr([])
    for (let i = 0; i < slide; i++) {
      setArr(prevArr => [...prevArr,Math.floor(Math.random()*90)+10])
      setClr(prevClr => [...prevClr,'rgb(42, 136, 165)'])
    	}
      setSelected(null);
    }  

  return (
    <div className='App'>
      <div className='App-header'>
        <div className="conatiner">
          <div className="leftpane">
          </div>
          <div className='middlepane'>
            { arr.length>0 && selected === null && <Array clr={clr} arr={arr} />}
            { arr.length>0 && selected === 'selection' && <Selection arr={arr} clr={clr} /> }
            { arr.length>0 && selected === 'insertion' && <Insertion arr={arr} clr={clr} temp={clr}/>}
            { arr.length>0 && selected === 'bubble' && <Bubble arr={arr} clr={clr} />}
          </div>
          <div className='rightpane'>
            <input type='range' 
				      max='20' min='5'  value={slide} onChange={(e) => setSlide(e.target.value)} />
			      <button onClick={generate_new_array} type='button'>Generate New Array</button>
            <button onClick={() => {setSelected('selection'); }} type='button'>Selection Sort</button>
			      <button onClick={() => {setSelected('insertion'); }} type='button'>Insertion Sort</button>
            <button onClick={() => {setSelected('bubble'); }} type='button'>Bubble Sort</button>
          </div>
        </div>
      </div>
    </div>
  );
}