import React from 'react';
import defaultJson from './X1.json';
import Validation from '../Validate/Validation'


let xrClick =() =>console.log('this also works');

function SuperElement(props) {
    if(Validation.isEmpty(props)) props = defaultJson;

    let functionSet = require(`${props.functionSet}`);
    let functionName = props.onClick; // Yes you have to assign it first
    props.onClick = ()=> functionSet[functionName]('params!');
    return React.createElement('div', props, 'text in div');
}

export default SuperElement;
