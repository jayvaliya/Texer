import React from 'react'

export default function Contact(props) {
  return (
    <div className={`container text-${props.mode==='dark'?'light':'dark'}`}>
      <h1>{":( This page is under construction."}</h1>
    </div>
  )
}