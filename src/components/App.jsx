import React from "react";
import PropTypes from 'prop-types';
import Img from './BaseComps/Img/Img'
import Table from './BaseComps/Table/Table'

// +++++++++++++ Importing Components +++++++++++++

import RepeatElement from '../constructors/RepeatElement'
import Time from './Time/Time'

// +++++++++++++ Importing Components +++++++++++++

// All react components need to import react unless you make react a global name space object which isn't recommended

// This is how you pull in Json from a json file. it is an object that can be used as seen below
import resource from './app.json';

// This is how you load the component specific Sass/css to ensure the css namespace is kept as clean as possible
require("!style-loader!css-loader!sass-loader!./App.scss");

// image source is pulled in from a location by using require then use that const as the parameter for the img tag src
const reactLogo = require('./react_logo.svg');

const imgProps = {
    height:'40px',
    width:'40px',
    src: reactLogo
};

// This is an example of a class based component
class App extends React.Component {
    // The constructor is needed if you pass props to it
    constructor(props){

        // Super is to extend the React.Component
        super(props);

        // state is setup here
        this.state = {
            timer: new Date().toLocaleTimeString()
        }
    }

    // The render can contain variables or simple processing of data
    render() {
        // using the { must be same as the state variable name } assigns it to a variable of the same name as in state
        let { timer } = this.state;
        let { title, input, copy } = this.props.footer;

        // Here you are returning the data that will be rendered into html
        return (
            <div style={{display: 'inline-block'}} className="app">
                <Img imgShape={imgProps}/>
                <h1>{ resource.h1 }</h1>
                <p>{ resource.p }</p>
                <Time />
                <h3>*{ title }*</h3>
                <div>{ input }</div>
                <p>{ copy }</p>
                <RepeatElement repeatProp={{el: 'a'}} />
                <Table/>
            </div>
        )
    }
}


/*
* Typically we will want to set prop types here. This is to ensure only the proper data is passed to our component
* This helps with handling the wrong types of data or missing data and while in dev it can throw an error for us
* This is extremely useful in troubleshooting more complex components
 */

// TODO add default props

App.propTypes = {
    footer: PropTypes.shape({
        title: PropTypes.string.isRequired,
        input: PropTypes.element,
        copy: PropTypes.string
    }), // Optional prop
};

let footerTitle = 'This is the footer and is required';
// You must export the default app.
// Please export here because this will allow passing params to the exported class if needed

export default App;
