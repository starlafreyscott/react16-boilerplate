import React from 'react';
import PropType from 'prop-types';

class Tbody extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        let thing1 = `className={${'x172'}}`;
        return (
            <tbody thing1>

            </tbody>
        )
    }
}

Tbody.defaultProps = {
    tableProps: {

    }
};

Tbody.propType = {
    theadProps: PropType.shape({

    })
};

export default Tbody;
