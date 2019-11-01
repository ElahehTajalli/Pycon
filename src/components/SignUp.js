import React from 'react'
import TextField from '@material-ui/core/TextField';
import logo from '../photos/signUpLogo.svg'
import Navbar from "./SignUpNavbar"
import ConfirmInfo from '../components/ConfirmInfo'
import Slide from '@material-ui/core/Slide'
import { getInformation } from '../action/Pycon'



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
                <Navbar />
                <img src={logo}/>
                <h1>ثبت نام</h1>
                <div className='infoDiv'>
                    <div className='nameDiv'>
                        <TextField
                            // id="outlined-email-input"
                            label="نام خانوادگی"
                            type="text"
                            name="lastname"
                            margin="normal"
                            variant="outlined"
                            onChange={(e)=> this.changeInput(e)}

                        />
                         <TextField
                            // id="outlined-email-input"
                            label="نام"
                            type="text"
                            name="firstname"
                            margin="normal"
                            variant="outlined"
                            onChange={(e)=> this.changeInput(e)}

                        />
                    </div>
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
                                // id="outlined-email-input"
                                label="کد ملی"
                                type="text"
                                name="code"
                                margin="normal"
                                variant="outlined"
                                onChange={(e)=> this.changeInput(e)}

                        />
                        <TextField
                                id="outlined-email-input"
                                label="محل کار یا تحصیل"
                                type="text"
                                name="work"
                                margin="normal"
                                variant="outlined"
                                onChange={(e)=> this.changeInput(e)}

                        />
                        <TextField
                                id="outlined-email-input"
                                label="شماره تماس"
                                type="tel"
                                name="phone"
                                margin="normal"
                                variant="outlined"
                                onChange={(e)=> this.changeInput(e)}

                        />
                        <TextField
                                id="outlined-email-input"
                                label="کد پستی"
                                type="text"
                                name="postalCode"
                                margin="normal"
                                variant="outlined"
                                onChange={(e)=> this.changeInput(e)}

                        />
                        <TextField
                            id="outlined-dense-multiline"
                            name='address'
                            label="آدرس محل سکونت"
                            margin="dense"
                            variant="outlined"
                            multiline
                            rowsMax="4"
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
                            handleChange={()=>this.handleChange()}
                        />
                    </Slide>
                </div>
                
            </div>
        )   
}
    
}