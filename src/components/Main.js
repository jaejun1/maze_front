import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Main extends Component {
    constructor(props) {
        super(props);

        this.checkLogin = this.checkLogin.bind(this);
        this.isAdmin = this.isAdmin.bind(this);
    }

    checkLogin(){
        const id = this.props.id;
        return (id != "");
    }

    isAdmin(userId){
        const isAdmin = this.props.isAdmin;
        return isAdmin;
    }

    render() {
        if (!this.checkLogin()){
            return (
                <Redirect to='/login' />
            );
        }

        if (this.isAdmin()){
            return (
                <Redirect to='/admin/home' />
            )
        }

        return (
            <Redirect to='/home' />
        );
    }
}

var mapStateToProps = (state) => {
    return ({
        id: state.login.id,
        isAdmin: state.login.isAdmin,
    });
}

export default connect(mapStateToProps)(Main);