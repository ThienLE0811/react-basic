import React from 'react'
import ChildComponent from './ChildComponent'
import AddComponent from './AddComponent'

class MyComponent extends React.Component {
    /*
    React.Fragment = <> </>
    */

    state = {
        arrJobs: [
            {id: 'job1', title: 'Testers', salary: '400'},
            {id: 'job2', title: 'Developers', salary: '800'}
        ]
    }

    addNewJob = (job) =>{
        console.log(">>> check job:", job)
        let currentJobs = this.state.arrJobs
        currentJobs.push(job)
        this.setState({
            //arrJobs: [...this.state.arrJobs, job] 
            /*copy 3 phần tử bên trên và tạo thêm 1 phần tử bên cạnh 
            giống push 1 phần tử vào bên cạnh
            */
            arrJobs: currentJobs
        })
    }

    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs
        currentJobs = currentJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJobs
        })
    }

    render() {
        console.log('>>> call render: ', this.state)
        return(
            <>  
                <AddComponent
                    addNewJob = {this.addNewJob}
                />
                <ChildComponent
                    job = {this.state.arrJobs}
                    deleteAJob = {this.deleteAJob}
                />
            </>
        )
    }
}

export default MyComponent;