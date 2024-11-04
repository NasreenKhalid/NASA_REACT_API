import { useEffect, useState } from 'react'
import SideBar from './components/SideBar'
import Main from './components/Main'
import Footer from './components/Footer'


function App() {

const [data,setData] = useState(null)
const [loading,setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)

function handleToggleModal(){
  setShowModal(!showModal)
}


useEffect(()=>{
async function fetchAPIData(){
  const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
  const url = 'https://api.nasa.gov/planetary/apod' +
  `?api_key=${NASA_KEY}`

  try{
const res = await fetch(url)
const apiData = await res.json()
setData(apiData)
console.log('data', apiData)

  } catch(err){
    console.log(err.message)
  }


}

fetchAPIData()
}, [])

  return (
    <>
    
   {showModal && <SideBar 
   data={data}
   handleToggleModal={handleToggleModal}/>} 
   {data? <Main data={data}/> : (
    <div className='loadingState'>
<i className='fa-solid fa-gear'></i>
    </div>
    
   )} 
   {data && <Footer 
    data={data}
   showModal={showModal} handleToggleModal={handleToggleModal}/>} 

        
    </>
  )
}

export default App
