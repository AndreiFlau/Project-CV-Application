/* eslint-disable react/prop-types */
import { useState } from 'react'

function Experience({handleInput}) {
  return (
  <div className="experience">
    <label htmlFor="company-name">Company Name:</label>
    <input type="text" id="company-name" onChange={(e) => handleInput("companyName", e.target.value)}/>
    <label htmlFor="position">Your position:</label>
    <input type="text" id="position" onChange={(e) => handleInput("position", e.target.value)}/>
    <label htmlFor="responsibilities">Responsibilities:</label>
    <input type="text" id="responsibilities" onChange={(e) => handleInput("responsibilities", e.target.value)}/>
    <label htmlFor="worked-from">Worked from:</label>
    <input type="date" id="worked-from" onChange={(e) => handleInput("workedFrom", e.target.value)}/>
    <label htmlFor="worked-until">Worked until:</label>
    <input type="date" id="worked-until" onChange={(e) => handleInput("workedUntil", e.target.value)}/>
  </div>
  )
}

function Education({handleInput}) {
  return (
  <div className="education">
    <label htmlFor="school-name">School Name:</label>
    <input type="text" id="school-name" onChange={(e) => handleInput("schoolName", e.target.value)}/>
    <label htmlFor="title-study">Title of Study:</label>
    <input type="text" id="title-study" onChange={(e) => handleInput("studyTitle", e.target.value)}/>
    <label htmlFor="date-study">Date of Study:</label>
    <input type="date" id="date-study" onChange={(e) => handleInput("studyDate", e.target.value)}/>
  </div>
  )
}

function GeneralInfo({handleInput}) {
  return (
  <div className="general-info">
    <label htmlFor="first-name">First Name:</label>
    <input type="text" id="first-name" onChange={(e) => handleInput("name", e.target.value)} />
    <label htmlFor="surname">Surname:</label>
    <input type="text" id="surname" onChange={(e) => handleInput("surname", e.target.value)} />
    <label htmlFor="email">Email:</label>
    <input type="email" id="email" onChange={(e) => handleInput("email", e.target.value)} />
    <label htmlFor="phone">Phone Number:</label>
    <input type="number" id="phone" onChange={(e) => handleInput("phone", e.target.value)} />
  </div>
  )
}



function Resume(){
  const [resumeInfo, setResumeInfo] = useState({name: "John", surname: "Doe", email: "john@email.com",
    phone: "+9000", schoolName: "Something", studyTitle: "Engineer", studyDate: "12/12/1999", 
   companyName: "Company Inc.", position: "Carpenter", responsibilities: "none", workedFrom: "20/10/2000",
 workedUntil: "25/11/2000"})

 function handleInput(key, value){
  setResumeInfo(previousInfo => ({...previousInfo, [key]: value}))
 }

  return(
  <div className="resume">
    <GeneralInfo handleInput={handleInput}/>
    <Education handleInput={handleInput}/>
    <Experience handleInput={handleInput}/>
    <h1>{resumeInfo.name + " " + resumeInfo.surname + " - " + resumeInfo.phone}</h1>
    <h1>{resumeInfo.schoolName}</h1>
    <h1>{resumeInfo.workedFrom}</h1>
  </div>
  )
}

export default Resume