import React from 'react';
import PropType from 'prop-types';

class Thead extends React.Component{
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

Thead.defaultProps = {
    tableProps: {

    }
};

Thead.propType = {
    theadProps: PropType.shape({

    })
};

export default Thead;
