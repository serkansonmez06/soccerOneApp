import React, { useState } from "react";
import SignInComponent from "./SignInComponent";

const WelcomeComponent = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div>
      <SignInComponent />
      {/* <div>
        {signIn ? (
          <SignInComponent />
        ) : (
          <>
            Welcome page
            <div className="carousel-caption">
              <button
                onClick={() => {
                  setSignIn(true);
                }}
                className="btn btn-warning"
              >
                Get Started
              </button>
            </div>
          </>
        )}
      </div> */}
    </div>
  );
};

export default WelcomeComponent;
