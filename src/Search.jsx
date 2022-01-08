import React from 'react'
import Filter from './Filter'

class Search extends React.Component {
    state = { searchedTerm: '' }

    handleSearch = input => this.setState({ searchedTerm: input.target.value })

    render() {
        const isDarkMode = this.props.isDarkMode

        return (
            <div className="main-container">
                <div id='search-bar' className={isDarkMode ? 'dark-search' : 'light-search'}>
                    <label htmlFor="search-input">
                        <img 
                            src="search-sharp.svg"
                            alt="magnifying glass"
                            id="search-icon"
                            className={isDarkMode ? 'light-icon' : ''}
                        />
                    </label>
                    <input 
                        type="search" 
                        placeholder="Search for a country..." 
                        id="search-input"
                        className={isDarkMode ? 'dark-input' : 'light-input'}
                        autoComplete="off"
                        onChange={this.handleSearch} 
                    />
                </div>

                <Filter
                    isDarkMode={isDarkMode}
                    searchedTerm={this.state.searchedTerm}
                    handleTheme={this.props.handleTheme}
                />
            </div>
        )
    }
}

export default Search