import React, { useState, useEffect } from 'react';

//props: name, baseUrl, parameterName
function DataParagraph(props) {

    const[data, setData] = useState(null);
    const[hasData, setHasData] = useState(false);

    return ( 
        <p hidden={!hasData}>{props.parameterName} is {data}</p>
     );

    function handleAPIRequest () {
        if (data === null) {
            handleError ("data was empty");
            return;
        }

        const reqUrl = generateRequestUrl ();
        fetch(reqUrl)
            .then((response => response.json()))
            .then((json) => {
                console.log(json);
                interpretResult(json[props.parameterName]);
            })
    };

    function interpretResult (result) {
        if (result === null){
            handleError("something went wrong");
            return;
        }

        setData(result);
        setHasData(true);
    }

    function handleError (specificMessage) {
        const fullErrorMessage = "ERROR happened during processing your call!\n" + specificMessage;
        window.alert(fullErrorMessage);
        setHasData(false);
    }

    function generateRequestUrl() {
        return props.baseUrl + props.name;
    };
}

export default DataParagraph;