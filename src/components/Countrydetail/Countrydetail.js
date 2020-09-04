import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const Countrydetail = () => {
    const { name } = useParams()
    const [detail, setDetail] = useState({})

    const { flag, region, population } = detail;
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${name}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDetail(data[0]))
    }, [])
    return (
        <div style={{ margin: '0 auto', textAlign:'center' }}>
            <h1 style={{ fontSize: "40px" }}>This is Country Detail:</h1>

            <div className="country-detail">
                <div className="country-flag">
                    <img style={{width:'250px', height:'250px'}} src={flag} alt="" />
                </div>
                <p><small>AlphaCode: {detail.countryAlpha2Code}</small></p>
                <h3>{detail.name}</h3>
                <p><small>Domain: {detail.topLevelDomain}</small></p>
                <p><small>Calling-Code: {detail.callingCodes}</small></p>
                <p><small>Capital: {detail.capital}</small></p>
                <p><small>Alt-Spellings: ({detail.altSpellings})</small></p>
                <p><small>Region: {region}</small></p>
                <p><small>Sub-Region: {detail.subregion}</small></p>
                <p><small>Population: {population}</small></p>
                <p><small>Demo-Nym: {detail.demonym}</small></p>
                <p><small>Time-Zone: {detail.timezones}</small></p>
                <p><small>Border: {detail.borders}</small></p>
                <p><small>Numeric-Code: {detail.numericCode}</small></p>
                <p><small>Short-Name: {detail.cioc}</small></p>
            </div>
        </div>
    );
};

export default Countrydetail;