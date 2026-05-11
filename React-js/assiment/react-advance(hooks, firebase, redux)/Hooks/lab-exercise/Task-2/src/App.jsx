import React, { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  // Fetch data when component mounts
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>User List</h1>

      {users.map((user) => (
        <div
          key={user.id}
          style={{
            border: "1px solid gray",
            margin: "10px 0",
            padding: "10px",
          }}
        >
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
      ))}
    </div>
  );
}

export default App;