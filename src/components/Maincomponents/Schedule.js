import React from 'react';
import './Mainpage.css';

const Schedule = () => {
  return (
    <div className="community">
      <div className="timetable" id="rightline">
        <div className="time">
          <h1> Our Opening Hours</h1>
          <h2>Monday to Friday</h2>
          <h4> <b>Open</b> Lunch</h4>
          <h4> <b>Open</b> Dinner</h4>
          <h2>Saturday </h2>
          <h4><b>Open</b> Dinner</h4>
          <h2>Sunday</h2>
          <h5>CLOSED</h5>
        </div>
      </div>
      <div className="fcf-body">
        <div id="fcf-form">
          <h3 className="fcf-h3">Contact us</h3>
          <form id="fcf-form-id" className="fcf-form-class" method="post" action="contact-form-process.php">
            <div className="fcf-form-group">
              <label htmlFor="Name" className="fcf-label">Your name</label>
              <div className="fcf-input-group">
                <input type="text" id="Name" name="Name" className="fcf-form-control" required />
              </div>
            </div>
            <div className="fcf-form-group">
              <label htmlFor="Email" className="fcf-label">Your email address</label>
              <div className="fcf-input-group">
                <input type="email" id="Email" name="Email" className="fcf-form-control" required />
              </div>
            </div>
            <div className="fcf-form-group">
              <label htmlFor="Message" className="fcf-label">Your message</label>
              <div className="fcf-input-group">
                <textarea id="Message" name="Message" className="fcf-form-control" rows="6" maxLength="3000" required></textarea>
              </div>
            </div>
            <div className="fcf-form-group">
              <button type="submit" id="fcf-button" className="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
