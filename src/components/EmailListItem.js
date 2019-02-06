import React from 'react'
import $ from 'jquery'
import { log } from 'util';


class EmailListItem extends React.Component {
    state = {
        expanded: false
    }
    expandItem = (e) => {
        this.setState((state) => ({ expanded: !state.expanded}))
    }
    render () {
        const {name, subject, message} = this.props,
            expanded = this.state.expanded
        return (
            <div className='email-list-item-container'>
                <div className={expanded ? 'active' : ''}>
                    <div className='email-list-item main-item'>
                        <div className='header'>
                            <h4>{name}</h4>
                            <button onClick={this.expandItem}>Xpand</button>
                        </div>
                        <h5>{subject}</h5>
                        <p>{message}</p>
                    </div>
                </div>
                <div className={!expanded ? 'sub-outer' :'sub-outer hidden'}>
                    <div className='email-list-item sub-item'>
                        <h4>{name}</h4>
                        <p>{message}</p>
                    </div>
                </div>
                <div className={!expanded ? 'sub-outer' :'sub-outer hidden'}>
                    <div className='email-list-item sub-item'>
                        <h4>{name}</h4>
                        <p>{message}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default EmailListItem