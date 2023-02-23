import React from 'react'

function Greeting() {

    // function sayhi(name, surname){
    //     alert('Hi ' + name + ' '+ surname)
    // }
    const sayhi = (name, surname)=>{
        alert('Hi ' + name + ' '+ surname)
    }
  return (
    <div>
        <button onClick={()=>sayhi('alex','Devtamin')}>Say hi</button>
    </div>
  )
}

export default Greeting