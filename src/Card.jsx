import React from 'react'
import Info from './Info'

class Card extends React.Component {
    state = { isInfo: false }

    handleInfo = flag => this.setState({ isInfo: flag })

    render() {
        const { name, population, region, capital } = this.props.country
        const flag = this.props.country.flags.png
        const isDarkMode = this.props.isDarkMode
        let style = 'card '

        if(isDarkMode) style += 'dark-card'
        else style += 'light-card'

        return (
            <>
                <div className={style}>
                    <img src={flag} alt="flag" className="flag" tabIndex="0" onClick={() => this.handleInfo(true)} />
                    <strong>{name}</strong>
                    <ul>
                        <li><span>Population:</span> {population.toLocaleString()}</li>
                        <li><span>Region:</span> {region}</li>
                        <li><span>Capital:</span> {capital}</li>
                    </ul>
                </div>

                {
                    this.state.isInfo &&
                    <Info
                        handleInfo={this.handleInfo}
                        isDarkMode={isDarkMode}
                        handleTheme={this.props.handleTheme}
                        country={this.props.country}
                        countries={this.props.countries}
                    />
                }
            </>
        )
    }
}

export default Card

