import styles from './home.module.css';

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  return (<>
    <main>
      <section className="section section-dct">
        <div className="container grid grid-two-column">
          <div className="dct-data">
            <h1 className="primary-heading">Consult with your own Doctor</h1>
            <p className="para">
              Consult a doctor online on DrPlus for any health concern. With trusted
              doctors across 30+ specialities will ensure all your health queries are answered.
              You can get online advice from a Psychiatrist, Pediatrician, Sexologist, Neurologist.
            </p>
            <a href="#" className="btn">Consult Now</a>

            <div className="dct-icons">
              <div className="grid grid-two-column">
                <div className="dct-icon-style">
                  <h2>24x7 access to doctors</h2>
                  <p className="para">
                   Our doctors listen to you patiently and only prescribe what's necessary
                  </p>
                </div>
                <div className="dct-icon-style">                 
                  <h2>Trusted and secure</h2>
                  <p className="para">
                    Nothing is hiddenn access your medical records in your Health Locker
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- right side dct section  --> */}
          <div className="dct-image">
            <img
              src="/doctor.jpg"
              alt="Doctor consult images"
              className="image"
            />
            <div className="dct-img-overlay">
              <p className="para">
              "DrPlus is on a mission to make quality healthcare affordable and accessible for over a billion+ people.
                    We believe in empowering our users with the most accurate, comprehensive, and curated information and care,
                    enabling them to make better healthcare decisions."
              </p>
              <p className="para">Team</p>
              <p className="para">DrPlus<sup>+</sup></p>
            </div>
          </div>
        </div>
      </section>
      <div className="data_home">
        <div className="data_home_left">
          <h1>Safety of your data is our <br/><span>top priority</span></h1>
          <ul>
            <li>Multi-level security checks</li>
            <li>Multiple data backups</li>
            <li>Stringent data privacy policies</li>
          </ul>
        </div>
        <div className="data_home_right">
          <img src="/security.png" alt="Guard images" className='image' />
        </div>
      </div>
      <div className="home_record">
        <div className="home_record_left">
          <img src="/record.png" alt="record images" className="image"/>
        </div>
        <div className="home_record_right">
          <h1>All your medical records<br/><span>In one secure app.</span></h1>
          <ul>
            <li>256-bit end to end encryption</li>
            <li>Records are accessible only by you</li>
            <li>Access your records across 1000+ centers</li>
          </ul>
        </div>
      </div>

      <div className="home_app">
        <div className="home_app_left">
          <h1>Download the DrPlus<sup>+</sup> app</h1>
          <p>Access video cunsultation with India's top doctors on the DrPlus app.<br/>
            Connect with doctors online, available 24/7, from the comfort of your home.
          </p>
          <h2>Get the link to download the app</h2>
          <div className="app_inp">
          <input type="text" width="10rem" placeholder="Enter phone number" className="home_app_inp"/>
          <button className="home_app_btn">Send SMS</button>
          </div>
        </div>
        <div className="home_app_right">
          <img src="/app.jpg" alt="Download images" className="image_app"/>
        </div>
      </div>
    </main>
    <div className="container">
    <div className="row about_info">
    <div className="about_main_head">
      <h1>Quality Healthcare Made Simple</h1>
      <div className="about_main_head_para">
        <h2>Our Mission</h2>
        <p>DrPlus is on a mission to make quality healthcare affordable and 
          accessible for over a billion+ people. We believe in empowering our users with the most accurate,
          comprehensive, and curated information and care, enabling them to make
          better healthcare decisions.
        </p>
      </div>
    </div>

    <div className="about_sec">
      <div className="about_sec_left">
        <h1>Health is a habit</h1>
      <p>If is the journey that takes you to new destinations every day 
        with endless possibilities of life on the back of happiness, energy, 
        and hope. DrPlus wants to make this journey easy for every people and help them 
        live healthier and longer lives.
      </p>
      </div>
      <div className="about_sec_right">
        {/* IMAGE */}
      </div>
    </div>

    <div className="about_third">
      <h1>Our offerings</h1>
      <div className="about_third_left col-lg-6 col-md-6 col-12">
        <ul>
          <li><span>Comprehensive medical directory</span>with detailed, verified information about more than a lakh doctor partners across the country</li>
          <li><span>Online appointment booking</span>at over 9,000 leading hospitals and clinics with doctors who use DrPlus Prime</li>
          <li><span>Online consultation</span>with trusted doctors across 30+ specialities</li>
          <li><span>Plus, subscription-based health plans</span>that provide unlimited online consultations* with doctors 24*7*365 *Fair usage policy applicable</li>
        </ul>
      </div>
      <div className="about_third_right col-lg-6 col-md-6 col-12">
        <ul>
          <li><span>Ray, </span>DrPlus<sup>+</sup> award-winning practice management software, which is used by 10,000+ clinics</li>
          <li><span>Insta</span>a full-stack HIMS solution, which is trusted by 500+ clients across 1,200+ facilities</li>
          <li><span>Diagnostic Tests through Practo Associate Labs</span> to get samples collected from the comfort and safety of one’s home</li>
          <li><span>	Medicine delivery</span>by a network of verified pharmacies across the country</li>
        </ul>

      </div>
    </div>
    </div>
  </div></>
  );
}

export default Home;
