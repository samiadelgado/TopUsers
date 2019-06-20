import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Login extends Component {

    userRef= React.createRef();
    
    loginUser=(e) =>{
        e.preventDefault();

        //enviar por props
        this.props.login(this.userRef.current.value);
    }

    
    render() { 
        return ( 
            <form onSubmit={this.loginUser}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="user">Introduzca Usuario</label>
                        <input type="text" className="form-control" id="user" placeholder="User" ref={this.userRef}/>
                    </div>
                    <div className="form-group col-md-6 login">
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </div>
                </div>    
            </form>
         );
    }
}
 
export default Login;

Login.propTypes = {
}