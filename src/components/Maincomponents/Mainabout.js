import React from 'react';
import './Mainpage.css'; // Make sure to create this CSS file

const TextImageSection = () => {
  return (
    <div className="about-section">
      <div className="left-side">
        <div className="text-content">
        <h2> <u>Who Are We</u> </h2>
        <p>Wombles is a restaurant renowed as a fine-dining steakhouse in Harare, Zimbabwe.
      It's fascinating and colorful history of local andinternational culinary excellece stretching
    back almost four decades has made it a household name in the city.</p>
    <p>It is a fine dining restaurant and features an excellent Menu
    and wine list, with prices commensurate with expectations from a A-liist venue.
  at the cor of the menu is at heart a steakhouse, but with a wide selectiion of other dishes, including
vegeterian options - makes it both varied and interesting to folk looking for no-beef content.</p>
        </div>
        <img src="img1/5.jpg" alt="Your Description" className="image2" />
        <img src="img1/4.jpg" alt="image1" className="image1" />
      </div>
      <div className="right-side">
        <img src="img1/4.jpg" alt="image1"  />
      </div>
    </div>
  );
}

export default TextImageSection;
