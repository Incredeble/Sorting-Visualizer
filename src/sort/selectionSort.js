import React , { useState , useEffect } from 'react';
import style from '../b.module.css';

export default function Selection(props) {
	const [arr,setArr] = useState(props.arr);
	const [clr,setClr] = useState(props.clr);

    useEffect(() => {
        props.arr.map((item,i) => arr[i]=item);
        props.clr.map((item,i) => clr[i]=item);
        setArr([...arr])
        setClr([...clr])
		sort()
    },[props.arr])

	const delay = ms => new Promise(res => setTimeout(res,ms));

	const sort = async () => {
		for (let i = 0; i < arr.length; i++) {
			var min_index = i;
			clr[i]='yellow';
			setClr([...clr]);
			console.log(clr);
			await delay(1000);
			for(let j=i+1;j< arr.length;j++) {
				var swap = false;
				clr[j]='red';
				setClr([...clr]);
				await delay(1000);
				if (arr[min_index] > arr[j]) {
					clr[j]='yellow';
					setClr([...clr]);
					clr[min_index]='rgb(42, 136, 165)'
					setClr([...clr]);
					min_index = j
					swap =true;
				}
				if(!swap) {
					swap = false;
					console.log(' before clr : ' , clr);
					clr[j]='rgb(42, 136, 165)'
					
					setClr([...clr]);
					console.log(' after clr : ' , clr);
				}
				
			}
			
			var temp=arr[i]
			arr[i] = arr[min_index]
			arr[min_index] = temp;
			clr[i]='green';
			setArr([...arr]);
			setClr([...clr]);
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
		<>{
			bars()
        }
		</>
	);
}

