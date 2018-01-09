import React from 'react';
import PropType from 'prop-types';

class Th extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <th>Month</th>
        )
    }
}

Th.defaultProps = {
    tableProps: {

    }
};

Th.propType = {
    theadProps: PropType.shape({

    })
};

export default Th;
