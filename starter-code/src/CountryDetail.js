import React, { Component } from "react";
import { Link } from "react-router-dom";

class CountryDetail extends Component {
  render() {
    const { cca3 } = this.props.match.params;
    const { countries } = this.props;

    const country = countries.find((country) => country.cca3 === cca3);

    // countries.map( country => {
    //     if(country.cca3 === cca3) {
    //         return (
    //             <div> (...) </div>
    //         )
    //     }
    // }

    return (
      <div>
        <div className="col-7">
          <h1>{country.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: "30%" }}>Capital</td>
                <td>{country.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {country.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {country.borders.map((cca3) => {
                      return (
                        <li key={cca3}>
                          <Link to={`/${cca3}`}>
                            {
                              countries.find(country => country.cca3 === cca3).name.common
                            }
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default CountryDetail;
