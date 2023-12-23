import React from 'react';
import {IoCloseCircleSharp, IoHammerSharp} from 'react-icons/io5'
import AddUser from './AddUser';
class User extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            editForm: false
        }
    }
    user = this.props.user
    render(){
     return(

        <div className="user">
        <IoCloseCircleSharp onClick={()=>this.props.onDelete(this.user.id)} className='delete-icon'/>
        <IoHammerSharp className='edit-icon' onClick={()=>{
            this.setState({editForm: !this.state.editForm})
            }}/>
        <h3>{this.user.firstname} {this.user.lastName}</h3>
        <p>{this.user.bio}</p>
        <b>{this.user.pidor ? "Пидор": "Хуй"}</b>
        {this.state.editForm && <AddUser user={this.user} onAdd={this.props.onEdit}/>}
    </div>
     )
    }


}
export default User