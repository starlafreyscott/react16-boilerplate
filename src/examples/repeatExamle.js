import PropTypes from "prop-types";
import React from "react"

export const repeatProp = {
    WapEl: <ul className="list-wrap"/>,
    RepeatEl: <li className="li-repeat"/>,
    hasClick: true,
    canUpdate: true,

};

function liConstructor(shape){


    return (
        <li >

        </li>
    )
}

const liShape = {
    elType: "li",
    outputName: "CustomLI",
    attributes: {
        "value": "My Value",
        "id": false,
        "hidden": false,
        "class": "li-item",
        "style": false,
        "title": "Custom li",
        "onclick": "()=> {console.log(\"clicked\")}"
    }
};