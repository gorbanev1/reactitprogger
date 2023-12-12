import React from "react";
class Users extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            users: [
                {
                    id: 1,
                    firstname: 'Bob',
                    lastName: 'Marley',
                    bio: 'dsfsaf as ds fa sfs',
                    age: 40,
                    pidor: true,
                },
                {
                    id: 2,
                    firstname: 'Hui',
                    lastName: 'Pizdov',
                    bio: 'SRET SRET',
                    age: 77,
                    pidor: false,
                }
        
            ]
        }
        this.arr2=this.state.users.map((el)=><div className="user" key={el.id}>
        <h3>{el.firstname} {el.lastName}</h3>
        <p>{el.bio}</p>
        <b>{el.pidor ? "Пидор": "Хуй"}</b>
        </div>)
    }



    render(){
        //  console.log(this.arr2[1])
         if (this.state.users.length>0)

     return(
       
       <div>
        {/* {this.arr2} */}
        
        {this.state.users.map((el)=><div className="user" key={el.id}>
            <h3>{el.firstname} {el.lastName}</h3>
            <p>{el.bio}</p>
            <b>{el.pidor ? "Пидор": "Хуй"}</b>
        </div>)}
        </div>
       
     )
      else 
     return (<div className="user">
        <h3>Пользователей нет</h3>
     </div>)
    
    }


}
export default Users