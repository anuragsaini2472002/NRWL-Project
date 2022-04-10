import styles from './detail-comp.module.css';
import Checkboxes from './share';
/* eslint-disable-next-line */
export interface DetailCompProps {}

export function DetailComp({title}) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">DrPlus<sup>+</sup></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <span className="navbar-text">
        {title}
      </span>
    </div>
  </div>
</nav>
<div className="container-fluid"><div className="row">
<table className="table table-striped col-lg-5 col-md-5 col-12">
  <h3>Patient Details</h3>
  <tbody>
    <tr>
      <th scope="row">First Name</th>
      <td>Justin</td>
      
    </tr>
    <tr>
      <th scope="row">Last Name</th>
      <td>Jacob</td>
    
    </tr>
    <tr>
      <th scope="row">DOB</th>
      <td>24062002</td>
    </tr>
    <tr>
      <th scope="row">NHS Number</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">DrPlus Id No</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Gender</th>
      <td>Male</td>
    </tr>
    <tr>
      <th scope="row">Address</th>
      <td>HR, India</td>
    </tr>
  </tbody>
</table>
<div className="col-lg-7 col-md-7 col-12 cln_dtl">
  <h3>Clinic Details</h3>
  <textarea className='text_area_cln' placeholder='Please state the reason for requesting the test with clinical history and findings'></textarea>
  <div className="row cln_row">
    <div className="clinic">
   <div className="col-lg-8 col-md-8 col-12">
      <p>Name of the clinic request: Raj Hospital<br/>
      Clinician results inbox: XXXXXXXXX<br/>
      Clinician contact number for emergency: +11 7778322<br/>
     Dr-Plus emergency contact number: +91 778430000<br/>
      Dr-Plus emergency email for abnormal results: urdent@deplus.co.uk<br/>
      Date of Sample: </p>
      </div>
      <div className="cln_sign col-lg-4 col-md-4 col-12">
      <h4>Clinician Signature</h4>
      </div>
    </div>
  </div>
</div>
    </div>
    </div>
  <div className="inp_val">
{
  Checkboxes.map(item=>(<>
    <h2>{item.head}</h2>
      {item.value.map(option=>(<>
      <div key={option.id} className="chk_vall">
        <input type="checkbox" class="form-check-input" name={option.test} id="exampleCheck1"/>
        <label class="form-check-label" for="exampleCheck1">{option.test}</label>
      </div>
      </>))}
  </>))
}

</div> 
</div>
  );
}

export default DetailComp;


