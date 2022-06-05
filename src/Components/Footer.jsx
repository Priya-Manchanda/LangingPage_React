import React from "react";
function Footer() {
  return (
    <div className="foot">
      <div className="colour">
        <img src="./footer.png"></img>
      </div>
      <div>
        <table className="colour1">
          <th>Quick Links</th>
          <th>Flats in Mumbai</th>
          <th>Project Links</th>
          <tr className="tab"></tr>
          <td>Contact Us</td>
          <td>1BHK Andheri West</td>
          <td>Ongoing</td>
          <tr className="tab"></tr>
          <td>About Us</td>
          <td>2BHK Andheri West</td>
          <td>Upcoming</td>
          <tr className="tab"></tr>
          <td>Testimonials</td>
          <td>3BHK Andheri West</td>
          <td>Completed</td>
          <tr className="tab"></tr>
          <tr className="tab">
            <td>Gallery</td>
            <td>1BHK Goregaon East</td>
            <td>Hetali Blessings</td>
          </tr>
          <tr>
            <td>Site Map</td>
            <td>2BHK Goregaon East</td>
            <td>Hetali Anuchhaya</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
export default Footer;
