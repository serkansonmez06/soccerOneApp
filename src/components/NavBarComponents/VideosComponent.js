import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const Videos = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    await axios
      .get("https://www.scorebat.com/video-api/v3/")
      .then((response) => {
        setData(response.data.response);
        // console.log(response.data.response);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);
  // className="col-sm-3 mt-4 border border-warning
  return (
    <div className=" d-flex justify-content-center " style={{ height: "100%" }}>
      <div style={{ marginLeft: "150px" }}>
        <div className="row mt-5 ml-5 ">
          {data.map((item, key) => (
            <div
              key={key}
              className="col-sm-3 m-1 d-flex justify-space-between"
              style={{ marginLeft: "50px" }}
            >
              <div className="card " style={{ width: "100%" }}>
                <img
                  className="card-img-top"
                  src={item.thumbnail}
                  alt="Card cap"
                />
                <div className="card-body">
                  <div style={{ height: "80%" }}>
                    <div style={{ height: "30%" }}>
                      <h5 className="card-title">{item.title} </h5>
                    </div>

                    <div style={{ height: "60%" }}>
                      <p>{moment.utc(item.date).format("MM/DD/YYYY")}</p>
                      <p className="card-text">{item.competition}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => window.open(item.matchviewUrl)}
                    className="btn btn-primary "
                  >
                    Watch Highlight
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;
