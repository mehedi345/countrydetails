import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    
    const { name, flag } = props.country;
    const countryStyle = {
        border: '1px solid purple',
        borderRadius: '20px',
        margin: '20px',
        padding: '20px',
        width: '300px',
        
      
    }
    return (
        <div style={countryStyle}>
             <img style = {{width : "250px", height : "200px"}} src={flag} />
             <h1>Country Name: {name}</h1>
             <Link to={`/country/${name}`}>
              <button>show detail of{name}</button> </Link>
        </div>
    );
};

export default Country; 