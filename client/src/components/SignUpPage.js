import React , { Component } from 'react';
import { connect } from 'react-redux';

const SignUpPage = ()=>{
 return(
     <div>
         Signup
     </div>
 );

};

function mapStateToProps(state){
    return{auth: state.auth};
}

export default connect(mapStateToProps)(SignUpPage);