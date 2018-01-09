import React from 'react';
import PropType from 'prop-types';

class Tfoot extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <thead>
            <tr>
                <th>Month</th>
                <th>Savings</th>
            </tr>
            </thead>
        )
    }
}

Tfoot.defaultProps = {
    tableProps: {

    }
};

Tfoot.propType = {
    theadProps: PropType.shape({

    })
};

export default Tfoot;
