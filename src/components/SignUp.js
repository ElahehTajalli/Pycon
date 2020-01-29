import TextField from '@material-ui/core/TextField';
import logo from '../photos/signUpLogo.svg'
import Slide from '@material-ui/core/Slide'
import { getInformation } from '../action/Pycon'
import { FaSignUpNavbar } from './mutliLang'
import axios from 'axios'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from "react-redux";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import { Link as LinkTo } from 'react-router-dom'




const useStyles = makeStyles(theme => ({
    formControl: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(1),
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),

    },
  }));

export default function SignUp(){
    const classes = useStyles();
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const handleChanges = event => {
        setParticipant(event.target.value);
    };
    const dispatch = useDispatch();
    const [checked, setChecked] = useState(false);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [eng_firstname, setEng_firstname] = useState('');
    const [eng_lastname, setEng_lastname] = useState('');
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [phone, setPhone] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [address, setAddress] = useState('');
    const [username, setUsername] = useState('');
    const [participant, setParticipant] = useState('');
    const [workplaceName, setWorkPlaceName] = useState('');
    const [workplacePhone, setWorkPlacePhone] = useState('');
    const [uniName, setUniName] = useState('');
    const [studentId, setStudentId] = useState('');
    const [signup, setSignup] = useState(true);
    const [postReq, setPostReq] = useState(true);
    const [state, setState] = useState({
        checkedA: true,
        checkedB: true,
      });
    const [errors, setErrors] = useState(
        {
        name_fa: '',
        username: '',
        name_en: '',
        codemli: '',
        phonenum: '',
        address: '',
        postalcode: '',
        email: '',
        type: '',
        lastname_fa: '',
        lastname_en: '',
        fday:'',
        sday: '',
        workplace_name: '',
        workplace_num: '',
        student_id: ''
    });

  
    const setJobChange = (event) => {
      setParticipant(event.target.value);
    }



    const checkBox = name => event => {
        setState({ ...state, [name]: event.target.checked });
      };

    const changeReq = () => {
        setPostReq(true)
    }

    const editProfile = () => {
        setSignup(true)
        axios.put('http://192.168.1.101:8000/user/registerIran/', {

            })
            .then((response) => {

            })
            .catch((error) => {

            })     
    }  


    const handleChange = () => {
        // setErrors(errors)
        // setChecked(!checked);
        // setSignup(false)
        // dispatch((getInformation(firstname, lastname, eng_firstname
        // ,eng_lastname, email, code ,phone, postalCode, address, uniName, studentId, workplaceName, workplacePhone)))
        if (postReq) {
        axios.post('http://94.182.191.147/api/user/registerIran/', {
            name_fa: firstname,
            username: username,
            name_en: eng_firstname,
            codemli: code,
            phonenum: phone,
            address: address,
            postalcode: postalCode,
            email: email,
            type: participant,
            lastname_fa: lastname,
            lastname_en: eng_lastname,
            fday:state.checkedA,
            sday: state.checkedB,
            workplace_name: workplaceName,
            workplace_num: workplacePhone,
            student_id: studentId
            })
            .then((response) => {
                const errors = {
                    name_fa: '',
                    username: '',
                    name_en: '',
                    codemli: '',
                    phonenum: '',
                    address: '',
                    postalcode: '',
                    email: '',
                    type: '',
                    lastname_fa: '',
                    lastname_en: '',
                    fday:'',
                    sday: '',
                    workplace_name: '',
                    workplace_num: '',
                    student_id: ''
                }
                console.log(response)
                console.log(response.headers)
                setErrors(errors)
                setChecked(!checked);
                setSignup(false)
                setPostReq(false)
                dispatch((getInformation(firstname, lastname, eng_firstname
                ,eng_lastname, email, code ,phone, postalCode, address, uniName, studentId, workplaceName, workplacePhone)))
            })
            .catch((error) => {
                let name_fa= ''
                let username= ''
                let name_en= ''
                let codemli= ''
                let phonenum= ''
                let address= ''
                let postalcode= ''
                let email= ''
                let type= ''
                let lastname_fa= ''
                let lastname_en= ''
                let fday=''
                let sday= ''
                let workplace_name= ''
                let workplace_num= ''
                let student_id= ''
                if (error.response.data.username !== undefined) {
                    username = error.response.data.username[0]
                }
                if (error.response.data.email !== undefined) {
                    email = error.response.data.email[0]
                }
                if (error.response.data.phonenum !== undefined) {
                    phonenum = error.response.data.phonenum[0]
                }
                if (error.response.data.postalcode !== undefined) {
                    postalcode = error.response.data.postalcode[0]
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
                if (error.response.data.address !== undefined) {
                    address = error.response.data.address[0]
                }
                if (error.response.data.error !== undefined) {
                    type = error.response.data.error
                }
                if (error.response.data.lastname_fa !== undefined) {
                    lastname_fa = error.response.data.lastname_fa[0]
                }
                if (error.response.data.lastname_en !== undefined) {
                    lastname_en = error.response.data.lastname_en[0]
                }
                if (error.response.data.fday !== undefined) {
                    fday = error.response.data.fday[0]
                }
                if (error.response.data.sday !== undefined) {
                    sday = error.response.data.sday[0]
                }
                if (error.response.data.workplace_name !== undefined) {
                    workplace_name = error.response.data.workplace_name[0]
                }
                if (error.response.data.workplace_num !== undefined) {
                    workplace_num = error.response.data.workplace_num[0]
                }
                if (error.response.data.student_id !== undefined) {
                    student_id = error.response.data.student_id[0]
                }
                const errors = {
                    name_fa: name_fa,
                    username: username,
                    name_en: name_en,
                    codemli: codemli,
                    phonenum: phonenum,
                    address: address,
                    postalcode: postalcode,
                    email: email,
                    type: type,
                    lastname_fa: lastname_fa,
                    lastname_en: lastname_en,
                    fday:fday,
                    sday: sday,
                    workplace_name: workplace_name,
                    workplace_num: workplace_num,
                    student_id: student_id
                }
                setErrors(errors)
                console.log({errors})
            })  
        } else {
            axios.put('http://94.182.191.147/api/user/registerIran/', {
            name_fa: firstname,
            username: username,
            name_en: eng_firstname,
            codemli: code,
            phonenum: phone,
            address: address,
            postalcode: postalCode,
            email: email,
            type: participant,
            lastname_fa: lastname,
            lastname_en: eng_lastname,
            fday:state.checkedA,
            sday: state.checkedB,
            workplace_name: workplaceName,
            workplace_num: workplacePhone,
            student_id: studentId
            })
            .then((response) => {
                const errors = {
                    name_fa: '',
                    username: '',
                    name_en: '',
                    codemli: '',
                    phonenum: '',
                    address: '',
                    postalcode: '',
                    email: '',
                    type: '',
                    lastname_fa: '',
                    lastname_en: '',
                    fday:'',
                    sday: '',
                    workplace_name: '',
                    workplace_num: '',
                    student_id: ''
                }
                setErrors(errors)
                setChecked(!checked);
                setSignup(false)
                setPostReq(false)
                dispatch((getInformation(firstname, lastname, eng_firstname
                ,eng_lastname, email, code ,phone, postalCode, address, uniName, studentId, workplaceName, workplacePhone)))
            })
            .catch((error) => {
                let name_fa= ''
                let username= ''
                let name_en= ''
                let codemli= ''
                let phonenum= ''
                let address= ''
                let postalcode= ''
                let email= ''
                let type= ''
                let lastname_fa= ''
                let lastname_en= ''
                let fday=''
                let sday= ''
                let workplace_name= ''
                let workplace_num= ''
                let student_id= ''
                if (error.response.data.username !== undefined) {
                    username = error.response.data.username[0]
                }
                if (error.response.data.email !== undefined) {
                    email = error.response.data.email[0]
                }
                if (error.response.data.phonenum !== undefined) {
                    phonenum = error.response.data.phonenum[0]
                }
                if (error.response.data.postalcode !== undefined) {
                    postalcode = error.response.data.postalcode[0]
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
                if (error.response.data.address !== undefined) {
                    address = error.response.data.address[0]
                }
                if (error.response.data.error !== undefined) {
                    type = error.response.data.error
                }
                if (error.response.data.lastname_fa !== undefined) {
                    lastname_fa = error.response.data.lastname_fa[0]
                }
                if (error.response.data.lastname_en !== undefined) {
                    lastname_en = error.response.data.lastname_en[0]
                }
                if (error.response.data.fday !== undefined) {
                    fday = error.response.data.fday[0]
                }
                if (error.response.data.sday !== undefined) {
                    sday = error.response.data.sday[0]
                }
                if (error.response.data.workplace_name !== undefined) {
                    workplace_name = error.response.data.workplace_name[0]
                }
                if (error.response.data.workplace_num !== undefined) {
                    workplace_num = error.response.data.workplace_num[0]
                }
                if (error.response.data.student_id !== undefined) {
                    student_id = error.response.data.student_id[0]
                }
                const errors = {
                    name_fa: name_fa,
                    username: username,
                    name_en: name_en,
                    codemli: codemli,
                    phonenum: phonenum,
                    address: address,
                    postalcode: postalcode,
                    email: email,
                    type: type,
                    lastname_fa: lastname_fa,
                    lastname_en: lastname_en,
                    fday:fday,
                    sday: sday,
                    workplace_name: workplace_name,
                    workplace_num: workplace_num,
                    student_id: student_id
                }
                setErrors(errors)
                console.log({errors})
            })
        }   
    }
        return (
            <div className='signUpDiv'>
                {/* <div className='signUpLogo'/> */}
                <FaSignUpNavbar />
                <img src={logo}/>
                {signup &&
                    <>
                        <h1>ثبت نام</h1>
                        <div className='infoDiv'>
                            <div className='nameDiv'>
                                <div>
                                    <TextField
                                        label="نام خانوادگی"
                                        type="text"
                                        name="lastname"
                                        margin="normal"
                                        variant="outlined"
                                        value={lastname}
                                        InputLabelProps={{
                                            style: {
                                                fontFamily: 'Vazir'
                                            },
                                        }}
                                        onChange={(e)=> setLastname(e.target.value)}
        
                                    />
                                    { errors.lastname_fa && 
                                        <p className='errors'>{errors.lastname_fa}</p>
                                    }
                                    { errors.name_fa && !errors.lastname_fa &&
                                        <p className='errorss'>{errors.name_fa}</p>
                                    }
                                    </div>
                                <div>
                                    <TextField
                                        label="نام"
                                        type="text"
                                        name="firstname"
                                        margin="normal"
                                        variant="outlined"
                                        value={firstname}
                                        InputLabelProps={{
                                            style: {
                                                fontFamily: 'Vazir'
                                            },
                                        }}
                                        onChange={(e)=> setFirstname(e.target.value)}
        
                                    />
                                    { errors.name_fa &&
                                        <p className='errors'>{errors.name_fa}</p>
                                    }
                                </div>
                            </div>
                            <div className='nameDiv'>
                                <div>
                                    <TextField
                                        label="First Name"
                                        type="text"
                                        name="eng_firstname"
                                        margin="normal"
                                        variant="outlined"
                                        value={eng_firstname}
                                        InputLabelProps={{
                                            style: {
                                                fontFamily: 'Vazir'
                                            },
                                        }}
                                        onChange={(e)=> setEng_firstname(e.target.value)}
        
                                    />
                                    { errors.name_en &&
                                    <p className='errors'>{errors.name_en}</p>
                                    }
                                </div>
                                <div>
                                    <TextField
                                        label="Last Name"
                                        type="text"
                                        name="eng_lastname"
                                        margin="normal"
                                        variant="outlined"
                                        value={eng_lastname}
                                        InputLabelProps={{
                                            style: {
                                                fontFamily: 'Vazir'
                                            },
                                        }}
                                        onChange={(e)=> setEng_lastname(e.target.value)}
        
                                    />
                                    { errors.lastname_en &&
                                        <p className='errors'>{errors.lastname_en}</p>
                                    }
                                    { errors.name_en && !errors.lastname_en &&
                                        <p className='errorss'>{errors.name_en}</p>
                                    }
                                </div>
                            </div>
                            <div className='otherInfoDiv'>
                                <TextField
                                    label="نام کاربری"
                                    type="text"
                                    name="username"
                                    margin="normal"
                                    variant="outlined"
                                    value={username}
                                    InputLabelProps={{
                                        style: {
                                            fontFamily: 'Vazir'
                                        },
                                    }}
                                    onChange={(e)=> setUsername(e.target.value)}
                                />
                                { errors.username &&
                                    <p className='errors'>{errors.username}</p>
                                }
                                <TextField
                                    label="Email"
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                                    margin="normal"
                                    variant="outlined"
                                    value={email}
                                    InputLabelProps={{
                                        style: {
                                            fontFamily: 'Vazir'
                                        },
                                    }}
                                    onChange={(e)=> setEmail(e.target.value)}
        
                                />
                                { errors.email &&
                                    <p className='errors'>{errors.email}</p>
                                }
                                <TextField
                                    label="کد ملی"
                                    type="text"
                                    name="code"
                                    margin="normal"
                                    variant="outlined"
                                    value={code}
                                    InputLabelProps={{
                                        style: {
                                            fontFamily: 'Vazir'
                                        },
                                    }}
                                    onChange={(e)=> setCode(e.target.value)}
        
                                />
                                { errors.codemli &&
                                    <p className='errors'>{errors.codemli}</p>
                                }
                                <TextField
                                    label="شماره تماس"
                                    type="tel"
                                    name="phone"
                                    margin="normal"
                                    variant="outlined"
                                    value={phone}
                                    InputLabelProps={{
                                        style: {
                                            fontFamily: 'Vazir'
                                        },
                                    }}
                                    onChange={(e)=> setPhone(e.target.value)}
        
                                />
                                { errors.phonenum &&
                                    <p className='errors'>{errors.phonenum}</p>
                                }
                                <TextField
                                    label="کد پستی"
                                    type="text"
                                    name="postalCode"
                                    margin="normal"
                                    value={postalCode}
                                    variant="outlined"
                                    InputLabelProps={{
                                        style: {
                                            fontFamily: 'Vazir',
                                        },
                                    }}
                                    onChange={(e)=> setPostalCode(e.target.value)}
        
                                />
                                { errors.postalcode &&
                                    <p className='errors'>{errors.postalcode}</p>
                                }
                                <TextField
                                    id="outlined-dense-multiline"
                                    name='address'
                                    label="آدرس محل سکونت"
                                    margin="dense"
                                    variant="outlined"
                                    multiline
                                    rowsMax="4"
                                    value={address}
                                    InputLabelProps={{
                                        style: {
                                            fontFamily: 'Vazir'
                                        },
                                    }}
                                    onChange={(e)=> setAddress(e.target.value)}
                                />
                                { errors.address &&
                                    <p className='errors'>{errors.address}</p>
                                }
                                <FormControl variant="outlined" className={classes.formControl}>
                                    <InputLabel style={{fontFamily: 'Vazir'}} ref={inputLabel} id="demo-simple-select-outlined-label">
                                    نوع شرکت کننده
                                    </InputLabel>
                                    <Select
                                    labelid="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={participant}
                                    onChange={handleChanges}
                                    labelWidth={labelWidth}
                                    >
                                        <MenuItem
                                            value={0}
                                            onChange={()=> setParticipant(0)}
                                            style={{fontFamily: 'Vazir'}}>شرکت گنندگان آزاد</MenuItem>
                                        <MenuItem
                                            value={1}
                                            onChange={()=> setParticipant(1)}
                                            style={{fontFamily: 'Vazir'}}>سازمان ها و شرکت ها</MenuItem>
                                        <MenuItem
                                            value={2}
                                            onChange={()=> setParticipant(2)}
                                            style={{fontFamily: 'Vazir'}}>دانشجویان دانشگاه ها</MenuItem>
                                    </Select>
                                </FormControl>
                                { errors.type &&
                                    <p className='errors'>{errors.type}</p>
                                }
                                {participant==2 &&
                                    <>
                                        <TextField
                                        id="outlined-email-input"
                                        label="نام دانشگاه"
                                        type="text"
                                        margin="normal"
                                        variant="outlined"
                                        value={uniName}
                                        InputLabelProps={{
                                            style: {
                                                fontFamily: 'Vazir',
                                            },
                                        }}
                                        onChange={(e)=> setUniName(e.target.value)}
                                        />
                                        { errors.workplace_name &&
                                            <p className='errors'>{errors.workplace_name}</p>
                                        }
                                        <TextField
                                        label="شماره دانشجویی"
                                        type="text"
                                        margin="normal"
                                        variant="outlined"
                                        value={studentId}
                                        InputLabelProps={{
                                            style: {
                                                fontFamily: 'Vazir',
                                            },
                                        }}
                                        onChange={(e)=> setStudentId(e.target.value)}
                                        />
                                        { errors.student_id &&
                                            <p className='errors'>{errors.student_id}</p>
                                        }
                                    </>
                                }
                                {participant==1 &&
                                    <>
                                        <TextField
                                        id="outlined-email-input"
                                        label="نام شرکت"
                                        type="text"
                                        margin="normal"
                                        variant="outlined"
                                        value={workplaceName}
                                        InputLabelProps={{
                                            style: {
                                                fontFamily: 'Vazir',
                                            },
                                        }}
                                        onChange={(e)=> setWorkPlaceName(e.target.value)}
                                        />
                                        { errors.workplace_name &&
                                            <p className='errors'>{errors.workplace_name}</p>
                                        }
                                        <TextField
                                        label="شماره تلفن شرکت"
                                        type="phone"
                                        margin="normal"
                                        variant="outlined"
                                        value={workplacePhone}
                                        InputLabelProps={{
                                            style: {
                                                fontFamily: 'Vazir',
                                            },
                                        }}
                                        onChange={(e)=> setWorkPlacePhone(e.target.value)}
                                        />
                                        { errors.workplace_num &&
                                            <p className='errors'>{errors.workplace_num}</p>
                                        }
                                    </>
                                }
                            </div>
                            <div className='program'>
                                <p style={{fontSize: '18px'}}><b>:شرکت در </b></p>
                                <FormGroup row>
                                    <FormControlLabel
                                        control={
                                        <Checkbox
                                            checked={state.checkedB}
                                            onChange={checkBox('checkedB')}
                                            value="checkedB"
                                            color="primary"
                                        />
                                        }
                                        label="روز دوم"
                                    />  
                                    <FormControlLabel
                                        control={
                                        <Checkbox
                                            checked={state.checkedA}
                                            onChange={checkBox('checkedA')}
                                            value="checkedA"
                                            color="primary"
                                        />
                                        }
                                        label="روز اول"
                                    />
                                </FormGroup>
                            </div>
                            <a className='programLink' target='_blank' href="/#section5">جهت مشاهده برنامه اینجا کلیک کنید *</a>
                            <button type='submit' className='nextButton' onClick={()=> handleChange()}>مرحله بعد</button>
                        </div>
                    </>
                }
                {!signup &&
                <>
                <h1 style={{justifyContent:'center', display:'flex'}}>تایید اطلاعات </h1>
                <div className='confirmDiv'>
                    <p><b>نام و نام خانوادگی :</b>     {firstname} {lastname}</p>
                    <p>{eng_firstname} {eng_lastname}     <b>: نام و نام خانوادگی به زبان لاتین </b></p>
                    <p>{email}    <b> : ایمیل</b></p>
                    <p>{code}     <b>: کد ملی</b></p>
                    <p>{phone}     <b>: شماره تماس</b></p>
                    <p>{postalCode}     <b>: کد پستی</b></p>
                    {participant==1 &&
                        <>
                            <p>{workplaceName}     <b>: نام شرکت</b></p>
                            <p>{workplacePhone}     <b>: شماره تلفن شرکت</b></p>
                        </>
                    }
                    {participant==2 &&
                        <>
                            <p>{uniName}     <b>: نام دانشگاه</b></p>
                            <p>{studentId}     <b>: شماره دانشجویی </b></p>
                        </>
                    }
                    <div className='addressDiv'>
                        <b>: آدرس محل سکونت</b>
                        <span style={{textAlign: 'center'}}>{address}</span>
                    </div>

                    <div className='buttonDiv'>
                        {/* <button type='submit' className='confirmPayButton confirmButton' onClick={() => this.handlePage()}>پرداخت</button> */}
                        <LinkTo to='/landingPage/' className='confirmPayButton confirmButton' onClick={()=>changeReq()}>ثبت نام</LinkTo>
                        <button type='submit' className='confirmButton' onClick={()=>editProfile()}>مرحله قبل</button>
                    </div>


                </div> 
                </>
                }

                
            </div>
        )
    }
