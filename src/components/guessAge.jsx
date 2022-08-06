import React, { useState } from 'react';
import DataParagraph from './dataParagraph';

function GuessAge() {

    const[name, setName] = useState("");
    
    // const[age, setAge] = useState(0);
    // const[hasAgeData, setHasAgeData] = useState(false);

    // const[hasNationalityData, setHasNationalityData] = useState(false);
    // const[nationality, setNationality] = useState("");

    return (
        <div>
            <input type="text" onKeyDown={handleKeyDown} onChange={handleInputChange}/>
            <button onClick={handleAPIRequests}>Guess Age and Nationality!</button>
            {/* <p hidden={!hasAgeData}>Age is: {age}</p>
            <p hidden={!hasNationalityData}>Most probable nationality is: {nationality}</p> */}
            <DataParagraph name={name} baseUrl="https://api.agify.io?name=" parameterName="age"/>
        </div>
     );

    function handleKeyDown(event) {
        if (event.key ==='Enter') {
            handleAPIRequests()
        }
    }

    function handleInputChange (event) {
        setName(event.target.value)
        console.log("name is: " + name);
    }

    function handleAPIRequests () {
        
    }

    // function handleAPIRequests() {
    //     if (name === ""){
    //         handleError("Name was Empty");
    //         return;
    //     }

    //     const ageUrl = generateRequestUrl("https://api.agify.io?name=", name);
    //     fetch(ageUrl)
    //         .then((response) => response.json())
    //         .then((json) => {
    //             console.log(json);
    //             interpretAgeResult(json["age"])
    //         })
    //         .catch((error) => handleError(error));
        
    //     const nationalityUrl = generateRequestUrl("https://api.nationalize.io?name=", name);
    //     fetch(nationalityUrl)
    //         .then((response) => response.json())
    //         .then((json) => {
    //             console.log(json);
    //             interpretNationResult(json["country"])
    //         })
    //         .catch((error) => handleError(error));
    // };

    // function interpretAgeResult(age) {
    //     if (age === null){
    //         handleError("Some parameter was wrong");
    //         return;
    //     }

    //     setHasAgeData(true);
    //     setAge(age);
    // }

    // function interpretNationResult (nation) {
    //     if (nation === null) {
    //         handleError("Nationality counldnt be found");
    //         return;
    //     }

    //     setHasNationalityData(true);
    //     setNationality(nation[0].country_id);
    // };

    // function generateRequestUrl (apiAddress, name) {
    //     return apiAddress + name;
    // }

    // function handleError (specificMessage) {
    //     const fullErrorMessage = "ERROR happened during processing your call!\n" + specificMessage;
    //     window.alert(fullErrorMessage);
    //     setHasAgeData(false);
    // }
}

export default GuessAge;