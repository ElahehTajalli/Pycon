import React from 'react'
import { Link as LinkTo } from 'react-router-dom'




export default class SignUp extends React.Component { 
    render () {
        return (
            <div className='engMainConfirmDiv'>

                <h1 style={{justifyContent:'center', display:'flex'}}>Confirm Information</h1>
                <div className='engConfirmDiv'>
                    <p><b>Full Name: </b> {this.props.firstname} {this.props.lastname}</p>
                    <p><b>Email: </b> {this.props.email}</p>
                    <p><b>Affiliation: </b> {this.props.affiliation}</p>
                    <p style={{paddingBottom: '75px'}}><b>Phone Number: </b> {this.props.phone}</p>
                    <div className='buttonDiv'>
                        {!this.props.registerField &&
                        <>
                            <LinkTo to='/enSignUp/' className='engConfirmPayButton confirmButton' onClick={this.props.register}>SignUp</LinkTo>
                            <button type='submit' className='confirmButton' onClick={this.props.handleChange}>Back</button>
                        </>
                        }
                        {this.props.registerField &&
                            <LinkTo to='/' className='confirmButton'>Home</LinkTo>
                        }
                    </div>


                </div> 
                </div>
        )   
}
    
}