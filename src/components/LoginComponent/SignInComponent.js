import { useRef, useState } from "react";
import { auth } from "../../firebase";
import SignUpComponent from "./SignUpComponent";

const SignInComponent = () => {
  const [signInLog, setSignInLog] = useState(false);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      {signInLog ? (
        <SignUpComponent />
      ) : (
        <>
          <section className="vh-100" style={{ backgroundColor: "red" }}>
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-12 col-xl-11">
                  <div
                    className="card text-black"
                    style={{ borderRadius: "25px" }}
                  >
                    <div className="card-body p-md-5">
                      <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                          <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                            Sign in
                          </p>

                          <form
                            className="mx-1 mx-md-4"
                            onSubmit={(e) => {
                              e.preventDefault();
                              setSignInLog(true);
                            }}
                          >
                            <div className="d-flex flex-row align-items-center mb-4">
                              <div className="form-outline flex-fill mb-0">
                                <label
                                  className="form-label"
                                  htmlFor="form3Example3c"
                                >
                                  Your Email
                                </label>{" "}
                                <input
                                  ref={emailRef}
                                  type="email"
                                  id="form3Example3c"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center mb-4">
                              <div className="form-outline flex-fill mb-0">
                                <label
                                  className="form-label"
                                  htmlFor="form3Example4c"
                                >
                                  Password
                                </label>{" "}
                                <input
                                  type="password"
                                  ref={passwordRef}
                                  id="form3Example4c"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <button
                              className="btn btn-primary btn-lg btn-block"
                              type="submit"
                              onClick={signIn}
                            >
                              Login
                            </button>
                            <hr />
                            <button
                              className="btn btn-lg btn-block btn-primary d-flex justify-content-center"
                              style={{
                                backgroundColor: "#dd4b39",
                              }}
                            >
                              <span>
                                <> &nbsp;</>

                                <u className="font-weight-bold">SiGN UP NOW!</u>
                              </span>
                            </button>
                          </form>
                        </div>
                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                          <div
                            style={{
                              marginLeft: "130px",
                              backgroundColor: "white",
                            }}
                          >
                            <div>
                              <img
                                src="https://www.pngall.com/wp-content/uploads/1/Sports-Transparent.png"
                                className="img-fluid"
                                alt="Sample image"
                                height={"100%"}
                                width={"70%"}
                              />
                            </div>

                            <br />
                            <span
                              style={{
                                marginLeft: "100px",
                                marginTop: "30px",
                                fontFamily: "Cursive",
                                fontWeight: "bold",
                              }}
                            >
                              Soccer One
                            </span>
                          </div>
                        </div>
                      </div>
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

export default SignInComponent;
