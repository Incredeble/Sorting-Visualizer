import { useEffect, useState } from 'react';
import style from '../b.module.css';

export default function Array(props){
    const [arr,setArr] = useState(props.arr);
    const [clr,setClr] = useState(props.clr);
    

    useEffect(() => {
        props.arr.map((item,i) => arr[i]=props.arr[i]);
        props.clr.map((item,i) => clr[i]=props.clr[i]);
        setArr([...arr])
        setClr([...clr])
    },[props.arr])

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
    </div>
);
    
    }
    