import React from "react";
class Users extends React.Component{
    users=[
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
    arr2=this.users.map((el)=><div key={el.id} className="user">
    <h3>{el.firstname} {el.lastName}</h3>
    <p>{el.bio}</p>
    <b>{el.pidor ? "Пидор": "Хуй"}</b>
    </div>)


    render(){
         console.log(this.arr2[1])
         if (this.users.length>0)

     return(
       
       <div>
        {this.arr2}
        
        {/* {const arr2=this.users.map((el)=><div>
            <h3>{el.firstname} {el.lastName}</h3>
            <p>{el.bio}</p>
        </div>)}{ console.log(this.arr2[1])} */}
        </div>
       
     )
      else 
     return (<div className="user">
        <h3>Пользователей нет</h3>
     </div>)
    
    }


}
export default Users