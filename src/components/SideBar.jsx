import React from 'react'

const SideBar = ({handleToggleModal,data}) => {
  return (
    <div className='sidebar'>
      <div
      onClick={handleToggleModal}
      className='bgOverlay'></div>
      <div className='sidebarContents'>
      <h2>{data?.title}</h2>
      <div>
        <p>Description</p>
        <p>{data?.explanation}</p>
        
      </div>
      <butt><i className='fa-solid fa-arrow-right'></i></butt>
      </div>
    </div>
  )
}

export default SideBar
