import React from 'react'
import './Button.css'

export default function Button({isDelete = true, onClick=()=>{}, text="Delete User ?"}) {
  return (
    <div onClick={onClick} className={`button-container ${!isDelete ? "info":""}`}>
        <div className="icon" />
        <h2>{text}</h2>
    </div>
  )
}
