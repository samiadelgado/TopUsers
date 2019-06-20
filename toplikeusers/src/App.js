import React, { Component, Fragment } from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import Login from './components/Login';
import Likes from './components/Likes';
import Chart from './components/Chart';

class App extends Component {

  //simulamos que hay una relacion de usuarios.
data={usersList:[
  {
    x:'Sami',
    y: 7,
    id:0
  },
  {
    x:'Juan',
    y: 17,
    id:1
  },
  {
    x:'Pedro',
    y: 2,
    id:3
  },
  {
    x:'Pablo',
    y: 4,
    id:2
  }
]};

  state={ 
    users:{},
    logged:false,
    currentUser:'',
    currentLikes:0
  }

  
  // Cuando la aplicación carga
  componentDidMount() {
   this.CargarUsers();
   
  }


  CargarUsers = () => {
    // copiar el state actual
    let users = this.state.users;
    users.datasets = this.data.usersList;
    // agregar el nuevo state
    this.setState({  
      users: users
    })
    console.log(users)
  }

  login = (user)=>{
    if (user===' '){
    
      console.log('Empty User')
    
    }else{
      this.data.usersList.forEach(userList=>{
        if(userList.x === user){
              this.setState({
                logged:true,
                currentUser: user,
                currentLikes: userList.y
              })
              console.log('User logged')
          }
      })

      if(this.state.logged===false){
        console.log('User not found')
      }
    }
  }

  //recoge los incrementos y los guarda en el state
  saveLike=(likes)=>{
    //copia del actual usuario
    const user= String(this.state.currentUser);
    console.log(this.state.users);
    this.data.usersList.forEach(userList=>{
      if(userList.x === user){
            userList.y = likes;
            this.setState({
              users:this.data.usersList,
              currentUser: user,
              currentLikes: likes
            })
      }
    })
  }



  render() {
    const logged = this.state.logged;
    return ( 
        <div className="container">
          <div className="row">
            <Header 
                titulo='Pizza Lovers'
            />
          </div>
          { !logged && <Login login={this.login}/>} 
          { logged && (
            <Fragment>
              <h2>Hola {this.state.currentUser}</h2>
              <div className="wrapper">
              <Likes user={this.state.currentUser} likes={this.state.currentLikes} save={this.saveLike}/>
              <Chart chartData={this.state.users} legendPosition="bottom"/>
              </div>
            </Fragment>
            )} 
        </div>
    );
  }
}
 
export default App;
