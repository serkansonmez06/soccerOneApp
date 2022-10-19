import React from "react";

const FooterComponent = () => {
  const styleFooter = {
    height: "30px",

    width: "100%",
    backgroundColor: "lightgrey",
    color: "#939393",
    textAlign: "center",
    zIndex: 1,
  };
  return (
    <div>
      <div style={styleFooter} className="position-sticky-bottom">
        <p> &copy; {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </div>
  );
};

export default FooterComponent;
