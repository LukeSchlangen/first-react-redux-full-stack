import React, {Component} from 'react';
import PropTypes from 'prop-types';

class List extends Component {

    // Besides render there are other hooks like this
    componentDidMount () {
        console.log('List component did mount');
    }

    render () {
        return (
            <div>
        <h3>{this.props.listTitle}</h3>
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