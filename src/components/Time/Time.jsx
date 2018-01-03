import React from 'react';

require("!style-loader!css-loader!sass-loader!./Time.scss");

class Time extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            clock: new Date().toLocaleTimeString()
        }
    }
    render(){
        let { clock } = this.state;
        return <div className='time-wrap'>{ clock }</div>
    }

    // default method called once the component is mounted/rendered on the page
    componentDidMount(){
        // setting an interval of 1000 mil sec or 1 second calls the handle timer function to keep updating the time
        // On the page you will now see the timer update every second
        setInterval(()=>{ this.handleTimer(); }, 1000); // No return needed because state is being set
    }
    // method example
    handleTimer() {
        // naming the variable the same as the state variable allows you to pass it by itself see below
        let clock = new Date().toLocaleTimeString();
        // This is the same as doing the fallowing
        // clock: clock but because of using the same variable name you can set like this for simplified code
        this.setState({
            clock
        })
    }
}

export default Time;