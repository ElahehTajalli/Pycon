import TextField from '@material-ui/core/TextField';
import logo from '../photos/signUpLogo.svg'
import ConfirmInfo from '../components/ConfirmInfo'
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
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
      });



    const [errors, setErrors] = useState(
        {username: '', 
        email: '', 
        phone:'',
        postalCode: '',
        code: '',
        name_fa: '',
        name_en: '',
        workplaceName: '',
        workplacePhone: '',
        uniName: '',
        studentId: '',
        participantType: ''
    });

  
    const setJobChange = (event) => {
      setParticipant(event.target.value);
    }

    const back = () => {
        setChecked(!checked)
    }

    const checkBox = name => event => {
        setState({ ...state, [name]: event.target.checked });
      };


    const handleChange = () => {
        setChecked(!checked);
        dispatch((getInformation(firstname, lastname, eng_firstname
        ,eng_lastname, email, code ,phone, postalCode, address, uniName, studentId, workplaceName, workplacePhone)))
        // axios.post('http://127.0.0.1:8000/user/registerIran/', {
        //     name_fa: {firstname},
        //     username: {username},
        //     name_en: {eng_firstname},
        //     codemli: {code},
        //     phonenum: {phone},
        //     address: {address},
        //     postalcode: {postalCode},
        //     email: {email},
        //     })
        //     .then((response) => {
        //         const errors = {
        //             username: '',
        //             email: '',
        //             phone: '',
        //             postalCode: '',
        //             code: '',
        //             name_fa: '',
        //             name_en: '',
        //             workplace: ''
        //         }
        //         setErrors(errors)
        //         setChecked(!this.state.checked)
        //         this.props.dispatch((getInformation({firstname}, {lastname}, {eng_firstname}
        //         ,{eng_lastname}, {email}, {code}, {work}
        //         ,{phone}, {postalCode}, {address})))
        //     })
        //     .catch((error) => {
        //         let username=''
        //         let email = ''
        //         let phone = ''
        //         let postalCode = ''
        //         let code = ''
        //         let name_fa = ''
        //         let name_en = ''
        //         let workplace = ''
        //         if (error.response.data.username !== undefined) {
        //             username = error.response.data.username[0]
        //         }
        //         if (error.response.data.email !== undefined) {
        //             email = error.response.data.email[0]
        //         }
        //         if (error.response.data.phonenum !== undefined) {
        //             phone = error.response.data.phonenum[0]
        //         }
        //         if (error.response.data.postalcode !== undefined) {
        //             postalCode = error.response.data.postalcode[0]
        //         }
        //         if (error.response.data.codemli !== undefined) {
        //             code = error.response.data.codemli[0]
        //         }
        //         if (error.response.data.name_fa !== undefined) {
        //             name_fa = error.response.data.name_fa[0]
        //         }
        //         if (error.response.data.name_en !== undefined) {
        //             name_en = error.response.data.name_en[0]
        //         }
        //         if (error.response.data.workplace !== undefined) {
        //             workplace = error.response.data.workplace[0]
        //         }
        //         const errors = {
        //             username: username,
        //             email: email,
        //             phone: phone,
        //             postalCode: postalCode,
        //             code: code,
        //             name_fa: name_fa,
        //             name_en: name_en,
        //             workplace: workplace
        //         }
        //         setErrors(errors)
        //         console.log({errors})
        //     })     
    }

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
                                onChange={(e)=> setLastname(e.target.value)}

                            />
                            { errors.name_fa &&
                                <p className='errorss'>{errors.name_fa}</p>
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
                                onChange={(e)=> setEng_firstname(e.target.value)}

                            />
                            { errors.name_en &&
                            <p className='errors'>{errors.name_en}</p>
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
                                onChange={(e)=> setEng_lastname(e.target.value)}

                            />
                            { errors.name_en &&
                                <p className='errorss'>{errors.name_en}</p>
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
                            onChange={(e)=> setUsername(e.target.value)}
                        />
                        { errors.username &&
                        <p className='errors'>{errors.username}</p>
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
                            onChange={(e)=> setEmail(e.target.value)}

                        />
                        { errors.email &&
                            <p className='errors'>{errors.email}</p>
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
                            onChange={(e)=> setCode(e.target.value)}

                        />
                        { errors.code &&
                            <p className='errors'>{errors.code}</p>
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
                            onChange={(e)=> setPhone(e.target.value)}

                        />
                        { errors.phone &&
                            <p className='errors'>{errors.phone}</p>
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
                            onChange={(e)=> setPostalCode(e.target.value)}

                        />
                        { errors.postalCode &&
                            <p className='errors'>{errors.postalCode}</p>
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
                            onChange={(e)=> setAddress(e.target.value)}
                        />
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel style={{fontFamily: 'Vazir'}} ref={inputLabel} id="demo-simple-select-outlined-label">
                            نوع شرکت کننده
                            </InputLabel>
                            <Select
                            labelId="demo-simple-select-outlined-label"
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
                        {participant==2 &&
                            <>
                                <TextField
                                id="outlined-email-input"
                                label="نام دانشگاه"
                                type="text"
                                margin="normal"
                                variant="outlined"
                                InputLabelProps={{
                                    style: {
                                        fontFamily: 'Vazir',
                                    },
                                }}
                                onChange={(e)=> setUniName(e.target.value)}
                                />
                                <TextField
                                label="شماره دانشجویی"
                                type="text"
                                margin="normal"
                                variant="outlined"
                                InputLabelProps={{
                                    style: {
                                        fontFamily: 'Vazir',
                                    },
                                }}
                                onChange={(e)=> setStudentId(e.target.value)}
                                />
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
                                InputLabelProps={{
                                    style: {
                                        fontFamily: 'Vazir',
                                    },
                                }}
                                onChange={(e)=> setWorkPlaceName(e.target.value)}
                                />
                                <TextField
                                label="شماره تلفن شرکت"
                                type="phone"
                                margin="normal"
                                variant="outlined"
                                InputLabelProps={{
                                    style: {
                                        fontFamily: 'Vazir',
                                    },
                                }}
                                onChange={(e)=> setWorkPlacePhone(e.target.value)}
                                />
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
                    <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
                        <ConfirmInfo
                            firstname={firstname}
                            lastname={lastname}
                            eng_firstname={eng_firstname}
                            eng_lastname={eng_lastname}
                            email={email}
                            code={code}
                            phone={phone}
                            postalCode={postalCode}
                            address={address}
                            uniName={uniName}
                            studentId={studentId}
                            workplaceName={workplaceName}
                            workplacePhone={workplacePhone}
                            participant={participant}
                            handleChange={()=>back()}
                        />
                    </Slide>
                </div>
                
            </div>
        )
                        }
