import React from 'react'
import TextField from '@material-ui/core/TextField';
import logo from '../photos/signUpLogo.svg'
import Navbar from "./SignUpNavbar"
import { getInformationArticle } from '../action/Pycon'
import { Link  } from 'react-router-dom'
import AttachmentIcon from '@material-ui/icons/Attachment';



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
            nameOfFile: ''
        }
    }

    handleChange () {
        this.setState({ checked : !this.state.checked })
        this.props.dispatch((getInformationArticle(this.state.firstname, this.state.lastname, this.state.email)))

    }

    changeInput (e) {
        const name = e.target.name
        this.setState({ [name]: e.target.value})
    }


    showname () {
        var name = document.getElementById('fileInput'); 
        console.log('Selected file: ' + name.files.item(0).name);
        this.setState({nameOfFile: name.files.item(0).name })
      };
    


    render () {
        return (
            <div className='signUpDiv'>
                {/* <div className='signUpLogo'/> */}
                <Navbar />
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
                    </div>
                    <div className="upload-btn-wrapper">
                        <button className="btn"><AttachmentIcon /></button>
                        <input type="file" name="myfile" id="fileInput" onChange={() => this.showname()} />
                        <input type="text" value={this.state.nameOfFile} onChange={() => this.showname()} disabled placeholder='آپلود مقاله'/>
                    </div>
                    {/* <button type='submit' className='nextButton' onClick={()=> this.handleChange()}>مرحله بعد</button> */}
                    <Link to='/articleLandingPage/' className='nextButton' onClick={()=> this.handleChange()}>پرداخت</Link>
                </div>
                
            </div>
        )   
}
    
}