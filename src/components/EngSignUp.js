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
            email: '',
            phone: '',
            register: false,
            postReq: true,
            affiliation: '',
            username: '',
            errors : {
                username: '',
                email: '',
                phonenum: '',
                name_en: '',
                lastname_en:'',
                affiliation: ''
            }
        }
    }

    register() {
        this.setState({register: true})
    }


    back() {
        this.setState({ checked : !this.state.checked })
    }

    changeReq() {
        this.setState({ postReq: true})
    }

    handleChange () {
        // this.setState({ checked : !this.state.checked, register: false })
        //             this.props.dispatch((getInformation(this.state.firstname, this.state.lastname,
        //             this.state.email, this.state.work, this.state.work, this.state.phone)))
        if(this.state.postReq) {
            axios.post('http://94.182.191.147/api/user/registerForeign/', {
                username: this.state.username,
                name_en: this.state.firstname,
                lastname_en: this.state.lastname,
                phonenum: this.state.phone,
                email: this.state.email,
                workplace_name: this.state.affiliation

              })
                .then((response) => {
                    const errors = {
                        username: '',
                        email: '',
                        phonenum: '',
                        name_en: '',
                        lastname_en:'',
                        affiliation: ''
                    }
                    this.setState({ checked : !this.state.checked , errors , register: false, postReq: false })
                    // this.props.dispatch((getInformation(this.state.firstname, this.state.lastname,
                    // this.state.email, this.state.affiliation, this.state.phone)))

                })
                .catch((error) => {
                    let username=''
                    let email = ''
                    let phonenum = ''
                    let name_en = ''
                    let lastname_en = ''
                    let affiliation = ''
                    if (error.response.data.username !== undefined) {
                        username = error.response.data.username[0]
                    }
                    if (error.response.data.email !== undefined) {
                        email = error.response.data.email[0]
                    }
                    if (error.response.data.phonenum !== undefined) {
                        phonenum = error.response.data.phonenum[0]
                    }
                    if (error.response.data.name_en !== undefined) {
                        name_en = error.response.data.name_en[0]
                    }
                    if (error.response.data.lastname_en !== undefined) {
                        lastname_en = error.response.data.lastname_en[0]
                    }
                    if (error.response.data.workplace_name !== undefined) {
                        affiliation = error.response.data.workplace_name[0]
                    }
                    const errors = {
                        username: username,
                        email: email,
                        phonenum: phonenum,
                        name_en: name_en,
                        lastname_en: lastname_en,
                        affiliation: affiliation
                    }
                    this.setState({ errors: errors })
                })
            } else {
                axios.put('http://94.182.191.147/api/user/registerForeign/', {
                username: this.state.username,
                name_en: this.state.firstname,
                lastname_en: this.state.lastname,
                phonenum: this.state.phone,
                email: this.state.email,
                workplace_name: this.state.affiliation

              })
                .then((response) => {
                    const errors = {
                        username: '',
                        email: '',
                        phonenum: '',
                        name_en: '',
                        lastname_en:'',
                        affiliation: ''
                    }
                    this.setState({ checked : !this.state.checked , errors , register: false, postReq: false })
                    // this.props.dispatch((getInformation(this.state.firstname, this.state.lastname,
                    // this.state.email,this.state.affiliation, this.state.phone)))

                })
                .catch((error) => {
                    let username=''
                    let email = ''
                    let phonenum = ''
                    let name_en = ''
                    let lastname_en = ''
                    let affiliation = ''
                    if (error.response.data.username !== undefined) {
                        username = error.response.data.username[0]
                    }
                    if (error.response.data.email !== undefined) {
                        email = error.response.data.email[0]
                    }
                    if (error.response.data.phonenum !== undefined) {
                        phonenum = error.response.data.phonenum[0]
                    }
                    if (error.response.data.name_en !== undefined) {
                        name_en = error.response.data.name_en[0]
                    }
                    if (error.response.data.lastname_en !== undefined) {
                        lastname_en = error.response.data.lastname_en[0]
                    }
                    if (error.response.data.workplace_name !== undefined) {
                        affiliation = error.response.data.workplace_name[0]
                    }
                    const errors = {
                        username: username,
                        email: email,
                        phonenum: phonenum,
                        name_en: name_en,
                        lastname_en: lastname_en,
                        affiliation: affiliation
                    }
                    this.setState({ errors: errors })
                })
            } 
    
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
                {this.state.register &&
                    <div className='payText'>
                        <p>Your registration was successful !</p>
                    </div>
                }
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
                            { this.state.errors.lastname_en &&
                                <p className='errors'>{this.state.errors.lastname_en}</p>
                            }
                            { this.state.errors.name_en && !this.state.errors.lastname_en &&
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
                                label="Affiliation"
                                type="text"
                                name="affiliation"
                                margin="normal"
                                variant="outlined"
                                onChange={(e)=> this.changeInput(e)}

                        />
                        { this.state.errors.affiliation &&
                            <p className='errors'>{this.state.errors.affiliation}</p>
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
                        { this.state.errors.phonenum &&
                            <p className='errors'>{this.state.errors.phonenum}</p>
                        }
                    </div>
                    <button type='submit' className='nextButton' onClick={()=> this.handleChange()}>Next</button>
                    <Slide direction="left" in={this.state.checked} mountOnEnter unmountOnExit>
                        <EngConfirmInfo
                            firstname={this.state.firstname}
                            lastname={this.state.lastname}
                            email={this.state.email}
                            affiliation={this.state.affiliation}
                            phone={this.state.phone}
                            handleChange={()=>this.back()}
                            register={()=>this.register()}
                            registerField={this.state.register}
                        />
                    </Slide>
                </div>
                
            </div>
        )   
}
    
}