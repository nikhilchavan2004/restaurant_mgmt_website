import React from "react";

const Footer = () => {
  return (
    <footer  style={{
      color:"white",
      backgroundColor:"black",
    }}>
      <div className="container" 
      >
        <div className="banner"  style={{
      color:"white",}}>
          <div className="left">Nikhil</div>
          <div className="right"   style={{
      color:"white",}}>
            <p  style={{
      color:"white",}}>Swargate,Pune</p>
            <p  style={{
      color:"white",}}>Open:05:00 PM-12:00 AM</p>
          </div>
        </div>
        <div className="banner"  style={{
      color:"white",}}>
          <div className="left"  style={{
      color:"white",}}>
            <p>Developed By:NIKHIL</p>
            <div className="right"  style={{
      color:"white",}}>
              <p>All rights reserved by NRCHAVAN 2024,Inc</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
