import React from 'react'
import {Counter, InputChnage, Calculator, Calculate} from './Counter'



function App() {


  return (
  
  <div className='flex flex-col justify-center items-center space-y-10 h-[100%] bg-slate-200'>
     <Counter/>
     <InputChnage/>
     <Calculator/>
     <Calculate/>
  </div> 
  );
}

export default App
