import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
    state = { count: 0 }

    increment = () => {
        //fill in later
        this.setState({
            count: this.state.count + 1
        });
    }

    decrement = () => {
        //fill in later
        this.setState({
            count: this.state.count - 1
        });
    }

    render() {
        return (
            <div>
                <h2>Counter</h2>
                <div>
                    <span>{this.props.count}</span>
                    <button onClick={this.decrement}>-</button>
                    <button onClick={this.increment}>+</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

export default connect(mapStateToProps)(Counter);