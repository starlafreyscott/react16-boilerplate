import React from 'react';
import PropTypes from 'prop-types';

/*
 *
 */

class Img extends React.Component{

    constructor(props){
        super(props);
        this.state = {

        }

    }

    render(){

        let {cName, src, height, width, alt, style} = this.props.imgShape;
        console.log(this.props.imgShape.src);
        return <img
            className={(cName)? cName : 'default-image'}
            src={(src)? src : "no img src"}
            height={(height)? height: 300}
            width={(width)? width: 300}
            alt={(alt)? alt: 'No Alt Text Available'}
            style={(style)? style: {}}
        />
    }
}

Img.propTypes = {
    imgShape: PropTypes.shape({
        cName: PropTypes.string,
        alt: PropTypes.string,
        height: PropTypes.number,
        width: PropTypes.number,
        src: PropTypes.string,
        style: PropTypes.object
    })
};

export default Img;
