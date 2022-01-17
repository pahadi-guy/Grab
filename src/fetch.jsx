import React, { useState } from "react";
const FetchApi = () => {
  const [data, setData] = useState([]);
  const clickHanadler = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const apiData = await response.json();
    const updatedData = apiData.map((values) => {
      return {
        uid: values.id,
        uname: values.name,
        uusername: values.username,
      };
    });
    setData(updatedData);
  };
  console.log(data);
  return (
    <>
      <button onClick={clickHanadler}>Upload users</button>

      {data.map((uData) => (
        <div key={uData.uid}>
          <h4>Name : {uData.uname}</h4>
          <p>Username : {uData.uusername}</p>
        </div>
      ))}
    </>
  );
};

export default FetchApi;
