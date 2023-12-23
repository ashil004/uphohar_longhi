
import axios from 'axios'
import './App.css'
import From from './from/From'
import Json from './Data/Json'
import { useEffect } from 'react'
import { useState } from 'react'
import { data } from 'autoprefixer'

function App() {

  const [datas, Setdatas] = useState([])



  useEffect(() => {
    fetch('http://localhost:5000/dailyhisab')
      .then(res => res.json())
      .then(data => Setdatas(data));

  }, [])
  




  return (
    <>
      <div className='mx-auto max-w-7xl border-4 border-double border-lime-600'>
        <div className='border-b-4 border-dashed border-black mx-96'>
          <h3 className='text-3xl font-bold text-center uppercase p-4'> উপহার লুঙ্গি</h3>
        </div>
        <From></From>

      </div>
      <div>
        <div className='text-center font-bold' >
          <h3 className='text-5xl p-2 pt-4 text-red-500 '>  উপহার লুঙ্গি ঘর  </h3>
          <h4 className='text-2xl'>প্রোঃ হাজী মোঃ আব্দুস সাত্তার প্রামানিক</h4>
          <h4 className='text-xl'>যদুবয়রা,কুমার খালী,কুষ্টিয়া</h4>
          <h4 className='text-xl'>মোবাইল ঃ 01714443149;</h4>

        </div>
      </div>
      {
        datas.map(data => <Json key={data._id} data={data}></Json>)

      }



    </>
  )
}

export default App
