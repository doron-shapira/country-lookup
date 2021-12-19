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
                    <img src={flag} alt="flag" className={flagStyle} />
                    <h1>{name}</h1>
                    <ul>
                        <li><span>Native Name: </span>{nativeName}</li>
                        <li><span>Population: </span>{population.toLocaleString()}</li>
                        <li><span>Region: </span>{region}</li>
                        <li><span>Sub Region: </span>{subregion}</li>
                        <li><span>Capital: </span>{capital}</li>
                        <li><span>Top Level Domain: </span>{topLevelDomain}</li>
                        <li><span>Currencies: </span>{curr}</li>
                        <li><span>Languages: </span>{langs}</li>
                    </ul>
                    {
                        borders !== undefined && (
                            <>
                                <h2>Border Countries:</h2>
                                <div className='container-2'>
                                {
                                    this.props.countries.filter(country => {
                                        return borders.includes(country.alpha3Code)
                                    }).map((country, index) => <BorderCountry key={index} name={country.name} classStyle={borderStyle} />)
                                }
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Info