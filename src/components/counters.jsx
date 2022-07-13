import React, { Component } from 'react'
import Counter from './counter';

class Counters extends Component {
    state = { 
        counters: [
            {id: 1, value: 4, },
            {id: 2, value: 5, },
            {id: 3, value: 0, },
            {id: 4, value: 0, }
        ]
     }

     handleDelete = (counterId) => {
        const newCounters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters: newCounters});
     }

    render() { 
        return (
            <div>
                {this.state.counters.map(counter => 
                <Counter counter={counter} onDelete={this.handleDelete} key={counter.id}>
                </Counter>
                )}
            </div>
        );
    }
}
 

export default Counters;