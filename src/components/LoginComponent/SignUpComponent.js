import React, { useEffect, useState, useRef } from "react";
import { auth } from "../../firebase";
//import LoginComponent from "./LoginComponent";
import axios from "axios";
import SignInComponent from "./SignInComponent";

const SignUpComponent = () => {
  const [signIn, setSignIn] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  // const [admin, setAdmin] = useState({ id: "", email: "" });
  const [testAdmin, setTestAdmin] = useState({ email: "" });

  const register = () => {
    // console.log("register");

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        // console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  //  const handleOnChange = (e) => {
  //    e.preventDefault();
  //    setAdmin({ ...admin, [e.target.name]: e.target.value });
  //  };

  //  const saveAdmin = async () => {
  //    await axios
  //      .post(process.env.REACT_APP_BASE_ADMIN_SAVE, admin)
  //      .then((response) => {
  //        setAdmin(response.data);
  //      })
  //      .catch((err) => console.log(err));
  //  };
  //  const getAdmin = async () => {
  //    await axios
  //      .get(process.env.REACT_APP_BASE_ADMIN)
  //      .then((response) => {
  //        setAdmin(response.data);
  //        setTestAdmin({ email: response.data[0].email });
  //      })
  //      .catch((err) => console.log(err));
  //  };
  //  useEffect(() => {
  //    getAdmin();
  //  }, []);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "red" }}>
      {signIn ? (
        <SignInComponent />
      ) : (
        <>
          <section className="vh-100vh">
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                  <div
                    className="card shadow-2-strong"
                    style={{ borderRadius: "1rem" }}
                  >
                    <div className="card-body p-5 text-center">
                      <h3 className="mb-5">Create Account</h3>

                      <div className="form-outline mb-4">
                        <input
                          ref={emailRef}
                          // onChange={handleOnChange}
                          name="email"
                          type="email"
                          id="typeEmailX-2"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="typeEmailX-2">
                          Email
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          ref={passwordRef}
                          type="password"
                          id="typePasswordX-2"
                          className="form-control form-control-lg"
                          // onChange={handleOnChange}
                        />
                        <label className="form-label" htmlFor="typePasswordX-2">
                          Password
                        </label>
                      </div>

                      {testAdmin.email === "" ? (
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckChecked"
                            // onClick={saveAdmin}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckChecked"
                            style={{ fontWeight: "bold" }}
                          >
                            Become Admin
                          </label>
                        </div>
                      ) : (
                        ""
                      )}
                      <hr className="my-4" />

                      <button
                        className="btn btn-lg btn-block btn-primary "
                        type="submit"
                        style={{
                          backgroundColor: "#dd4b39",
                        }}
                        onClick={() => {
                          register();
                          setSignIn(true);
                        }}
                      >
                        Create Account
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default SignUpComponent;
