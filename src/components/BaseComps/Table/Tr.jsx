import React from 'react';
import PropType from 'prop-types';

class Tr extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <tr>
                <th>Savings</th>
            </tr>
        )
    }
}

Tr.defaultProps = {
    tableProps: {

    }
};

Tr.propType = {
    theadProps: PropType.shape({

    })
};

export default Tr;
