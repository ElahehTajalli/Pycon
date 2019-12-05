import React from 'react'
import TextField from '@material-ui/core/TextField';
import logo from '../photos/signUpLogo.svg'
import { Link } from 'react-router-dom'
import {EngSignUpNavbar} from './mutliLang'


export default class SignUp extends React.Component {


    render () {
        return (
            <div className='signUpDiv'>
                <EngSignUpNavbar />
                <img src={logo}/>
                <div className='payText'>
                    <p>Registration Successful ! </p>
                </div>
                <div className='informationDiv'>
                    <p><b>Full Name :</b>     {this.props.firstname} {this.props.lastname}</p>
                    <p><b>Email :</b>     {this.props.email}</p>
                    <p><b>Payment Id : </b></p>

                    <div className='buttonsDiv'>
                        <button type='submit' className='prevButton'>Print Receipt</button>
                        <Link to='/' className='prevButton'>Home</Link>
                    </div>
                </div>
            </div>
        )   
}
    
}