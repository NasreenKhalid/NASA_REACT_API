import React from 'react'

const Main = ({data}) => {
    // const {data} = props;
    console.log("ada",data)
  return (
    <div className='imgContainer'>
      <img 
      className='bgImage'
      src={data?.url} alt='mars'/>

    </div>
  )
}

export default Main
