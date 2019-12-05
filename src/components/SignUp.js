import React from 'react'
import TextField from '@material-ui/core/TextField';
import logo from '../photos/signUpLogo.svg'
import ConfirmInfo from '../components/ConfirmInfo'
import Slide from '@material-ui/core/Slide'
import { getInformation } from '../action/Pycon'
import { FaSignUpNavbar } from './mutliLang'
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
            postalCode: '',
            address: '',
            username: '',
            errors : {
                username: '',
                email: '',
                phone: '',
                postalCode: '',
                code: '',
                name_fa: '',
                name_en: '',
                workplace: ''
            }
        }
    }

    back() {
        this.setState({ checked : !this.state.checked })
    }

    handleChange () {
        // this.setState({ checked : !this.state.checked })
        // this.props.dispatch((getInformation(this.state.firstname, this.state.lastname, this.state.eng_firstname
        //             ,this.state.eng_lastname, this.state.email, this.state.code, this.state.work, this.state.work
        //             ,this.state.phone, this.state.postalCode, this.state.address)))
        

            axios.post('http://127.0.0.1:8000/user/registerIran/', {
                name_fa: this.state.firstname,
                username: this.state.username,
                name_en: this.state.eng_firstname,
                codemli: this.state.code,
                phonenum: this.state.phone,
                workplace: this.state.work,
                address: this.state.address,
                postalcode: this.state.postalCode,
                email: this.state.email,
              })
                .then((response) => {
                    const errors = {
                        username: '',
                        email: '',
                        phone: '',
                        postalCode: '',
                        code: '',
                        name_fa: '',
                        name_en: '',
                        workplace: ''
                    }
                    this.setState({ errors: errors })
                  this.setState({ checked : !this.state.checked })
                  this.props.dispatch((getInformation(this.state.firstname, this.state.lastname, this.state.eng_firstname
                    ,this.state.eng_lastname, this.state.email, this.state.code, this.state.work, this.state.work
                    ,this.state.phone, this.state.postalCode, this.state.address)))
        
                //   window.localStorage.setItem('token', response.data.token)
                //   this.props.history.push('/messenger/')
                })
                .catch((error) => {
                    let username=''
                    let email = ''
                    let phone = ''
                    let postalCode = ''
                    let code = ''
                    let name_fa = ''
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
                    if (error.response.data.postalcode !== undefined) {
                        postalCode = error.response.data.postalcode[0]
                    }
                    if (error.response.data.codemli !== undefined) {
                        code = error.response.data.codemli[0]
                    }
                    if (error.response.data.name_fa !== undefined) {
                        name_fa = error.response.data.name_fa[0]
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
                        postalCode: postalCode,
                        code: code,
                        name_fa: name_fa,
                        name_en: name_en,
                        workplace: workplace
                    }
                    this.setState({ errors: errors })
                    console.log(this.state.errors)
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
                <FaSignUpNavbar />
                <img src={logo}/>
                <h1>ثبت نام</h1>
                <div className='infoDiv'>
                    <div className='nameDiv'>
                        <div>
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
                            { this.state.errors.name_fa &&
                                <p className='errorss'>{this.state.errors.name_fa}</p>
                                }
                            </div>
                        <div>
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
                            { this.state.errors.name_fa &&
                            <p className='errors'>{this.state.errors.name_fa}</p>
                            }
                        </div>
                    </div>
                    <div className='nameDiv'>
                        <div>
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
                        </div>
                        <div>
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
                            { this.state.errors.name_en &&
                                <p className='errorss'>{this.state.errors.name_en}</p>
                            }
                        </div>
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
                        { this.state.errors.code &&
                            <p className='errors'>{this.state.errors.code}</p>
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
                        { this.state.errors.workplace &&
                        <p className='errors'>{this.state.errors.workplace}</p>
                        }
                        <TextField
                            id="outlined-email-input"
                            label="شماره تماس"
                            type="tel"
                            name="phone"
                            margin="normal"
                            variant="outlined"
                            InputLabelProps={{
                                style: {
                                    fontFamily: 'Vazir'
                                },
                            }}
                            onChange={(e)=> this.changeInput(e)}

                        />
                        { this.state.errors.phone &&
                            <p className='errors'>{this.state.errors.phone}</p>
                        }
                        <TextField
                            id="outlined-email-input"
                            label="کد پستی"
                            type="text"
                            name="postalCode"
                            margin="normal"
                            variant="outlined"
                            InputLabelProps={{
                                style: {
                                    fontFamily: 'Vazir',
                                },
                            }}
                            onChange={(e)=> this.changeInput(e)}

                        />
                        { this.state.errors.postalCode &&
                            <p className='errors'>{this.state.errors.postalCode}</p>
                        }
                        <TextField
                            id="outlined-dense-multiline"
                            name='address'
                            label="آدرس محل سکونت"
                            margin="dense"
                            variant="outlined"
                            multiline
                            rowsMax="4"
                            InputLabelProps={{
                                style: {
                                    fontFamily: 'Vazir'
                                },
                            }}
                            onChange={(e)=> this.changeInput(e)}
                        />
                    </div>
                    <button type='submit' className='nextButton' onClick={()=> this.handleChange()}>مرحله بعد</button>
                    <Slide direction="left" in={this.state.checked} mountOnEnter unmountOnExit>
                        <ConfirmInfo
                            firstname={this.state.firstname}
                            lastname={this.state.lastname}
                            eng_firstname={this.state.eng_firstname}
                            eng_lastname={this.state.eng_lastname}
                            email={this.state.email}
                            code={this.state.code}
                            work={this.state.work}
                            phone={this.state.phone}
                            postalCode={this.state.postalCode}
                            address={this.state.address}
                            handleChange={()=>this.back()}
                        />
                    </Slide>
                </div>
                
            </div>
        )   
}
    
}