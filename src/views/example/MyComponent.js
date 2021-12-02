import React from 'react'
import ChildComponent from './ChildComponent'


class MyComponent extends React.Component {
    /*
    React.Fragment = <> </>
    */

    state = {
        firstName: '',
        lastName: '',
        arrJobs: [
            {id: 'job1', title: 'Testers', salary: '400'},
            {id: 'job2', title: 'Developers', salary: '800'}
        ]
    }

    handleChangeFirstName = (event) =>{
        this.setState({
            firstName: event.target.value
        })
    }

    handleChangeLastName = (event) =>{
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        console.log('>>> check data: ', this.state)
    }

    render() {
        console.log('>>> call render: ', this.state)
        return(
            <>  
                <form>
                    <label htmlFor="fname">First name:</label><br/>
                    <input 
                        onChange = {(event) => this.handleChangeFirstName(event)}
                        type="text"
                        value= { this.state.firstName}/>
                        <br/>
                    <label htmlFor="lname">Last name:</label><br/>
                    <input 
                        onChange = {(event) => this.handleChangeLastName(event)}
                        type="text" 
                        value= { this.state.lastName}/>
                    <br/><br/>
                    <input type="submit" value="Submit"
                        onClick = { (event) => this.handleSubmit(event)}
                    />
                </form> 

                <ChildComponent
                    name = {this.state.firstName}
                    age = {20}
                    job = {this.state.arrJobs}
                />
            </>
        )
    }
}

export default MyComponent;