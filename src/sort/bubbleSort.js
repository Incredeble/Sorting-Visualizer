import { useEffect, useState } from 'react';
import style from '../b.module.css';

export default function Bubble(props){
    const [arr,setArr] = useState(props.arr);
    const [clr,setClr] = useState(props.clr);
    

    useEffect(() => {
        props.arr.map((item,i) => arr[i]=item);
        props.clr.map((item,i) => clr[i]=item);
        setArr([...arr])
        setClr([...clr])
        sort();
    },[props.arr])

    const delay = ms => new Promise(res => setTimeout(res,ms));

    const sort = async () => {
        let len = arr.length;
        var j;
        for(let i =0; i < len; i++){  
            var n=len-i-1 ;     
            for( j = 0; j < n; j++){
                if(arr[j] > arr[j + 1]){
                    var temp = arr[j]
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                    setArr([...arr])
                }
                if((j-1)>=0) {
                    clr[j-1]='rgb(42, 136, 165)';
                    setClr([...clr])
                }
                clr[j]='red';
                setClr([...clr])
                await delay(100);
                if((j+1)<n) {
                    clr[j+1]='yellow';
                    setClr([...clr])
                    await delay(500);
                }
                
            }
            clr[j-1]='rgb(42, 136, 165)'
            clr[j]='green';
            setClr([...clr])
            await delay(1000);
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
    </div>
);
    
    }
    