import React from 'react'
import  './style.scss'

class ChildComponent extends React.Component {

        state = {
            showJobs: false
        }

        handleShowHide = () => {
            this.setState({
                showJobs: !this.state.showJobs
            })
        }

        handleOnClickDelete = (job) => {
            this.props.deleteAJob(job)
        }

    render() {
        
        // let name = this.props.name;
        // let age = this.props.age;

        let {job } = this.props;
        let {showJobs} = this.state;
        return(
            <>  
                { showJobs === false ?
                    <div>
                        <button className='btn-show'
                        onClick = {()=> this.handleShowHide()}>Show</button>
                    </div>
                
                : 
                <>             
                    <div className="job-list">
                    {
                        job.map((item,index) => {
                            return(
                                <div key = {item.id}>
                                    {item.title} - {item.salary} $
                                    <> </><span  onClick = {()=>this.handleOnClickDelete(item)}>
                                     &#10006;</span>
                                </div>
                            )
                        })
                    }
                    </div>
                    <div>
                        <button onClick = {()=> this.handleShowHide()}>Hide</button> 
                    </div> 
                </>
                }
            </>
        )
    }
}

// const ChildComponent = (props) =>{
//     let {name, age, job } = props
//             return(
//                 <>  
//                    <div>My name is: {name}</div> 
//                    <div>I'm: {age}</div>
                   
    
//                     <div>
//                         {
//                             job.map((item,index) => {
//                                 if(item.salary >= 500){
//                                     return(
//                                         <div key = {item.id}>
//                                             {item.title} - {item.salary}$
//                                         </div>
//                                     )
//                                 }
//                             })
//                         }
//                     </div>
    
//                 </>
//             )

// }


export default ChildComponent;

