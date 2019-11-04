import React from 'react'
import TextField from '@material-ui/core/TextField';
import logo from '../photos/signUpLogo.svg'
import ConfirmInfo from '../components/ConfirmInfo'
import Slide from '@material-ui/core/Slide'
import { getInformation } from '../action/Pycon'
import { EngSignUpNavbar } from './mutliLang';



export default class EngSignUp extends React.Component {
    constructor() {
        super()

        this.state = {
            checked : false,
            firstname: '',
            lastname: '',
            eng_firstname: '',
            eng_lastname: '',
            email: '',
            code: '',
            work: '',
            phone: '',
            postalCode: '',
            address: ''
        }
    }

    handleChange () {
        this.setState({ checked : !this.state.checked })
        this.props.dispatch((getInformation(this.state.firstname, this.state.lastname, this.state.eng_firstname
            ,this.state.eng_lastname, this.state.email, this.state.code, this.state.work, this.state.work
            ,this.state.phone, this.state.postalCode, this.state.address)))

    }

    changeInput (e) {
        const name = e.target.name
        this.setState({ [name]: e.target.value})
    }
    


    render () {
        return (
            <div className='signUpDiv'>
                {/* <div className='signUpLogo'/> */}
                <EngSignUpNavbar />
                <img src={logo}/>
                <h1>Sign Up</h1>
                <div className='infoDiv'>
                    <div className='nameDiv'>
                        <TextField
                            // id="outlined-email-input"
                            label="First Name"
                            type="text"
                            name="eng_firstname"
                            margin="normal"
                            variant="outlined"
                            onChange={(e)=> this.changeInput(e)}

                        />
                         <TextField
                            // id="outlined-email-input"
                            label="Last Name"
                            type="text"
                            name="eng_lastname"
                            margin="normal"
                            variant="outlined"
                            onChange={(e)=> this.changeInput(e)}

                        />
                    </div>
                    <div className='otherInfoDiv'>
                        <TextField
                            // id="outlined-email-input"
                            label="Email"
                            type="email"
                            name="email"
                            autoComplete="email"
                            margin="normal"
                            variant="outlined"
                            onChange={(e)=> this.changeInput(e)}

                        />
                        <TextField
                                id="outlined-email-input"
                                label="Work"
                                type="text"
                                name="work"
                                margin="normal"
                                variant="outlined"
                                onChange={(e)=> this.changeInput(e)}

                        />
                        <TextField
                                id="outlined-email-input"
                                label="Phone number"
                                type="tel"
                                name="phone"
                                margin="normal"
                                variant="outlined"
                                onChange={(e)=> this.changeInput(e)}

                        />
                    </div>
                    <button type='submit' className='nextButton' onClick={()=> this.handleChange()}>Next</button>
                    <Slide direction="left" in={this.state.checked} mountOnEnter unmountOnExit>
                        <ConfirmInfo
                            eng_firstname={this.state.eng_firstname}
                            eng_lastname={this.state.eng_lastname}
                            email={this.state.email}
                            work={this.state.work}
                            phone={this.state.phone}
                            handleChange={()=>this.handleChange()}
                        />
                    </Slide>
                </div>
                
            </div>
        )   
}
    
}