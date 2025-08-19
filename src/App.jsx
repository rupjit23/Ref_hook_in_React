import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'

function App() {
  const [time,setTime]=useState(0);
  let timer=useRef(null)
  function startTime(){
   timer.current=setInterval(()=>{
      setTime(time=>time+1)
    },1000)
  }
  function stopTimer(){
clearInterval(timer.current)
timer.current=null;
  }
  function resetTime(){
    stopTimer();
    setTime(0)
  }
  return (
   <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 space-y-6">
  {/* Stopwatch Heading */}
  <h1 className="text-3xl font-bold text-gray-800">
    Stopwatch: <span className="text-blue-600">{time}</span> seconds
  </h1>

  {/* Buttons */}
  <div className="flex space-x-4">
    <button 
      onClick={startTime} 
      className="px-5 py-2 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 transition"
    >
      Start
    </button>

    <button 
      onClick={stopTimer} 
      className="px-5 py-2 bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-red-600 transition"
    >
      Stop
    </button>

    <button 
      onClick={resetTime} 
      className="px-5 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition"
    >
      Reset
    </button>
  </div>
</div>

  )
}

export default App
