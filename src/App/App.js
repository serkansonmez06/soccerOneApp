import React, { useEffect } from "react";
import { auth } from "../firebase";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, login, logout } from "../redux/userSlice";
import WelcomeComponent from "../components/LoginComponent/WelcomeComponent";
import NavBarComponent from "../components/NavBarComponents/NavBarComponent";
import FooterComponent from "../components/Footer/FooterComponent";
import HomeComponent from "../components/HomeComponent/HomeComponent";
const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubcribe;
  }, [dispatch]);
  return (
    <div style={{ minHeight: "100vh" }}>
      {!user ? (
        <WelcomeComponent />
      ) : (
        <>
          <NavBarComponent />
          <HomeComponent />
          <FooterComponent />
        </>
      )}
    </div>
  );
};

export default App;
