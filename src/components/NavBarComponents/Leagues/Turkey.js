import React, { useEffect, useState } from "react";
import axios from "axios";

const Turkey = () => {
  const [dataStanding, setDataStanding] = useState([]);
  const [dataTopScorer, setDataTopScorer] = useState([]);
  const [flip, setFlip] = useState(true);

  const getDatat = async () => {
    await axios
      .get(
        "https://apiv2.allsportsapi.com/football/?&met=Topscorers&leagueId=322&APIkey=c6934c58fbacf10be4d035169eaf4e5198e3b47384fd07acc490fa7d075b66a0"
      )
      .then((respose) => {
        setDataTopScorer(respose.data.result);
        // console.log(respose.data.result);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDatat();
  }, []);
  const getData = async () => {
    await axios
      .get(
        "https://apiv2.allsportsapi.com/football/?&met=Standings&leagueId=322&APIkey=c6934c58fbacf10be4d035169eaf4e5198e3b47384fd07acc490fa7d075b66a0"
      )
      .then((respose) => {
        setDataStanding(respose.data.result.total);
        // console.log(respose.data.result.total);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div
      className="d-flex justify-content-center"
      style={{ backgroundColor: "#7554ae", minHeight: "100vh" }}
    >
      <div
        style={{
          position: "absolute",
          top: "80px",
          right: "190px",
          color: "white",
        }}
      >
        <img
          src="https://www.countryflags.com/wp-content/uploads/turkey-flag-png-large.png"
          alt="Countryflag"
          height={"80px"}
          width={"150px"}
        />
        <p>Turkish Super League</p>
      </div>
      <div
        style={{
          position: "absolute",
          top: "80px",
          left: "180px",
          border: "0",
        }}
      >
        <button
          type="button"
          className="btn btn-light "
          style={{ heigt: "20px", marginBottom: "20px", color: "green" }}
          onClick={() => {
            setFlip(true);
          }}
        >
          {/* <Link to="/topscorer" style={{ textDecoration: "none" }}>
                Top Scorers
              </Link> */}
          Standing
        </button>
      </div>
      <div
        style={{
          position: "absolute",
          top: "80px",
          left: "290px",
          border: "0",
        }}
      >
        <button
          type="button"
          className="btn btn-light "
          style={{ heigt: "20px", marginBottom: "20px", color: "green" }}
          onClick={() => {
            setFlip(false);
          }}
        >
          {/* <Link to="/topscorer" style={{ textDecoration: "none" }}>
                Top Scorers
              </Link> */}
          Top Scorer
        </button>
      </div>
      {flip ? (
        <div>
          <div
            style={{
              marginTop: "80px",
              marginLeft: "150px",
              marginBottom: "40px",
              height: "85px",
            }}
          >
            <div style={{ marginLeft: "50px" }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/S%C3%BCper_Lig_logo.svg/300px-S%C3%BCper_Lig_logo.svg.png"
                height={"90px"}
                alt="Premier"
              />
            </div>
            <p style={{ color: "#939393" }}>League Season: 2021/2022</p>
          </div>

          <table
            className="table  table-hover rounded"
            style={{
              color: "white",
              backgroundColor: "#7554ae",
              height: "90px",
              width: "50px",
              marginBottom: "30px",
              marginTop: "50px",
            }}
          >
            <thead style={{ color: "#000000" }}>
              <tr>
                <th scope="col"></th>
                <th scope="col">Club</th>

                <th scope="col">W</th>
                <th scope="col">D</th>
                <th scope="col">L</th>
                <th scope="col">PTs</th>
                <th scope="col">Qualification/Relegation </th>
              </tr>
            </thead>
            {dataStanding.map((item, key) => (
              <tbody key={key}>
                <tr>
                  <td> {item.standing_place}</td>
                  <td> {item.standing_team}</td>
                  <td> {item.standing_W}</td>
                  <td> {item.standing_D}</td>
                  <td> {item.standing_L}</td>
                  <td> {item.standing_PTS}</td>
                  <td>{item.standing_place_type}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      ) : (
        <div>
          <div
            style={{
              marginTop: "40px",
              marginLeft: "60px",
              marginBottom: "40px",
              height: "85px",
            }}
          >
            <div style={{ marginLeft: "40px" }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/S%C3%BCper_Lig_logo.svg/300px-S%C3%BCper_Lig_logo.svg.png"
                height={"90px"}
                alt="Premier"
              />
            </div>
            <p style={{ color: "#939393" }}>League Season: 2021/2022</p>
          </div>

          <table
            className="table  table-hover rounded"
            style={{
              color: "white",
              backgroundColor: "#7554ae",
              height: "90px",
              width: "50px",
              marginBottom: "30px",
              marginTop: "50px",
            }}
          >
            <thead style={{ color: "#000000" }}>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Player</th>
                <th scope="col">Team</th>
                <th scope="col">Goals</th>
              </tr>
            </thead>
            {dataTopScorer.map((item, key) => (
              <tbody key={key}>
                <tr>
                  <td> {item.player_place}</td>
                  <td> {item.player_name}</td>
                  <td> {item.team_name}</td>
                  <td> {item.goals}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      )}
    </div>
  );
};

export default Turkey;
