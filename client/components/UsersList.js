import React,{Component} from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/actions/user";

class UsersList extends Component{
    componentDidMount(){
 
        this.props.fetchUsers()
        console.log(fetchUsers());
    }

    renderUsers(){
        return this.props.users.map(user=>{
            return <li key={user.id}>{user.name}</li>
        })
    }
    render(){
        return <div>
        <ul>{this.renderUsers()}</ul>
        </div>
    }
}

function mapStateToProps(state){
    return {users: state.users}
}

export default connect(mapStateToProps, {fetchUsers})(UsersList);