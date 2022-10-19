import { Route, Routes } from "react-router-dom";

import England from "../NavBarComponents/Leagues/England";
import France from "../NavBarComponents/Leagues/France";
import Spain from "../NavBarComponents/Leagues/Spain";
import Turkey from "../NavBarComponents/Leagues/Turkey";
import Germany from "../NavBarComponents/Leagues/Germany";
import Italy from "../NavBarComponents/Leagues/Italy";
import LiveScoreComponent from "../NavBarComponents/LiveScoreComponent";
import VideosComponent from "../NavBarComponents/VideosComponent";
import CommentsComponent from "../NavBarComponents/soccerOne/CommentsComponent";
import ProfileComponent from "../NavBarComponents/soccerOne/ProfileComponent";

const HomeComponent = () => {
  return (
    <div>
      <Routes>
        <Route path="/livescore" element={<LiveScoreComponent />} />
        <Route path="/england" element={<England />} />
        <Route path="/france" element={<France />} />
        <Route path="/germany" element={<Germany />} />
        <Route path="/italy" element={<Italy />} />
        <Route path="/spain" element={<Spain />} />
        <Route path="/turkey" element={<Turkey />} />
        <Route path="/" element={<LiveScoreComponent />} />
        <Route path="/videos" element={<VideosComponent />} />
        <Route path="/comments" element={<CommentsComponent />} />
        <Route path="/profile" element={<ProfileComponent />} />
      </Routes>
    </div>
  );
};

export default HomeComponent;
