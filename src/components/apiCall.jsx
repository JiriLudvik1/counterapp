import React, { useState } from 'react';

function ButtonLoad() {
    const [isLoadingData, setisLoadingData] = useState(false);
    const [data, setData] = useState([]);
    const [showData, setShowData] = useState(false);

    const handleClick = () => {
        setisLoadingData(true);
        setShowData(true);
        const url = "https://randomuser.me/api/?results=15";
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                setisLoadingData(false);
                setData(json["results"]);
                console.log(data);
            })
            .catch((error) => console.log(error));
    };

    return ( 
        <div>
      <button onClick={handleClick}> Load Data </button>
      {showData ? (
        isLoadingData ? (
          <h1>LOADING DATA........</h1>
        ) : (
          data.map((user) => (
            <h1>
              {user.name.first} {user.name.last}
            </h1>
          ))
        )
      ) : (
        <div></div>
      )}
    </div>
     );
}

export default ButtonLoad;