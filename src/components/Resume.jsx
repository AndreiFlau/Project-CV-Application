/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/Resume.css";

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
        required
      />
      <label htmlFor="position">Your position:</label>
      <input
        type="text"
        id="position"
        value={position}
        placeholder="Engineer"
        onChange={(e) => handleInput("position", e.target.value)}
        required
      />
      <label htmlFor="responsibilities">Responsibilities:</label>
      <textarea
        rows="4"
        cols="50"
        id="responsibilities"
        value={responsibilities}
        placeholder="I did this and that..."
        onChange={(e) => handleInput("responsibilities", e.target.value)}
        required
      />
      <label htmlFor="worked-from">Worked from:</label>
      <input
        type="date"
        id="worked-from"
        value={workedFrom}
        placeholder="2000-10-10"
        onChange={(e) => handleInput("workedFrom", e.target.value)}
        required
      />
      <label htmlFor="worked-until">Worked until:</label>
      <input
        type="date"
        id="worked-until"
        value={workedUntil}
        placeholder="2000-11-25"
        onChange={(e) => handleInput("workedUntil", e.target.value)}
        required
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
        required
      />
      <label htmlFor="title-study">Title of Study:</label>
      <input
        type="text"
        id="title-study"
        value={studyTitle}
        placeholder="Engineer"
        onChange={(e) => handleInput("studyTitle", e.target.value)}
        required
      />
      <label htmlFor="date-study">Date of Study:</label>
      <input
        type="date"
        id="date-study"
        value={studyDate}
        placeholder="1999-12-12"
        onChange={(e) => handleInput("studyDate", e.target.value)}
        required
      />
    </div>
  );
}

function GeneralInfo({ name, surname, email, phone, handleInput }) {
  return (
    <div className="general-info">
      <label htmlFor="first-name">First Name:</label>
      <input
        type="text"
        id="first-name"
        value={name}
        placeholder="John"
        onChange={(e) => handleInput("name", e.target.value)}
        required
      />
      <label htmlFor="surname">Surname:</label>
      <input
        type="text"
        id="surname"
        value={surname}
        placeholder="Doe"
        onChange={(e) => handleInput("surname", e.target.value)}
        required
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        placeholder="john@email.com"
        onChange={(e) => handleInput("email", e.target.value)}
        required
      />
      <label htmlFor="phone">Phone Number:</label>
      <input
        type="tel"
        id="phone"
        value={phone}
        placeholder="+17252800241"
        onChange={(e) => handleInput("phone", e.target.value)}
        required
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

  function handleEdit(e) {
    e.preventDefault();
    setToggle(false);
  }

  return (
    <div className="resume">
      {toggle ? (
        <>
          <div className="resume-wrapper">
            <div className="general-info-display">
              <p>Name: {resumeInfo.name + " " + resumeInfo.surname}</p>
              <p>Email: {resumeInfo.email}</p>
              <p>Phone Number: {resumeInfo.phone}</p>
            </div>
            <div className="education-display">
              <p>
                Studied at {resumeInfo.schoolName}. Finished his studies on {resumeInfo.studyTitle} at {resumeInfo.studyDate}.
              </p>
            </div>
            <div className="experience-display">
              <p>
                Worked for {resumeInfo.companyName} at the position of {resumeInfo.position} from {resumeInfo.workedFrom} to{" "}
                {resumeInfo.workedUntil}. Having the following responsibilities: {resumeInfo.responsibilities}
              </p>
            </div>
          </div>
          <button onClick={handleEdit} className="edit">
            Edit
          </button>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="resume-wrapper">
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
          </div>
          <button>Submit</button>
        </form>
      )}
    </div>
  );
}

export default Resume;
