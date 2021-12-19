import React from 'react'
import Card from './Card'

class Countries extends React.Component {
    state = { countries: [], isLoaded: false }

    componentDidMount() {
        fetch('https://restcountries.com/v2/all')
            .then(response => response.json())
            .then( data => this.setState({ countries: data, isLoaded: true }) )
    }

    render() {
        const isDarkMode = this.props.isDarkMode
        const searchedTerm = this.props.searchedTerm
        const isAfrica = this.props.isAfrica
        const isAmericas = this.props.isAmericas
        const isAsia = this.props.isAsia
        const isEurope = this.props.isEurope
        const isOceania = this.props.isOceania
        const filteredCountries = []

        this.state.countries.forEach(country => {
            if(isAfrica && country.region === 'Africa') filteredCountries.push(country)
            else if(isAmericas && country.region === 'Americas') filteredCountries.push(country)
            else if(isAsia && country.region === 'Asia') filteredCountries.push(country)
            else if(isEurope && country.region === 'Europe') filteredCountries.push(country)
            else if(isOceania && country.region === 'Oceania') filteredCountries.push(country)
        })
        const decidedCountries = filteredCountries.length === 0 ? this.state.countries : filteredCountries

        return (
            <>
                {
                    this.state.isLoaded ? 
                    decidedCountries.filter(country => {
                        return country.name.toLowerCase().includes(searchedTerm.toLowerCase())
                    }).map((country, index) => { 
                        return (
                            <Card
                                key={index}
                                country={country}
                                countries={this.state.countries}
                                isDarkMode={isDarkMode}
                                handleTheme={this.props.handleTheme}
                            />
                        )
                    }):
                    <progress></progress>
                }
            </>
        )
    }
}

export default Countries