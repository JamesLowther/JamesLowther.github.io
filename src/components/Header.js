import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-space-shuttle"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>James Lowther</h1>
                <p>Currently attending my fourth year of schooling at the Univerity of Calgary pursuing a degree in computing science.</p>
                <p>Interested in all things computing and its application in the modern world.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="https://github.com/JamesLowther/" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
