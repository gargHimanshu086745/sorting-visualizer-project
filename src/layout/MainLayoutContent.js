import React from 'react'
import { useState } from 'react';
import '../App.css'
import MainLayout from './MainLayout';
function MainLayoutContent() {

    const [name, setName] = useState("");
  const [students, setStudents] = useState(['Alex', 'Himanshu', 'Joe']);

  const [showNotification,setShowNotification] =useState(false);
  // const students = ['Alex', 'Himanshu', 'Joe'];

  const handleSubmit =(event)=>{
    event.preventDefault();
    // alert("My name is "+name);
    setStudents(currentStudents =>[...currentStudents,name])
    setName('')
  }

  const handleDelete =(deletingStudent) =>{
    const newStudents =students.filter((student)=> student !== deletingStudent);
    // alert(student)
    setStudents(newStudents);
  }

  const toggleNotification =()=>{

      setShowNotification(!showNotification)
  }


  return (
    
    <MainLayout>

      {/* <HelloWorld number={num}/>
      <div className="sample-css"> Hello app css</div>

      <Sample></Sample> */}
      <br></br>
      {/* { showNotification? <div className='notification'>This is Notification </div>:''} */}

      {/* <button onClick={()=>toggleNotification()}>Toggle Notification</button> */}
      {/* <br></br>
      <Greeting></Greeting> */}
      {/* <br></br>

      <form onSubmit={handleSubmit}>
        <div>Add a new student</div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type ="submit" />
      </form> */}
      
      {/* <br></br>
      <h1>All students</h1>
      <ul>
        {
          students.map((student,index)=> <li key={index}>{student} <button onClick={()=> handleDelete(student)}>Delete</button></li> )
        }
      </ul> */}

    </MainLayout>
  )
}

export default MainLayoutContent