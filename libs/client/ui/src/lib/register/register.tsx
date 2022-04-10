import {useState, useEffect} from 'react';
import styles from './register.module.css';

/* eslint-disable-next-line */
export interface RegisterProps {}

export function Register(props: RegisterProps) {

const [inputVal, setInputVal] = useState({
    firstName:"",
    lastName:"",
    email:"",
    dob:"",
    nhsNumber:"",
    drPlusIdNo:"",
    gender:"",
    address:""
  })

  const setData = (e) => {
    const {name,value} = e.target;
    setInputVal({...inputVal,[name]:value});
}

const addData = async (e) =>{
    e.preventDefault();

    const {firstName, lastName, email, dob, nhsNumber, drPlusIdNo, gender, address} = inputVal;

    const bodyObject = {firstName, lastName, email, dob, nhsNumber, drPlusIdNo, gender, address};
    const res = await fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyObject)
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
        console.log("error ");
        alert("error");

    } else {
        console.log("data added");
    }
}




  return (<div className="container">
    <form>
  <div className="mb-3">
    <label htmlFor="exampleInputFirstName" className="form-label">FirstName</label>
    <input type="text" className="form-control" value={inputVal.firstName}  onChange={setData} name="firstName" id="exampleInputFirstName" aria-describedby="firstNamelHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputFastName" className="form-label">LastName</label>
    <input type="text" className="form-control" value={inputVal.lastName}  onChange={setData} name="lastName" id="exampleInputlastName" aria-describedby="lastNamelHelp"/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputemail" className="form-label">Email</label>
    <input type="email" className="form-control" value={inputVal.email}  onChange={setData} name="email" id="exampleInputemail" aria-describedby="emaillHelp"/>
  </div>
 
  <div className="mb-3">
    <label htmlFor="exampleInputdob" className="form-label">DOB</label>
    <input type="number" className="form-control" value={inputVal.dob} onChange={setData} name="dob" id="exampleInputdob" aria-describedby="doblHelp"/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputnhsNumber" className="form-label">NHS Number</label>
    <input type="number" className="form-control" value={inputVal.nhsNumber}  onChange={setData} name="nhsNumber" id="exampleInputnhsNumber" aria-describedby="nhsNumberlHelp"/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputdrPlusIdNo" className="form-label">Dr-Plus ID no</label>
    <input type="number" className="form-control" value={inputVal.drPlusIdNo}  onChange={setData} name="drPlusIdNo" id="exampleInputdrPlusIdNo" aria-describedby="drPlusIdNolHelp"/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputgender" className="form-label">Gender</label>
    <input type="text" className="form-control" value={inputVal.gender}  onChange={setData} name="gender" id="exampleInputgender" aria-describedby="genderlHelp"/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputaddress" className="form-label">Address</label>
    <input type="text" className="form-control" name="address" value={inputVal.address} onChange={setData} id="exampleInputaddress" aria-describedby="addresslHelp"/>
  </div>

  <button type="submit" onClick={addData} className="btn btn-primary">Submit</button>
</form>
  </div> );
}

export default Register;
