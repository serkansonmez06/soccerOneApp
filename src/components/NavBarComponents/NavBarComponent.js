import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/userSlice";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";

const NavBarComponent = () => {
  const user = useSelector(selectUser);
  return (
    <div>
      <nav>
        <ul
          className="nav nav-tabs border-bottom border-primary"
          id="nav-tab"
          role="tablist"
        >
          <button className="nav-link border border-primary">
            <li className="nav-item ">
              <Link
                data-toggle="tooltip"
                data-placement="bottom"
                title="Standing and Top Scorer"
                to="/england"
                className="nav-link border border-primary"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Leagues
              </Link>

              <ul className="dropdown-menu">
                <li>
                  <Link
                    to="/england"
                    className="dropdown-item nav-link "
                    aria-current="page"
                  >
                    England
                  </Link>
                </li>
                <li>
                  <Link to="/france" className="dropdown-item nav-link">
                    France
                  </Link>
                </li>
                <li>
                  <Link to="/germany" className="dropdown-item nav-link">
                    Germany
                  </Link>
                </li>
                <li>
                  <Link to="/spain" className="dropdown-item nav-link">
                    Spain
                  </Link>
                </li>
                {/* <li>
              <hr className="dropdown-divider" />
            </li> */}
                <li>
                  <Link to="/italy" className="dropdown-item nav-link">
                    Italy
                  </Link>
                </li>
                <li>
                  <Link to="/turkey" className="dropdown-item nav-link">
                    Turkey
                  </Link>
                </li>
              </ul>
            </li>
          </button>
          <div
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              border: "0",
            }}
          >
            <button className="nav-link border border-primary">
              <li className="nav-item">
                <Link
                  to="/england"
                  className="nav-link border border-primary"
                  data-bs-toggle="dropdown"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Comment, Profile and SignOut"
                  aria-expanded="false"
                  style={{ height: "43.5px" }}
                >
                  Soccer One
                </Link>

                <ul className="dropdown-menu">
                  <li>
                    <Link to="/comments" className="dropdown-item nav-link">
                      Comments
                    </Link>
                  </li>
                  <li>
                    <Link to="/profile" className="dropdown-item nav-link">
                      Profile
                    </Link>
                  </li>

                  <Link
                    to="/france"
                    className="dropdown-item nav-link "
                    onClick={() => auth.signOut()}
                    style={{ backgroundColor: "lightblue" }}
                  >
                    <span style={{ color: "red" }}> {user.email}</span>
                    <li style={{ color: "red" }}> Sig out</li>
                  </Link>
                </ul>
              </li>
            </button>
          </div>
          <li className="nav-item">
            <button className="nav-link">
              <Link
                to="/livescore"
                className="nav-link border border-primary"
                aria-current="page"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Live Games"
              >
                Live Score
              </Link>
            </button>
          </li>

          <li className="nav-item">
            <button className="nav-link">
              <Link
                to="/videos"
                className="nav-link border border-primary"
                aria-current="page"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Videos"
              >
                Videos
              </Link>
            </button>
          </li>
          <li
            style={{
              marginTop: "1%",
              marginLeft: "20%",
              color: "black",
            }}
          >
            <img
              src="https://www.pngall.com/wp-content/uploads/1/Sports-Transparent.png"
              height={"40px"}
              alt="Premier"
            />
          </li>
          <li>
            <p
              style={{
                marginTop: "20%",
                marginLeft: "10px",
                fontFamily: "Cursive",
                fontWeight: "bold",
              }}
            >
              Soccer One
            </p>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBarComponent;
