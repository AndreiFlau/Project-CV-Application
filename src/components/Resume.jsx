/* eslint-disable react/prop-types */
import { useState } from "react";

function Experience({ companyName, position, responsibilities, workedFrom, workedUntil, handleInput }) {
  // function handleDate(startDate, endDate){

  // }

  return (
    <div className="experience">
      <label htmlFor="company-name">Company Name:</label>
      <input
        type="text"
        id="company-name"
        value={companyName}
        placeholder="Company Inc."
        onChange={(e) => handleInput("companyName", e.target.value)}
      />
      <label htmlFor="position">Your position:</label>
      <input
        type="text"
        id="position"
        value={position}
        placeholder="Engineer"
        onChange={(e) => handleInput("position", e.target.value)}
      />
      <label htmlFor="responsibilities">Responsibilities:</label>
      <input
        type="text"
        id="responsibilities"
        value={responsibilities}
        placeholder="I did this and that..."
        onChange={(e) => handleInput("responsibilities", e.target.value)}
      />
      <label htmlFor="worked-from">Worked from:</label>
      <input
        type="date"
        id="worked-from"
        value={workedFrom}
        placeholder="2000-10-10"
        onChange={(e) => handleInput("workedFrom", e.target.value)}
      />
      <label htmlFor="worked-until">Worked until:</label>
      <input
        type="date"
        id="worked-until"
        value={workedUntil}
        placeholder="2000-11-25"
        onChange={(e) => handleInput("workedUntil", e.target.value)}
      />
    </div>
  );
}

function Education({ schoolName, studyTitle, studyDate, handleInput }) {
  return (
    <div className="education">
      <label htmlFor="school-name">School Name:</label>
      <input
        type="text"
        id="school-name"
        value={schoolName}
        placeholder="My School"
        onChange={(e) => handleInput("schoolName", e.target.value)}
      />
      <label htmlFor="title-study">Title of Study:</label>
      <input
        type="text"
        id="title-study"
        value={studyTitle}
        placeholder="Engineer"
        onChange={(e) => handleInput("studyTitle", e.target.value)}
      />
      <label htmlFor="date-study">Date of Study:</label>
      <input
        type="date"
        id="date-study"
        value={studyDate}
        placeholder="1999-12-12"
        onChange={(e) => handleInput("studyDate", e.target.value)}
      />
    </div>
  );
}

function GeneralInfo({ name, surname, email, phone, handleInput }) {
  return (
    <div className="general-info">
      <label htmlFor="first-name">First Name:</label>
      <input type="text" id="first-name" value={name} placeholder="John" onChange={(e) => handleInput("name", e.target.value)} />
      <label htmlFor="surname">Surname:</label>
      <input
        type="text"
        id="surname"
        value={surname}
        placeholder="Doe"
        onChange={(e) => handleInput("surname", e.target.value)}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        placeholder="john@email.com"
        onChange={(e) => handleInput("email", e.target.value)}
      />
      <label htmlFor="phone">Phone Number:</label>
      <input
        type="tel"
        id="phone"
        value={phone}
        placeholder="+17252800241"
        onChange={(e) => handleInput("phone", e.target.value)}
      />
    </div>
  );
}

function Resume() {
  const [resumeInfo, setResumeInfo] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    schoolName: "",
    studyTitle: "",
    studyDate: "",
    companyName: "",
    position: "",
    responsibilities: "",
    workedFrom: "",
    workedUntil: "",
  });
  const [toggle, setToggle] = useState(false);

  function handleInput(key, value) {
    if (toggle === false) {
      setResumeInfo((previousInfo) => ({ ...previousInfo, [key]: value }));
    }
  }

  function handleSubmit(e, startDate = resumeInfo.workedFrom, endDate = resumeInfo.workedUntil) {
    e.preventDefault();
    const start = new Date(startDate);
    const end = new Date(endDate);
    if (start > end) {
      alert("'Worked From' should be earlier than 'Worked Until'");
    } else {
      setToggle(true);
    }
  }

  function handleEdit() {
    setToggle(false);
  }

  return (
    <div className="resume">
      {toggle ? (
        <>
          <div className="general-info-display">
            <p>{resumeInfo.name + " " + resumeInfo.surname}</p>
            <p>{resumeInfo.email}</p>
            <p>{resumeInfo.phone}</p>
          </div>
          <div className="education-display">
            <p>{resumeInfo.schoolName}</p>
            <p>{resumeInfo.studyTitle}</p>
            <p>{resumeInfo.studyDate}</p>
          </div>
          <div className="experience-display">
            <p>{resumeInfo.companyName}</p>
            <p>{resumeInfo.position}</p>
            <p>{resumeInfo.responsibilities}</p>
            <p>{resumeInfo.workedFrom}</p>
            <p>{resumeInfo.workedUntil}</p>
          </div>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <GeneralInfo
            name={resumeInfo.name}
            surname={resumeInfo.surname}
            email={resumeInfo.email}
            phone={resumeInfo.phone}
            handleInput={handleInput}
          />
          <Education
            schoolName={resumeInfo.schoolName}
            studyTitle={resumeInfo.studyTitle}
            studyDate={resumeInfo.studyDate}
            handleInput={handleInput}
          />
          <Experience
            companyName={resumeInfo.companyName}
            position={resumeInfo.position}
            responsibilities={resumeInfo.responsibilities}
            workedFrom={resumeInfo.workedFrom}
            workedUntil={resumeInfo.workedUntil}
            handleInput={handleInput}
          />
          <button>Submit</button>
        </form>
      )}
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
}

export default Resume;
