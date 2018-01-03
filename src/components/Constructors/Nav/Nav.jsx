import React from 'react';
import Resources from "./Nav.json";
// import PropTypes from 'prop-types';

require("!style-loader!css-loader!sass-loader!./Nav.scss");

console.log(Resources);

/*
* TestCases:
* [] Nav should take json shape props
* [] Nav should take an array and render it with params
* [] Nav should apply <li> <img> <a> <i> tags
*
* [] Dashboard should move page to dashboard state ** DEFAULT STATE **
* [] Nav should have Nucleus Icon and name
* [] Username should dynamically change to the set user
* [] Tools should be a drop down with dynamic list
* [] Incident manager should display a modal for Incidents
* [] Notify should be a modal for notifying
* [] Clicking username should bring a drop down menu
* [] User-menu should have Check-in
* [] User-menu should have Settings modal
* [] User-menu should have Feedback modal
* [] User-menu should have Help Modal
* [] User-menu should have Logout option
 */

class Nav extends React.Component{


    render(){
        return(
            <nav>
                <ul>
                    <img />
                    <li>Dashboard</li>
                    <li>Incident Manager</li>
                    <li>Tools</li>
                    <li>Notify</li>
                    <li>SNOW: DYNAMIC TIME</li>
                    <li>IRIS: DYNAMIC TIME</li>
                    <li>Dynamic username</li>
                </ul>
            </nav>
        )
    }

}

export default Nav;
