import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class Navbar extends Component {

    static defaultProps = {
        title:'Woops',
        icon: 'fa-solid fa-paper-plane'
    }

    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    }

    render() {
        return (
            <nav className='navbar bg-primary'>
                <h1>
                    <i className={this.props.icon} /> {this.props.title}
                </h1>
            </nav>
        )
    }
}

export default Navbar
