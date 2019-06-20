import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Likes extends Component {
    
    addLikes=(e) =>{
        e.preventDefault();
        let likes = Number(this.props.likes);
        console.log(likes);
        likes++;
        //mandamos el numero actualizado al state
        this.props.save(likes);
       
    }

    
    render() { 
        return ( 
            <div className="likes text-center">
                <h2>{this.props.likes}</h2>
                <button type="submit" className="btn btn-primary" onClick={this.addLikes}>Add Like</button>
            </div>
          
         );
        }
}


 
export default Likes;

Likes.propTypes = {
}