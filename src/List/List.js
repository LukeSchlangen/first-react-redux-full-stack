import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import store from '../store';
import * as listActions from '../actions/listActions';

class List extends Component {

    constructor (props) {
        super(props);
        // store.dispatch(listActions.addNewItem({title: 'Miles says Hello'}));
        this.state = {
            newItem: ''
        }
        this.newItemChange = this.newItemChange.bind(this);
    }

    // Besides render there are other hooks like this
    componentDidMount () {
        console.log('List component did mount');
    }

    newItemChange (event) {
        console.log('onChange input event for new item', event);

        // event.target.value is the value of the input box
        this.props.actions.addNewItem({title: event.target.value});

        // this.setState is asynchronous so if you reference state below (like right here), you are doing it wrong
        // instead, function callback would be in setState second parameter
        // this.setState always triggers a rerender, do not call in render() because infinite loop will happen
    }

    render () {
        return (
            <div>
        <h3>{this.props.listTitle}</h3>
        <input onChange={this.newItemChange}/>
        <div>{this.props.list.title}</div>
        <ul>
            {this.props.items.map(item => (
            <li key={item.title}> {/* key must be unique, used for internal react tracking */}
            {item.title}
            </li>)
        )}
        </ul>
        </div>)
    }
}

// Used on all react apps, but technically not necessary for functionality (eslint will be mad)
// This helps to debug and test, just like types do
List.propTypes = {
    listTitle: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({title: PropTypes.string})),
    list: PropTypes.any,
    actions: PropTypes.shape({addNewItem: PropTypes.func})
};

// this is the full redux state as a parameter
function mapStateToProps(state) {
    // prop on the left, state on the right
    return {
        list: state.list
    }
}

function mapDispatchToProps(dispatch) {
    // prop on the left, what it does on the right
    return {
        actions: bindActionCreators(listActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);