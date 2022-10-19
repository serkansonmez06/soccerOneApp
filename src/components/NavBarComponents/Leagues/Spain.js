import React, { useEffect, useState } from "react";
import axios from "axios";

const Spain = () => {
  const [dataStanding, setDataStanding] = useState([]);
  const [dataTopScorer, setDataTopScorer] = useState([]);
  const [flip, setFlip] = useState(true);

  const getDatat = async () => {
    await axios
      .get(
        "https://apiv2.allsportsapi.com/football/?&met=Topscorers&leagueId=302&APIkey=352d0aae96e3a4bb970dddca2cb8ed2851ce56f17dc0b14e0764c03b03db8ef5"
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
        "https://apiv2.allsportsapi.com/football/?&met=Standings&leagueId=302&APIkey=352d0aae96e3a4bb970dddca2cb8ed2851ce56f17dc0b14e0764c03b03db8ef5"
      )
      .then((respose) => {
        setDataStanding(respose.data.result.total);
        //console.log(respose.data.result.total);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div
      className="d-flex justify-content-center"
      style={{ backgroundColor: "#7554ae" }}
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
          src="data:image/png;base64,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"
          alt="Countryflag"
          height={"80px"}
          width={"120px"}
        />
        <p style={{ marginLeft: "4px" }}>Spainish La liga</p>
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
                src="https://logosvector.net/wp-content/uploads/2021/08/la-liga-logo.png"
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
                src="https://logosvector.net/wp-content/uploads/2021/08/la-liga-logo.png"
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

export default Spain;
