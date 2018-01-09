import React from 'react';
import PropType from 'prop-types';

class A extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let {cName, id, target, href, hrefLang, onClick, Inner, style} = this.props.aProps;
        let aKey = `${cName}${id}${href}`;

        return (
            <a
                key={aKey}
                className={cName}
                id={id}
                target={target}
                href={href}
                hrefLang={hrefLang}
                onClick={(onClick)? onClick.bind(this) : null}
                style={(style)? style : {}}
            >
                {Inner.isElement && Inner.Element((Inner.hasCopy && Inner.copy))}

            </a>
        )
    }
}

A.defaultProps = {
    aProps: {
        cName: "default-a-class",
        id: `default-a-id-${Math.floor(Math.random() * (1 + 5000) + 1)}`,
        target: "_blank",
        href: 'https://www.example.com',
        hrefLang: 'english',
        Inner: {
            isElement: false,
            hasCopy: false,
            Element: (copy) => <span>{copy}</span>, // The A tag will wrap this
            copy: "Click Me" // if there is just a string then this is used or both or
        },
        onClick: null,
        style : {}
    }
};

A.propType = {
    cName: PropType.string,
    id: PropType.string,
    target: PropType.string,
    href: PropType.string,
    hrefLang: PropType.string,
    Inner: PropType.shape({
        isElement: PropType.bool,
        hasCopy: PropType.bool,
        Element: PropType.element, // The A tag will wrap this
        copy: PropType.string // if there is just a string then this is used or both or
    }),
    onClick: PropType.func,
    style: PropType.object
};

export default A;
