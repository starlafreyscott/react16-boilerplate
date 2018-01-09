import React from 'react';
import PropType from 'prop-types';
import Thead from './Thead'




class Table extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (

            <table>

                <Thead>
                    <tr>
                        <th>Head 1</th>
                        <th>Head 2</th>
                    </tr>

                </Thead>

                <tbody >

                    <tr>
                        <td>Body 1-1</td>
                        <td>Body 1-2</td>
                    </tr>
                    <tr>
                        <td>Body 2-1</td>
                        <td>Body 2-2</td>
                    </tr>

                </tbody>

                <tfoot>
                <tr>
                    <td>Foot 1</td>
                    <td>Foot 2</td>
                </tr>
                </tfoot>
            </table>
        )
    }
}

Table.defaultProps = {
    tableProps: {

    }
};

Table.propType = {
    tableProps: PropType.shape({

    })
};

const sevenonefour = {
    "comment": 0,
    "a": 1,
    "abbr": 2,
    "area": 3,
    "article": 4,
    "aside": 5,
    "audio": 6,
    "b": 7,
    "base": 8,
    "bdi": 9,
    "bdo": 10,
    "blockquote": 11,
    "body": 12,
    "br": 13,
    "button": 14,
    "canvas": 15,
    "caption": 16,
    "cite": 17,
    "code": 18,
    "col": 19,
    "colgroup": 20,
    "datalist": 21,
    "dd": 22,
    "del": 23,
    "details": 24,
    "div": 25,
    "dl": 26,
    "dt": 27,
    "em": 28,
    "embed": 29,
    "fieldset": 30,
    "figcaption": 31,
    "figure": 32,
    "footer": 33,
    "form": 34,
    "h1": 35,
    "h2": 36,
    "h3": 37,
    "h4": 38,
    "h5": 39,
    "h6": 40,
    "head": 41,
    "header": 42,
    "hr": 43,
    "html": 44,
    "i": 45,
    "iframe": 46,
    "img": 47,
    "input": 48,
    "ins": 49,
    "kbd": 50,
    "label": 51,
    "legend": 52,
    "li": 53,
    "link": 54,
    "main": 55,
    "map": 56,
    "mark": 57,
    "menu": 58,
    "menuitem": 59,
    "meta": 60,
    "meter": 61,
    "nav": 62,
    "noscript": 63,
    "object": 64,
    "ol": 65,
    "optgroup": 66,
    "option": 67,
    "p": 68,
    "param": 69,
    "picture": 70,
    "pre": 71,
    "progress": 72,
    "q": 73,
    "rp": 74,
    "rt": 75,
    "ruby": 76,
    "s": 77,
    "samp": 78,
    "script": 79,
    "section": 80,
    "select": 81,
    "small": 82,
    "source": 83,
    "span": 84,
    "strong": 85,
    "style": 86,
    "sub": 87,
    "summary": 88,
    "sup": 89,
    "table": 90,
    "tbody": 91,
    "td": 92,
    "textarea": 93,
    "tfoot": 94,
    "th": 95,
    "thead": 96,
    "time": 97,
    "tr": 98,
    "track": 99,
    "u": 100,
    "ul": 101,
    "var": 102,
    "video": 103,
    "wbr": 104
};

export default Table;