import React, { useEffect, useState } from "react";
import axios from "axios";

const England = () => {
  const [dataStanding, setDataStanding] = useState([]);
  const [dataTopScorer, setDataTopScorer] = useState([]);
  const [flip, setFlip] = useState(true);

  const getDatat = async () => {
    await axios
      .get(
        "https://apiv2.allsportsapi.com/football/?&met=Topscorers&leagueId=152&APIkey=352d0aae96e3a4bb970dddca2cb8ed2851ce56f17dc0b14e0764c03b03db8ef5"
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
        "https://apiv2.allsportsapi.com/football/?&met=Standings&leagueId=152&APIkey=352d0aae96e3a4bb970dddca2cb8ed2851ce56f17dc0b14e0764c03b03db8ef5"
      )
      .then((respose) => {
        setDataStanding(respose.data.result.total);
        //  console.log(respose.data.result.total);
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
        />
        <p>English Premier League</p>
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
                src="https://download.logo.wine/logo/Premier_League/Premier_League-Logo.wine.png"
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
                src="https://download.logo.wine/logo/Premier_League/Premier_League-Logo.wine.png"
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

export default England;
