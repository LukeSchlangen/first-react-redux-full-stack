import React, {Component} from 'react';
import PropTypes from 'prop-types';

class List extends Component {

    constructor (props) {
        super(props);
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

        this.setState({
            newItem: event.target.value
        });

        // this.setState is asynchronous so if you reference state below (like right here), you are doing it wrong
        // instead, function callback would be in setState second parameter
        // this.setState always triggers a rerender, do not call in render() because infinite loop will happen
    }

    render () {
        return (
            <div>
        <h3>{this.props.listTitle}</h3>
        <input onChange={this.newItemChange}/>
        <div>{this.state.newItem}</div>
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
    items: PropTypes.arrayOf(PropTypes.shape({title: PropTypes.string}))
};

export default List;