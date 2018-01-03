import React from 'react';

import Img from '../Img/Img';


/*
* [] Should take in an array of objects
* [] Li should have all the functionality of the normal LI component
 */

// per list item
const example = {
    Key: Math.floor(Math.random() * (1 - 50) + 1), // Not optimal but functional
    ClassName: 'Class-Of-Li',
    Id: 'id-of-li',
    Value: 'assigned-value',
    OnClick: ()=> console.log(this.cName),
    aTag: 'www.google.com',
    newTab: true
};


class Li extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        let someVar = 'Testing 1 2 3';
        return (
            <li onClick={example.OnClick}>{ someVar }</li>
        )
    }


    listItem(){

    }

}


