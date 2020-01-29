import React from 'react'
import TextField from '@material-ui/core/TextField';
import logo from '../photos/signUpLogo.svg'
import { getInformationArticle } from '../action/Pycon'
import { Link  } from 'react-router-dom'
import AttachmentIcon from '@material-ui/icons/Attachment';
import { FaSignUpNavbar } from './mutliLang';
import axios from 'axios'




export default class SignUp extends React.Component {
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
            nameOfFile: '',
            file: '',
            errors: {
                name_fa: '',
                username: '',
                name_en: '',
                codemli: '',
                phonenum: '',
                email: '',
                lastname_fa: '',
                lastname_en: '',
                workplace_name: '',
                file: ''
            }
        }
    }

    handleChange () {
        axios.post('http://94.182.191.147/api/upload/uploadfileIran/', {
            name_fa: this.state.firstname,
            username: this.state.username,
            name_en: this.state.eng_firstname,
            codemli: this.state.code,
            phonenum: this.state.phone,
            email: this.state.email,
            lastname_fa: this.state.lastname,
            lastname_en: this.state.eng_lastname,
            workplace_name: this.state.work,
            file: this.state.file
            })
            .then((response) => {
                const errors = {
                    name_fa: '',
                    username: '',
                    name_en: '',
                    codemli: '',
                    phonenum: '',
                    email: '',
                    lastname_fa: '',
                    lastname_en: '',
                    workplace_name: '',
                    file: ''
                }
                this.setState({ checked : !this.state.checked, errors })
                this.props.dispatch((getInformationArticle(this.state.firstname, this.state.lastname, this.state.email)))
                this.props.history.push('/articleLandingPage/')
            })
            .catch((error) => {
                let name_fa= ''
                let username= ''
                let name_en= ''
                let codemli= ''
                let phonenum= ''
                let email= ''
                let lastname_fa= ''
                let lastname_en= ''
                let workplace_name= ''
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
                if (error.response.data.codemli !== undefined) {
                    codemli = error.response.data.codemli[0]
                }
                if (error.response.data.name_fa !== undefined) {
                    name_fa = error.response.data.name_fa[0]
                }
                if (error.response.data.name_en !== undefined) {
                    name_en = error.response.data.name_en[0]
                }

                if (error.response.data.lastname_fa !== undefined) {
                    lastname_fa = error.response.data.lastname_fa[0]
                }
                if (error.response.data.lastname_en !== undefined) {
                    lastname_en = error.response.data.lastname_en[0]
                }
                if (error.response.data.workplace_name !== undefined) {
                    workplace_name = error.response.data.workplace_name[0]
                }
                if (error.response.data.file !== undefined) {
                    file = error.response.data.file[0]
                }

                const errors = {
                    name_fa: name_fa,
                    username: username,
                    name_en: name_en,
                    codemli: codemli,
                    phonenum: phonenum,
                    email: email,
                    lastname_fa: lastname_fa,
                    lastname_en: lastname_en,
                    workplace_name: workplace_name,
                    file: file
                }
                this.setState({errors})
                console.log({errors})
            })  
    }

    changeInput (e) {
        const name = e.target.name
        this.setState({ [name]: e.target.value})
    }


    showname () {
        var name = document.getElementById('fileInput'); 
        console.log('Selected file: ' + name.files.item(0).name);
        this.setState({nameOfFile: name.files.item(0).name , file: name.files.item(0)})
      };
    


    render () {
        return (
            <div className='signUpDiv'>
                {/* <div className='signUpLogo'/> */}
                <FaSignUpNavbar />
                <img src={logo}/>
                <h1>ارسال مقالات</h1>
                <div className='infoDiv'>
                    <div className='nameDiv'>
                        <TextField
                            // id="outlined-email-input"
                            label="نام خانوادگی"
                            type="text"
                            name="lastname"
                            margin="normal"
                            variant="outlined"
                            InputLabelProps={{
                                style: {
                                    fontFamily: 'Vazir'
                                },
                            }}
                            onChange={(e)=> this.changeInput(e)}

                        />
                        { this.state.errors.lastname &&
                            <p className='errors'>{this.state.errors.lastname}</p>
                        }
                        { !this.state.errors.lastname && this.state.errors.firstname &&
                            <p className='errorss'>{this.state.errors.firstname}</p>
                        }
                         <TextField
                            // id="outlined-email-input"
                            label="نام"
                            type="text"
                            name="firstname"
                            margin="normal"
                            variant="outlined"
                            InputLabelProps={{
                                style: {
                                    fontFamily: 'Vazir'
                                },
                            }}
                            onChange={(e)=> this.changeInput(e)}

                        />
                        { this.state.errors.firstname &&
                            <p className='errors'>{this.state.errors.firstname}</p>
                        }
                    </div>
                    <div className='nameDiv'>
                        <TextField
                            // id="outlined-email-input"
                            label="First Name"
                            type="text"
                            name="eng_firstname"
                            margin="normal"
                            variant="outlined"
                            InputLabelProps={{
                                style: {
                                    fontFamily: 'Vazir'
                                },
                            }}
                            onChange={(e)=> this.changeInput(e)}

                        />
                        { this.state.errors.name_en &&
                            <p className='errors'>{this.state.errors.name_en}</p>
                        }
                         <TextField
                            // id="outlined-email-input"
                            label="Last Name"
                            type="text"
                            name="eng_lastname"
                            margin="normal"
                            variant="outlined"
                            InputLabelProps={{
                                style: {
                                    fontFamily: 'Vazir'
                                },
                            }}
                            onChange={(e)=> this.changeInput(e)}

                        />
                        { this.state.errors.lastname_en &&
                            <p className='errors'>{this.state.errors.lastname_en}</p>
                        }
                        { !this.state.errors.lastname_en && this.state.errors.name_en &&
                            <p className='errorss'>{this.state.errors.name_en}</p>
                        }
                    </div>
                    <div className='otherInfoDiv'>
                        <TextField
                            // id="outlined-email-input"
                            label="نام کاربری"
                            type="text"
                            name="username"
                            margin="normal"
                            variant="outlined"
                            InputLabelProps={{
                                style: {
                                    fontFamily: 'Vazir'
                                },
                            }}
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
                            InputLabelProps={{
                                style: {
                                    fontFamily: 'Vazir'
                                },
                            }}
                            onChange={(e)=> this.changeInput(e)}

                        />
                        { this.state.errors.email &&
                            <p className='errors'>{this.state.errors.email}</p>
                        }
                        <TextField
                                // id="outlined-email-input"
                                label="کد ملی"
                                type="text"
                                name="code"
                                margin="normal"
                                variant="outlined"
                                InputLabelProps={{
                                    style: {
                                        fontFamily: 'Vazir'
                                    },
                                }}
                                onChange={(e)=> this.changeInput(e)}

                        />
                        { this.state.errors.codemli &&
                            <p className='errors'>{this.state.errors.codemli}</p>
                        }
                        <TextField
                                id="outlined-email-input"
                                label="محل کار یا تحصیل"
                                type="text"
                                name="work"
                                margin="normal"
                                variant="outlined"
                                InputLabelProps={{
                                    style: {
                                        fontFamily: 'Vazir'
                                    },
                                }}
                                onChange={(e)=> this.changeInput(e)}

                        />
                        { this.state.errors.workplace_name &&
                            <p className='errors'>{this.state.errors.workplace_name}</p>
                        }
                        <TextField
                                id="outlined-email-input"
                                label="شماره تماس"
                                type="tel"
                                name="phone"
                                margin="normal"
                                variant='outlined'
                                InputLabelProps={{
                                    style: {
                                        fontFamily: 'Vazir'
                                    },
                                }}
                                onChange={(e)=> this.changeInput(e)}
                        />
                        { this.state.errors.phonenum &&
                            <p className='errors'>{this.state.errors.phonenum}</p>
                        }
                    </div>
                    <div className="upload-btn-wrapper">
                        <button className="btn"><AttachmentIcon /></button>
                        <input type="file" name="myfile" id="fileInput" onChange={() => this.showname()} />
                        <input type="text" value={this.state.nameOfFile} onChange={() => this.showname()} disabled placeholder='آپلود مقاله'/>
                    </div>
                    { this.state.errors.file &&
                            <p className='errors'>{this.state.errors.file}</p>
                        }
                    {/* <button type='submit' className='nextButton' onClick={()=> this.handleChange()}>مرحله بعد</button> */}
                    <div className='nextButton' onClick={()=> this.handleChange()}>پرداخت</div>
                </div>
                
            </div>
        )   
}
    
}