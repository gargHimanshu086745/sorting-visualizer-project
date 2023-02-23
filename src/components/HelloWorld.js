import React from 'react'

function HelloWorld(props) {

    const greeting = "HelloWorld"
    const introduction ="My name is alex"
    const link = "http://www.google.com"
    const myStyle = {backgroundColor: 'red' ,padding: '10px', fontSize: '20px' , color: 'blue'}
  return (
    <div style={myStyle}>
    <div>{greeting}</div>
    <div>{introduction}</div>
    <a href={link}>Go to Google</a>
    <div>{props.number}</div>
    <div className='call-app-css'> Call app css class</div>
    </div>
    
  )
}

export default HelloWorld