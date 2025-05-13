import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchApi } from "../Data/api";

const StudentDetails = () => {
  const [state, setState] = useState({
    list: [],
    // loading: true,
  });

  const navigate = useNavigate();

  const { list, loading } = state;

  useEffect(() => {
    const studentlist = async () => {
      try {
        const data = await fetchApi();
        console.log("Fetched data:", data);
        setState((prev) => ({ ...prev, list: data.users }));

        // setState((prev) => ({ ...prev, list: data }));
      } catch (error) {
        console.error("Failed to fetch:", error);
      } finally {
        setState((prev) => ({ ...prev, loading: false }));
      }
    };

    studentlist();
  }, []);

  //   useEffect(()=>{
  // const datalist = () =>{
  //   return list
  // }
  //   },);

  if (loading) {
    return <h1 className="p-4">Loading data.....</h1>;
  }

  return (
    <div className="p-4">
      <table className="table table-striped mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Student Name</th>
            {/* <button onClick={()=>{navigate("/dashboard/view")}}>View</button> */}
          </tr>
        </thead>

        <tbody>
          {list.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>
                {s.firstName} {s.lastName}
              </td>
              <button
                onClick={() => {
                  navigate("/dashboard/view");
                }}
              >
                View
              </button>

              {/* <td>{s.name}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentDetails;
