import InfiniteScroll from "react-infinite-scroll-component";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useEffect, useState } from "react";
import { FetchUsers } from "../services";
import { Alert, Spinner } from "react-bootstrap";

export default function Table() {
  const [status, setStatus] = useState("UNINIT");
  const [dt, setData] = useState({});

  const fetchFn = () => {
    setStatus("PENDING");
    FetchUsers(dt.page ? dt.page + 1 : 1)
      .then(({ data }) => {
        setData({
          ...data,
          data: dt.data ? [...dt.data, ...data.data] : data.data
        });
        setStatus("SUCCESS");
      })
      .catch(() => setStatus("ERROR"));
  };

  useEffect(() => {
    fetchFn();
  }, []);

  const getColorAndStatus = (key) => {
    if (key % 2 === 0) {
      return "Active";
    } else if (key % 3 === 0) {
      return "Inactive";
    } else if (key % 5 === 0) {
      return "Removed";
    }
  };

  let body = <></>;

  if (status === "PENDING") {
    body = (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  } else if (status === "SUCCESS") {
    body = (
      <>
        <InfiniteScroll
          dataLength={dt.total}
          next={fetchFn}
          hasMore={dt.total_pages > dt.page}
          loader={
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          }
        >
          <table className="table table-borderless">
            <thead>
              <td>NAME</td>
              <td>EMAIl</td>
              <td>STATUS</td>
              <td className="text-center">ACTIONS</td>
            </thead>

            <tbody>
              {dt.data.map((d) => (
                <tr key={d.id}>
                  <td>
                    <div className="row">
                      <div className="col-2 position-relative">
                        <img
                          src={d.avatar}
                          alt="John Doe"
                          className="john-doe"
                        />
                        <span className="status"></span>
                      </div>
                      <div className="col-10 profile-container no-flex-end">
                        <p className="admin-name blue-color">{d.first_name}</p>
                        <p className="admin-role">{d.last_name}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="admin-name">{d.email}</p>
                  </td>
                  <td>
                    <span
                      className={`pill pill-${getColorAndStatus(
                        d.id
                      )?.toLowerCase()}`}
                    >
                      {getColorAndStatus(d.id)}
                    </span>
                  </td>
                  <td className="text-center">
                    <VisibilityIcon />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </InfiniteScroll>
      </>
    );
  } else if (status === "ERROR") {
    body = <Alert variant="danger">No data available!</Alert>;
  }

  return (
    <>
      <div className="d-flex table-container">
        <p className="visitors-text">Visitors</p>
        <button type="button" className="btn visitor-btn">
          Add Visitor
        </button>
      </div>
      <div className="d-flex table-container" id="scrollableDiv">{body}</div>
    </>
  );
}
