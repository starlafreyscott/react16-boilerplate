import React from 'react';
import PropTypes from 'prop-types'


// WIP: This class is not ready for use

/* 
* TestCases:
* [X] user should be able to pass in props
* [] user should be able to set element type
* [] user should be able to define classes of wrap component
* [] user should be able to define class of children components
* [] user should be able to pass in options for inputs
* [] user should be able to define if changing
* [] changing state should be used with change props
* [] user should be able to pass element as parent of container
 */


class RepeatElement extends React.Component{
    // user should be able to pass in props [x]
    constructor(props){
        super(props);
        this.state = {
            isStatic: false,
            hasParent: false,
            hasChild: false,
        }
    }
    render(){
        let {...rProp} = this.props.repeatProp;


        return <span>{'test'}</span>
    }

    // This handles setting values based on props passed to it along with
    // if there are parent elements child elements what the classes are
    // This will also route if things are static or not flipping a bool
    dataRouter(){
        let { ...configs } = this.state;
        if(!configs.hasChild){ return "static" }
    }


}

// PropTypes to ensure object is passed
RepeatElement.propType = {
    repeatProp: PropTypes.shape({
        WapEl: PropTypes.element, // wrapper element can be el string or array
        RepeatEl: PropTypes.element,
        canUpdate: PropTypes.bool,


    })
};

export default RepeatElement;
