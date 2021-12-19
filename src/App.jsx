import React from 'react'
import Navbar from './Navbar'
import Search from './Search'

class App extends React.Component {
    state = { isDarkMode: true }

    handleTheme = () => this.setState({ isDarkMode: !this.state.isDarkMode })
    
    render() {
        const isDarkMode = this.state.isDarkMode
        document.body.style.backgroundColor = isDarkMode ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)'

        return (
            <>
                <Navbar isDarkMode={isDarkMode} handleTheme={this.handleTheme} />
                <Search isDarkMode={isDarkMode} handleTheme={this.handleTheme} />
            </>
        )
    }
}

export default App