import React from 'react'
import TextField from '@material-ui/core/TextField';
import logo from '../photos/signUpLogo.svg'
import { getInformationArticle } from '../action/Pycon'
import { Link  } from 'react-router-dom'
import AttachmentIcon from '@material-ui/icons/Attachment';
import { EngSignUpNavbar } from './mutliLang';
import axios from 'axios'




export default class SignUp extends React.Component {
    constructor() {
        super()

        this.state = {
            checked : false,
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            nameOfFile: '',
            submit: false,
            file: '',
            affiliation: '',
            errors: {
                username: '',
                name_en: '',
                phonenum: '',
                email: '',
                lastname_en: '',
                affiliation: '',
                file: ''
            }
        }
    }


    handleChange () {
        axios.post('http://94.182.191.147/api/upload/uploadfileForeign/', {
                username: this.state.username,
                name_en: this.state.firstname,
                lastname_en: this.state.lastname,
                phonenum: this.state.phone,
                email: this.state.email,
                workplace_name: this.state.affiliation,
                file: this.state.file
              })
                .then((response) => {
                    const errors = {
                        username: '',
                        email: '',
                        phonenum: '',
                        name_en: '',
                        lastname_en:'',
                        affiliation: '',
                        file: ''
                    }
                    this.setState({ checked : !this.state.checked, submit: true })
                    this.props.dispatch((getInformationArticle(this.state.firstname, this.state.lastname, this.state.email)))
                    this.props.history.push('/enArticles/')

                })
                .catch((error) => {
                    let username=''
                    let email = ''
                    let phonenum = ''
                    let name_en = ''
                    let lastname_en = ''
                    let affiliation= ''
                    let file= ''
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
                    if (error.response.data.file !== undefined) {
                        file = error.response.data.file[0]
                    }
                    const errors = {
                        username: username,
                        email: email,
                        phonenum: phonenum,
                        name_en: name_en,
                        lastname_en: lastname_en,
                        affiliation: affiliation,
                        file: file
                    }
                    this.setState({ errors: errors })
                })
        
    }

    changeInput (e) {
        const name = e.target.name
        this.setState({ [name]: e.target.value })
    }


    showname () {
        var name = document.getElementById('fileInput'); 
        console.log('Selected file: ' + name.files.item(0).name);
        this.setState({nameOfFile: name.files.item(0).name, file: name.files.item(0) })
      };
    


    render () {
        return (
            <div className='signUpDiv'>
                <EngSignUpNavbar />
                <img src={logo}/>
                {this.state.submit &&
                    <div className='payText'>
                        <p>Your submission was successful !</p>
                    </div>
                }
                <h1>Submit Paper</h1>
                <div className='infoDiv'>
                    <div className='nameDiv'>
                        <TextField
                            label="First Name"
                            type="text"
                            name="irstname"
                            margin="normal"
                            variant="outlined"
                            onChange={(e)=> this.changeInput(e)}
                        />
                        { this.state.errors.name_en &&
                            <p className='errors'>{this.state.errors.name_en}</p>
                        }
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
                        { this.state.errors.name_en && !this.state.lastname_en &&
                            <p className='errorss'>{this.state.errors.name_en}</p>
                        }
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
                                label="Phone Number"
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
                    <div className="upload-btn-wrapper">
                        <button className="btn"><AttachmentIcon /></button>
                        <input type="file" name="myfile" id="fileInput" onChange={() => this.showname()} />
                        <input type="text" value={this.state.nameOfFile} onChange={() => this.showname()} disabled placeholder='Upload Article'/>
                    </div>
                    {!this.state.submit &&
                        <div className='nextButton' onClick={()=> this.handleChange()}>Send</div>
                    }
                    
                </div>
                
            </div>
        )   
}
    
}