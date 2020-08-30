import React , { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component{
    renderContent(){
        switch(this.props.auth){
            case null:
                return 'Waiting to log in';
            case false:
                return (
                    <div>
                        <a className="btn btn-primary" href="/auth/google">Sign in with Google</a>
                    </div>
                );
            default:
                return (<a className="btn btn-outline-primary" href="/logout">Logout</a>);
        }
    }
    render(){
        return(
            <div>
                    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                    <h5 className="my-0 mr-md-auto font-weight-normal">T.A.R.A</h5>  
                    {this.renderContent()}
                    </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{auth: state.auth};
}

export default connect(mapStateToProps)(Header);