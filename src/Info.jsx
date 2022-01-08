import React from 'react'
import Navbar from './Navbar'

function BorderCountry(props) {
    return <span className={props.classStyle}>{props.name}</span>
}

class Info extends React.Component {
    componentWillUnmount() {
        document.body.style.overflow = 'visible';
    }

    render() {
        const { name, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages, borders } = this.props.country
        const flag = this.props.country.flags.png
        const isDarkMode = this.props.isDarkMode
        const handleInfo = this.props.handleInfo
        document.body.style.overflow = 'hidden';
        let curr = ''
        let langs = ''
        let modalStyle = 'info-modal'
        let btnStyle = 'back-btn'
        let flagStyle = 'info-flag'
        let borderStyle = 'border-country'

        if(!isDarkMode) {
            modalStyle += ' info-modal-light'
            btnStyle += ' back-btn-light'
            flagStyle += ' info-flag-light'
            borderStyle += ' border-country-light'
        }

        if(currencies !== undefined) {
            currencies.forEach((currency, index, arr) => {
                curr += currency.symbol + ' '
                if(index !== arr.length - 1) curr += currency.name + ', '
                else curr += currency.name
            })
        }

        languages.forEach((language, index, arr) => {
            if(index !== arr.length - 1) langs += language.name + ', '
            else langs += language.name
        })

        return (
            <div className={modalStyle}>
                <Navbar isDarkMode={isDarkMode} handleTheme={this.props.handleTheme} />
                <div className="container">
                    <button className={btnStyle} onClick={() => handleInfo(false)}>
                        <img src="left-arrow.svg" alt="left arrow" />
                        <span>Back</span>
                    </button>
                    <div className="flag-and-info">
                        <img src={flag} alt="flag" className={flagStyle} />
                        <div className="infos">     
                            <h1>{name}</h1>
                            <div className="first-info">
                                <p><span>Native Name: </span>{nativeName}</p>
                                <p><span>Population: </span>{population.toLocaleString()}</p>
                                <p><span>Region: </span>{region}</p>
                                <p><span>Sub Region: </span>{subregion}</p>
                                <p><span>Capital: </span>{capital}</p>
                            </div>
                            <div className="second-info">
                                <p><span>Top Level Domain: </span>{topLevelDomain}</p>
                                <p><span>Currencies: </span>{curr}</p>
                                <p><span>Languages: </span>{langs}</p>
                            </div>
                            <div className="third-info">
                                {
                                    borders !== undefined && (
                                        <div className='container-2'>
                                            <h2>Border Countries:</h2>
                                            {
                                                this.props.countries.filter(country => {
                                                    return borders.includes(country.alpha3Code)
                                                }).map((country, index) => <BorderCountry key={index} name={country.name} classStyle={borderStyle} />)
                                            }
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Info
