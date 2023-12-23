import React from 'react';
import Header from './components/Header';
import Users from './components/Users';
import AddUser from './components/AddUser';
import axios from "axios"

// import ReactDOMClient from 'react-dom/client';



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



const baseUrl = "https://reqres.in/api/users?page=1"
class App extends React.Component {
      constructor(props){
        super(props)
        axios.get(baseUrl).then((res)=>{
          console.log(res.data.data)
        })
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
        this.addUser=this.addUser.bind(this)
        this.deleteUser=this.deleteUser.bind(this)
        this.editUser=this.editUser.bind(this)
    }
    deleteUser(id){
      this.setState({
        users: this.state.users.filter((el)=>el.id!==id)
      })
      }
    editUser(user){
      let allUsers=this.state.users
      allUsers[user.id-1]=user
      this.setState({users:[]}, ()=>{
        this.setState ({users: [...allUsers]})
      })
    }
    
    addUser(user){
      const id = this.state.users.length+1;
      this.setState({users: [...this.state.users, {id, ...user}]})
      // console.log(user)
    }

  render ()  { 
    return (<div >
    <Header title="Список пользователей" />
    <main>
      <Users users={this.state.users} onDelete={this.deleteUser} onEdit={this.editUser}/>
    </main>
    <aside>
      <AddUser onAdd={this.addUser}/>
    </aside>
   
</div>)
}

}
export default App



