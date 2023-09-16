import React from 'react';
import { quote } from '../data/data';
import { useEffect,useState } from 'react';
function Preloader() {
    const [size,setsize]=useState(0);
    let temp=Math.floor(Math.random()*194);
    const [i,seti]=useState(temp); 
    const loading = () => {
        let startWidth = 0;
        const interval = setInterval(frame,100);
        const inte = setInterval(()=>{
            let temp=Math.floor(Math.random()*194);
            seti(temp);
        },4000);
        function frame() {
          if (startWidth >= 100) {
            clearInterval(inte);
            clearInterval(interval);
          } else {
            startWidth++;
            setsize(startWidth);
          }
        }
        }
    useEffect(() => {
      setTimeout(loading, 1000);
    }, []);
  return (
    <div className='pre'>
      <div className="loader" onClick={() => seti(Math.floor(Math.random() * 194))}>
      <div className="load"><span id='name' style={{fontFamily:"General Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif"}}>नमस्ते</span>
      <div className="progress">
        <div className="bar" style={{ width: `${size}%` }}>
        </div>
      </div>
      <span id="percent">{size}%</span>
      </div>
      <div id='quote'><span id="blc">"{quote[i].text}"</span>
      <span id="author">~{quote[i].author}</span>
      </div>
    </div>
    </div>
  )
}

export default Preloader;

