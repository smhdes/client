import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";

const baseURl = "/feedbacks/getList";

const home = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await axios.get(baseURl);
    setData(response.data.feedbacks);
  }
  return (
    <section>
      <h1>Home Screen</h1>
      <div className="tbl-header">
        <table cellPadding="0" cellSpacing="0" border="0">
          <thead>
            <tr>
              <th>ISSUE</th>
              <th>COMMENT</th>
              <th>STATUS</th>
              <th>DATE</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="tbl-content">
        <table cellPadding="0" cellSpacing="0" border="0">
          <tbody>
            {data.map((el) => {
              return (
                <tr key={el._id}>
                  <td>{el.issue}</td>
                  <td>{el.comment}</td>
                  <td>
                    {el.status ? (
                      <span style={{ color: "blue" }}>Aktif</span>
                    ) : (
                      <span style={{ color: "red" }}>Pasif</span>
                    )}
                  </td>
                  <td>{el.createdDate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default home;
