import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default class Header extends React.Component {

    constructor() {
        super ()

        this.state= {
            value: 9
        }
    }

    handleChange (event, newValue) {
        this.setState({value: newValue});
      };


    render () {
        return (
            <AppBar position='sticky' className='header'>
                <Tabs
                    value={this.state.value}
                    onChange={(event, value) => this.handleChange(event, value)}
                    variant="fullWidth"
                    indicatorColor="secondary"
                    textColor="secondary" 
                    aria-label="icon label tabs example"
                >
                    <Tab label="تماس با ما" />
                    <Tab label="حامیان" />
                    <Tab label="سوالات متداول" />
                    <Tab label="ارسال مقالات" />
                    <Tab label="برنامه روز دوم" />
                    <Tab label="برنامه روز اول" />
                    <Tab label="محور های همایش" />
                    <Tab label="درباره پایکان" />
                    <Tab label="خانه" />
                    <Tab label="ثبت نام" />

                </Tabs>
            </AppBar>
        )
    }
}