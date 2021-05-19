import { useState } from "react";


export default function Test() {
    const [arr,setArr] = useState([1,2,3,4]);
    const [ars,setArs] = useState([4,3,2,1]);

    const a1 = () => {
        return arr.map((items) =>  <li>{items}</li>);
    }
    const a2 = () => {
        return ars.map((items) =>  <li>{items}</li>);
    }
    const swap = () => {
        setArr(ars);
        setArr([...arr]);
        console.log(arr,ars);
    };

    return (
        <>
        {a1()}
        <br/>
        <br/>
        {a2()}
        <button typr="submit" onClick={swap}>Update</button>
        </>
    ); 

}