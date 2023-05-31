import React, { useState } from 'react';
import './App.css';

function App() {

  const imgs=[
    {id:0,value:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgg0Ma0mwHDwsgC5x3XKS9jio37zeAZILifalDVCmydQ&usqp=CAU&ec=48665701"},
    {id:1,value:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT39Wym7ztX-ZCHmOdKfE69_i_dE9X6R7rqoyxhI8npDw&usqp=CAU&ec=48665701"},
    {id:2,value:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTEHuy549UG9TdeT-UaABYrGS553GORR5kDFN5ul7q-A&usqp=CAU&ec=48665701"},
    {id:3,value:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3fCqJSwpf6ZidxhJG2WfMJEBcUoThXid_svxfRcKL_ivtZhikI0JAdvFMDksQf0Ak5rOh_YPgqu4&usqp=CAU&ec=48665701"},
  ];
  const [sliderData,setSliderData]=useState(imgs[0])
  const handleClick=(index)=>{
    console.log(index);
    const slider=imgs[index];
    setSliderData(slider);
  }

  return (
    <div className='container'>
    <div className="App">
    <img src={sliderData.value} alt='' height="300" width="500" />
    <div className='flex_row'>
      {
        imgs.map((data,i)=>
        <div className='thumbnail'>
        <img className= {sliderData.id===i?'clicked':""} key={data.i} src={data.value} alt='' onClick={()=>handleClick(i)} height='70' width="100" />
        </div>
        )
      }
    </div>
    </div>
    <div className='para'>
      <h1>W Maldives</h1>
      <p>The lorem ipsum gets its name from the Latin phrase Neque porro quisquam est qui dolorem ipsum quia dolor sit amet. which translates to “Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain.”The lorem ipsum gets its name from the Latin phrase Neque porro quisquam est qui dolorem ipsum quia dolor sit amet. which translates to “Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain.”The lorem ipsum gets its name from the Latin phrase Neque porro quisquam est qui dolorem ipsum quia dolor sit amet. which translates to “Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain.” </p>
    </div>
    </div>
    
  );
}

export default App;
