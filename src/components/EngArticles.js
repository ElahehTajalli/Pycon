import React from 'react'
import TextField from '@material-ui/core/TextField';
import logo from '../photos/signUpLogo.svg'
import { getInformationArticle } from '../action/Pycon'
import { Link  } from 'react-router-dom'
import AttachmentIcon from '@material-ui/icons/Attachment';
import { EngSignUpNavbar } from './mutliLang';



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
                <EngSignUpNavbar />
                <img src={logo}/>
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
                         <TextField
                            // id="outlined-email-input"
                            label="Last Name"
                            type="text"
                            name="lastname"
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
                                label="Phone Number"
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
                        <input type="text" value={this.state.nameOfFile} onChange={() => this.showname()} disabled placeholder='Upload Article'/>
                    </div>
                    <Link to='/enArticleLandingPage/' className='nextButton' onClick={()=> this.handleChange()}>Pay</Link>
                </div>
                
            </div>
        )   
}
    
}