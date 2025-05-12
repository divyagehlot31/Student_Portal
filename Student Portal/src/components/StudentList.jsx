import React, { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { fetchApi } from "../Data/api";

const StudentDetails = () => {
  const [state, setState] = useState({
    list: [],
    loading: true,
  });

  const navigate = useNavigate();

  const { list, loading } = state;

  useEffect(() => {
    const studentlist = async () => {
      try {
        const data = await fetchApi();
        setState((prev) => ({ ...prev, list: data }));
      } catch (error) {
        console.error("Failed to fetch:", error);
      } finally {
        setState((prev) => ({ ...prev, loading: false }));
      }
    };

    studentlist();
  });

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
<button onClick={()=>{navigate('/dashboard/studentList')}}>submit</button>
          </tr>
        </thead>

        <tbody>
        {list.map((s) => (
          <tr key={s.id}>
            <td>{s.id}</td>
            <td>{s.name}</td>
            <button onClick={()=>{navigate("/dashboard/view")}}>View</button>
          </tr>
        ))}
      </tbody>
      </table>
    </div>
  );
};

export default StudentDetails;
