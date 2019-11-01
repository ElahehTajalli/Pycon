import React from 'react'
import { Link as LinkTo } from 'react-router-dom'




export default class SignUp extends React.Component {

    render () {
        return (
            <div className='mainConfirmDiv'>
                <h1 style={{justifyContent:'center', display:'flex'}}>تایید اطلاعات </h1>
                <div className='confirmDiv'>
                    <p><b>نام و نام خانوادگی :</b>     {this.props.firstname} {this.props.lastname}</p>
                    <p>{this.props.eng_firstname} {this.props.eng_lasttname}     <b>: نام و نام خانوادگی به زبان لاتین </b></p>
                    <p>{this.props.email}    <b> : ایمیل</b></p>
                    <p>{this.props.code}     <b>: کد ملی</b></p>
                    <p>{this.props.work}     <b>: محل کار یا تحصیل</b></p>
                    <p>{this.props.phone}     <b>: شماره تماس</b></p>
                    <p>{this.props.postalCode}     <b>: کد پستی</b></p>
                    <p style={{paddingBottom:'100px'}}><b>آدرس محل سکونت :</b>     {this.props.address}</p>
                    <div className='buttonDiv'>
                        {/* <button type='submit' className='confirmPayButton confirmButton' onClick={() => this.handlePage()}>پرداخت</button> */}
                        <LinkTo to='/landingPage/' className='confirmPayButton confirmButton'>ثبت نام</LinkTo>
                        <button type='submit' className='confirmButton'onClick={this.props.handleChange}>مرحله قبل</button>
                    </div>


                </div> 
                </div>
        )   
}
    
}