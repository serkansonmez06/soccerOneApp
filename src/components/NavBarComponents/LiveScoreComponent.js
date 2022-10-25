import React, { useEffect, useState } from "react";
import axios from "axios";

const LiveScoreComponent = () => {
  const [data, setData] = useState([]);
  let firstTime = true;
  const getData = () => {
    axios
      .get(
        "https://apiv2.allsportsapi.com/football/?met=Livescore&APIkey=c6934c58fbacf10be4d035169eaf4e5198e3b47384fd07acc490fa7d075b66a0"
      )
      .then((respose) => {
        setData(respose.data.result);
        console.log(respose.data.result);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (firstTime) {
      getData();
      firstTime = false;
    }
    setInterval(getData, 60000);
  }, []);
  return (
    <div
      className="d-flex justify-content-center"
      style={{ backgroundColor: "red", minHeight: "100vh" }}
    >
      <div>
        <div
          style={{
            marginTop: "40px",
            marginLeft: "150px",
            marginBottom: "40px",
            height: "85px",
          }}
        >
          <div style={{ marginLeft: "90px" }}>
            <img
              src="https://www.pngall.com/wp-content/uploads/1/Sports-Transparent.png"
              height={"90px"}
              alt="Premier"
            />
          </div>
          <p style={{ color: "lightblue", marginLeft: "80px" }}>
            Today : {new Date().toISOString().slice(0, 10)}
          </p>
        </div>

        <table
          className="table  table-hover rounded"
          style={{
            color: "white",
            backgroundColor: "#e21937",
            height: "90px",
            width: "50px",
            marginBottom: "30px",
          }}
        >
          {data.map((item, key) => (
            <tbody key={key}>
              <tr>
                <td>
                  <img src={item.country_logo} height="25px" alt="" />
                </td>
                <td>{item.country_name}</td>
                <td>
                  <img src={item.home_team_logo} height="25px" alt="" />
                </td>
                <td> {item.event_home_team}</td>
                <td style={{ minWidth: "100px" }}>
                  {item.event_status}
                  <br />
                  {item.event_final_result}
                </td>
                <td> {item.event_away_team}</td>
                <td>
                  <img src={item.away_team_logo} height="25px" alt="Logo" />
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default LiveScoreComponent;
