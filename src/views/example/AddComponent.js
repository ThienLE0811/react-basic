import React from 'react'
import './style.scss'

class AddComponent extends React.Component {

    state = {
        title: '',
        salary: ''
    }

    handleChangeTitleJob = (event) =>{
        this.setState({
            title: event.target.value
        })
    }

    handleChangeSalary = (event) =>{
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        if(!this.state.title || !this.state.salary){
            alert('Missing required params')
            return;
        }

        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        })

        this.setState({
            title: '',
            salary: ''
        })
    }

    render(){
        return(
            <form>
                <label htmlFor="fname">Job's title:</label><br/>
                <input 
                    onChange = {(event) => this.handleChangeTitleJob(event)}
                    type="text"
                    value= { this.state.title}/>
                <br/>
                <label htmlFor="lname">Salary:</label><br/>
                <input 
                    onChange = {(event) => this.handleChangeSalary(event)}
                    type="text" 
                    value= { this.state.salary}/>
                <br/><br/>
                <input type="submit" value="Submit" className='btn-input'
                    onClick = { (event) => this.handleSubmit(event)}
                />
            </form> 
        )
    }
}

export default AddComponent;