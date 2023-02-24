import React, { useState } from "react";
import ReactDOM from "react-dom";
import './App.css'
import "./styles.css";
import './layout/MainLayout.css'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayoutContent from "./layout/MainLayoutContent";
import database from "./idPassword";
function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [User, setUname] = useState('');
  // User Login info
  // const database = [
  //   {
  //     username: "Himanshu",
  //     password: "pass1"
  //   },
  //   {
  //     username: "user2",
  //     password: "pass2"
  //   },
  //   {
  //     username: "Deepanshu",
  //     password: "pass4"
  //   }
  // ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

      const handlechange=(event)=>{

        setUname(event.target.value);

    }

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
        <div className="title">Sign In</div>
          <label>Username </label>
          <input type="text" name="uname" onChange={handlechange} required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" className="rendersubmit"/>
        </div>
      </form>
    </div>
  );


  // const rout = (

  //   <Router>
  //     <Navbar />
  //     <Routes>
  //       <Route path='/' exact component={Home} />
  //       <Route path='/about' component={About} />
  //       <Route path='/events' component={Events} />
  //       <Route path='/annual' component={AnnualReport} />
  //       <Route path='/team' component={Teams} />
  //       <Route path='/blogs' component={Blogs} />
  //       <Route path='/sign-up' component={SignUp} />
  //     </Routes>
  //   </Router>

  // );
  
  // function App2() {
  //   return (
  //     <Router>
  //       <Navbar />
  //       <Routes>
  //         <Route path='/' exact component={Home} />
  //         <Route path='/About' component={About} />
  //         <Route path='/Events' component={Events} />
  //         <Route path='/Annual' component={AnnualReport} />
  //         <Route path='/team' component={Teams} />
  //         <Route path='/Blogs' component={Blogs} />
  //         <Route path='/sign-up' component={SignUp} />
  //       </Routes>
  //     </Router>
  //     // <div> Hello</div>
  //   );
  // }


  return (
    <div className="app2">
      <div className="login-form2">
        
        {/* {isSubmitted 
        ? <div>
          Welcome  {User} is successfully logged in
          </div> : renderForm} */}

        {isSubmitted ? <MainLayoutContent></MainLayoutContent> : <div className="app login-form">{renderForm}</div>}
      </div>
    </div>
  );
}

export default App;