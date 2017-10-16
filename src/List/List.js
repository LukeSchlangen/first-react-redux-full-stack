import React, {Component} from 'react';

export default class List extends Component {


    render () {
        return (
        <ul>
            {this.props.items.map(item => (
            <li>
            {item.title}
            </li>)
        )}
        </ul>)
    }
}