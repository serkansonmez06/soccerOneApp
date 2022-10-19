import axios from "axios";
import React, { useEffect, useState } from "react";
import moment from "moment";

const CommentsComponent = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    await axios("http://localhost:4545/comments")
      .then((response) => {
        setData(response.data);
        // console.log(response.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div
      className="d-flex justify-content-center"
      style={{ height: "100vh", backgroundColor: "#f5d3b3" }}
    >
      <div>
        <h3 style={{ marginTop: "60px" }}>What users think about us!</h3>
        {data.map((item, key) => (
          <div key={key} className="container">
            <div className="row border border-primary">
              <div
                className="row d-flex justify-content-center border border-success"
                style={{ width: "80px" }}
              >
                <div className="col" style={{ width: "10px" }}>
                  <img
                    src="https://www.shareicon.net/data/128x128/2017/02/15/878685_user_512x512.png"
                    alt="avatar"
                    height={"40px"}
                  />
                </div>
              </div>

              <div className="col border border-danger">
                <p
                  style={{
                    marginLeft: "15px",
                    fontFamily: "Cursive",
                    fontWeight: "bold",
                  }}
                >
                  {item.username}
                </p>
                <img
                  src="https://img.icons8.com/color/2x/filled-circle.png"
                  alt="active circle"
                  height={"6px"}
                  style={{
                    marginLeft: "15px",
                    marginRight: "12px",
                    marginTop: "9px",
                  }}
                />
                <span
                  style={{
                    color: "orange",
                    fontSize: "8px",
                    marginLeft: "1px",
                    marginTop: "6px",
                  }}
                >
                  {moment(item.date).format("LT")}
                </span>
              </div>
              <div className="col border border-danger">
                <p>" {item.comment} "</p>
              </div>
              <hr />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsComponent;
