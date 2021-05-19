import React , { useState , useEffect }  from 'react';
import style from '../b.module.css';

export default function Insertion(props) {
  const [arr,setArr] = useState(props.arr);
  const [clr,setClr] = useState(props.clr);
  const [tempArr,setTempArr] = useState(props.temp);

  useEffect(() => {
    props.arr.map((item,i) => arr[i]=item);
    props.clr.map((item,i) => clr[i]=item);
    props.temp.map((item,i) => tempArr[i]=item);
    setArr([...arr])
    setClr([...clr])
    setTempArr([...tempArr])
    sort()
},[props.arr])

const delay = ms => new Promise(res => setTimeout(res,ms));

  const sort = async () => {
    var swap = false;
    tempArr[0] = 'green';
    setTempArr([...tempArr])
    for (let i = 1; i < arr.length; i++) {
      swap=false;
      clr[i] = 'yellow'
      setClr([...clr])
      let j = i - 1
      await delay(1000);
      clr[j] = 'red';
      setClr([...clr])
      await delay(1000);
      let temp = arr[i]
      while (j >= 0 && arr[j] > temp) {
        swap =true;
        arr[j + 1] = arr[j]
        setArr([...arr])
        clr[j] = 'yellow'; 
        setClr([...clr])
        await delay(1000);
        j--
        if(j>=0) {
          clr[j] = 'red'; 
          setClr([...clr])
          await delay(1000);
        }
      }
        await delay(1000);
        arr[j+1] = temp
        setArr([...arr])
        tempArr[i] = 'green';
        setTempArr([...tempArr])
        console.log(tempArr)
        for( let k=0;k<=i;k++) {
        clr[k]=tempArr[k]
        setClr([...clr])}
        await delay(2000);
    }
    
  }

  const bars = () => {
    if(arr.length>0) {
    return arr.map((item,i) => {
      return <div key={i} className={style.styles} style={{height:item*3,width:'auto',backgroundColor:clr[i]}}>{item}</div>
    });
  }
  
  }

  

    return(
      <div>
        {
          bars()
       }
      <br/>
    
    </div>
  );
      
}
