import React from 'react'

class Navbar extends React.Component {
    render() {
        const isDarkMode = this.props.isDarkMode
        const handleTheme = this.props.handleTheme

        return (
            <div className={isDarkMode ? 'dark-navbar' : 'light-navbar'}>
                <div className="navbar-content">
                    <header>Where in the world?</header>
                    <button 
                        onClick={handleTheme} 
                        id='theme-btn'
                        className={isDarkMode ? 'dark-theme-btn' : 'light-theme-btn'}
                    >
                        {isDarkMode ? '🌞 Light Mode' : '🌚 Dark Mode'}
                    </button>
                </div>
            </div>
        )
    }
}

export default Navbar