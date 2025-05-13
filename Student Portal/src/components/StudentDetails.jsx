import React, { useEffect, useState} from "react";
import { fetchApi } from "../Data/api";
import "bootstrap/dist/css/bootstrap.min.css"; 

const StudentList = () => {
  const [state, setState] = useState({
    details: [],
    loading: true,
  });

  const { details, loading } = state;

  useEffect(() => {
    const studentDetail = async () => {
      try {
        const data = await fetchApi();
              setState((prev) => ({ ...prev, details: data.users })); 

        // setState((prev) => ({ ...prev, details: data }));
      } catch (error) {
        console.error("Failed to fetch:", error);
      } finally {
        setState((prev) => ({ ...prev, loading: false }));
      }
    };

    studentDetail();
  },[]);

//   useEffect(() => {
//     return details
//   }, [details]);

  // const sDetails = useEffect(() => {
  //   return details
  // }, [details]);

  //  useEffect(()=>{
  //     return details;
  //  },[details])

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
            <th>Age</th>
            <th>Email</th>

            <th>Phone</th>

            <th>DOB</th>
            <th>BloodGroup</th>
          </tr>
        </thead>

        <tbody>
        {details.map((s) => (
          <tr key={s.id}>
            <td>{s.id}</td>
            <td>{s.firstName} {s.lastName}</td>
            {/* <td>{s.name}</td> */}
            <td>{s.age}</td>
            <td>{s.email}</td>
            <td>{s.phone}</td>
            <td>{s.birthDate}</td>
            <td>{s.bloodGroup}</td>
            <button>Edit</button>
          </tr>
        ))}
      </tbody>
      </table>
    </div>
  );
};

export default StudentList;
