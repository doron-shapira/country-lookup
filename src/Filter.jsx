import React from 'react'
import Countries from './Countries'

class Filter extends React.Component {
    state = {
        isClicked: false,
        isAfrica: false,
        isAmericas: false,
        isAsia: false,
        isEurope: false,
        isOceania: false
    }

    handleFilter = () => this.setState({ isClicked: !this.state.isClicked })
    handleAfrica = () => this.setState({ isAfrica: !this.state.isAfrica })
    handleAmericas = () => this.setState({ isAmericas: !this.state.isAmericas })
    handleAsia = () => this.setState({ isAsia: !this.state.isAsia })
    handleEurope = () => this.setState({ isEurope: !this.state.isEurope })
    handleOceania = () => this.setState({ isOceania: !this.state.isOceania })

    render() {
        const isClicked = this.state.isClicked
        const isDarkMode = this.props.isDarkMode
        const theme = isDarkMode ? 'dark-filter' : 'light-filter'
        const style = 'filter-btn ' + theme
        let regions = 'regions'

        if(isClicked) regions += ' show-regions'
        if(!isDarkMode) regions += ' light-regions'

        const africa = this.state.isAfrica ? 'selected' : ''
        const america = this.state.isAmericas ? 'selected' : ''
        const asia = this.state.isAsia ? 'selected' : ''
        const europe = this.state.isEurope ? 'selected' : ''
        const oceania = this.state.isOceania ? 'selected' : ''

        return (
            <>
                <button className={style} onClick={this.handleFilter}>
                    <span id="filter-span">Filter by Region</span>
                    <img src="down-arrow.svg" alt="down-arrow" id="arrow-icon" className={isDarkMode ? 'dark-arrow' : ''} />
                </button>
                <div className={regions}>
                    <ul>
                        <li className={africa} onClick={this.handleAfrica}>Africa</li>
                        <li className={america} onClick={this.handleAmericas}>Americas</li>
                        <li className={asia} onClick={this.handleAsia}>Asia</li>
                        <li className={europe} onClick={this.handleEurope}>Europe</li>
                        <li className={oceania} onClick={this.handleOceania}>Oceania</li>
                    </ul>
                </div>

                <Countries
                    isDarkMode={isDarkMode}
                    searchedTerm={this.props.searchedTerm}
                    handleTheme={this.props.handleTheme}
                    isAfrica={this.state.isAfrica}
                    isAmericas={this.state.isAmericas}
                    isAsia={this.state.isAsia}
                    isEurope={this.state.isEurope}
                    isOceania={this.state.isOceania}
                />
            </>
        )
    }
}

export default Filter