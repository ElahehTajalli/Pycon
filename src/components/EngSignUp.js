import React from 'react'
import TextField from '@material-ui/core/TextField';
import logo from '../photos/signUpLogo.svg'
import EngConfirmInfo from '../components/EngConfirmInfo'
import Slide from '@material-ui/core/Slide'
import { getInformation } from '../action/Pycon'
import { EngSignUpNavbar } from './mutliLang';
import axios from 'axios'




export default class EngSignUp extends React.Component {
    constructor() {
        super()

        this.state = {
            checked : false,
            firstname: '',
            lastname: '',
            firstname: '',
            lastname: '',
            email: '',
            code: '',
            work: '',
            phone: '',
            postalCode: '',
            address: '',
            errors : {
                username :'',
                email: '',
                phone: '',
                name_en: '',
                workplace: ''
            }
        }
    }

    back() {
        this.setState({ checked : !this.state.checked })
    }

    handleChange () {
            axios.post('http://127.0.0.1:8000/user/registerForeign/', {
                username: this.state.username,
                name_en: this.state.firstname,
                phonenum: this.state.phone,
                workplace: this.state.work,
                email: this.state.email,
              })
                .then((response) => {
                    const errors = {
                        username: '',
                        email: '',
                        phone: '',
                        name_en: '',
                        workplace: ''
                    }
                    this.setState({ checked : !this.state.checked , errors })
                    this.props.dispatch((getInformation(this.state.firstname, this.state.lastname,
                    this.state.email, this.state.work, this.state.work, this.state.phone)))

                })
                .catch((error) => {
                    let username=''
                    let email = ''
                    let phone = ''
                    let name_en = ''
                    let workplace = ''
                    if (error.response.data.username !== undefined) {
                        username = error.response.data.username[0]
                    }
                    if (error.response.data.email !== undefined) {
                        email = error.response.data.email[0]
                    }
                    if (error.response.data.phonenum !== undefined) {
                        phone = error.response.data.phonenum[0]
                    }
                    if (error.response.data.name_en !== undefined) {
                        name_en = error.response.data.name_en[0]
                    }
                    if (error.response.data.workplace !== undefined) {
                        workplace = error.response.data.workplace[0]
                    }
                    const errors = {
                        username: username,
                        email: email,
                        phone: phone,
                        name_en: name_en,
                        workplace: workplace
                    }
                    this.setState({ errors: errors })
                })    
    
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
                        <div>
                            <TextField
                                // id="outlined-email-input"
                                label="First Name"
                                type="text"
                                name="firstname"
                                margin="normal"
                                variant="outlined"
                                onChange={(e)=> this.changeInput(e)}

                            />
                            { this.state.errors.name_en &&
                                <p className='errors'>{this.state.errors.name_en}</p>
                            }
                        </div>
                        <div>
                            <TextField
                                // id="outlined-email-input"
                                label="Last Name"
                                type="text"
                                name="lastname"
                                margin="normal"
                                variant="outlined"
                                onChange={(e)=> this.changeInput(e)}

                            />
                            { this.state.errors.name_en &&
                                <p className='errorss'>{this.state.errors.name_en}</p>
                            }
                        </div>
                    </div>
                    <div className='otherInfoDiv'>
                        <TextField
                            id="outlined-email-input"
                            label="username"
                            type="text"
                            name="username"
                            margin="normal"
                            variant="outlined"
                            onChange={(e)=> this.changeInput(e)}
                        />
                        { this.state.errors.username &&
                            <p className='errors'>{this.state.errors.username}</p>
                        }
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
                        { this.state.errors.email &&
                            <p className='errors'>{this.state.errors.email}</p>
                        }
                        <TextField
                                id="outlined-email-input"
                                label="Work"
                                type="text"
                                name="work"
                                margin="normal"
                                variant="outlined"
                                onChange={(e)=> this.changeInput(e)}

                        />
                        { this.state.errors.workplace &&
                            <p className='errors'>{this.state.errors.workplace}</p>
                        }
                        
                        <TextField
                            id="outlined-email-input"
                            label="Phone number"
                            type="tel"
                            name="phone"
                            margin="normal"
                            variant="outlined"
                            onChange={(e)=> this.changeInput(e)}

                        />
                        { this.state.errors.phone &&
                            <p className='errors'>{this.state.errors.phone}</p>
                        }
                    </div>
                    <button type='submit' className='nextButton' onClick={()=> this.handleChange()}>Next</button>
                    <Slide direction="left" in={this.state.checked} mountOnEnter unmountOnExit>
                        <EngConfirmInfo
                            firstname={this.state.firstname}
                            lastname={this.state.lastname}
                            email={this.state.email}
                            work={this.state.work}
                            phone={this.state.phone}
                            handleChange={()=>this.back()}
                        />
                    </Slide>
                </div>
                
            </div>
        )   
}
    
}