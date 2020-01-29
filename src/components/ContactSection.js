import React, { Component } from "react"
import { Link, animateScroll as scroll } from "react-scroll"
import { EngContactSection, FaContactSection } from "./mutliLang"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';


export default class ContacteSection extends Component {
  constructor() {
    super ()

    this.state = {
      open1 : false,
      open2 : false,
      open3 : false,
      open4 : false,
      open5 : false
    }
  }

  handleClick1() {
    this.setState({open1: !this.state.open1, open2: false, open3: false, open4: false, open5: false});
  }

  handleClick2() {
    this.setState({open2: !this.state.open2, open1: false, open3: false, open4: false, open5: false});
  }

  handleClick3() {
    this.setState({open3: !this.state.open3, open1: false, open2: false, open4: false, open5: false});
  }

  handleClick4() {
    this.setState({open4: !this.state.open4, open1: false, open2: false, open3: false, open5: false});
  }

  handleClick5() {
    this.setState({open5: !this.state.open5, open1: false, open2: false, open3: false, open4: false});
  }



    render() {
        return (
            <div className={"section" + (this.props.dark ? " section-dark" : "")}>
              {this.props.en && 
                <div className="engSection-content" id={this.props.id}>
                   <h1>{this.props.title}</h1>
                    <div className='contactSection'>
                        <EngContactSection />
                    </div> 
                  </div>
              }
              {!this.props.en && 
                <div className="section-content" id={this.props.id}>
                   <h1>{this.props.title}</h1>
                    <div className='contactSection'>
                      <FaContactSection />
                    </div>
                    <ListItem className='question' button onClick={()=>this.handleClick1()}>
                        <ListItemText primary="تفاوت بین روز اول و دوم چیست؟" />
                    </ListItem>
                    <Collapse in={this.state.open1} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <ListItem className='answer'  button >
                          <ListItemText primary="در روز اول یک دوره آموزش سریع بر روی مفاهیم اولیه پایتون برای کسانی که می خواهند تازه با این زبان آشنا شوند برگزار می شوند البته کارگاه های تخصصی نیز در این روز برگزار می شود. ضمن تمامی این موارد تفاوت هزینه شرکت در همایش نیز برای روز اول و دوم متفاوت است.." />
                        </ListItem>
                      </List>
                    </Collapse>

                    <ListItem className='question' button onClick={()=>this.handleClick2()}>
                        <ListItemText primary="چطور می توانم شرکت کنم؟" />
                    </ListItem>
                    <Collapse in={this.state.open2} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <ListItem className='answer'  button >
                          <ListItemText primary="به دلیل محدودیت مکان، تخمین تعداد شرکت کنندگان جهت تامین امکانات سالن، کلاس ها و پذیرایی، برای شرکت در این کنفرانس نیاز است تا ابتدا ثبت نام کنید. برای ثبت نام از لینک های بالای صفحه استفاده کنید."/>
                        </ListItem>
                      </List>
                    </Collapse>

                    <ListItem className='question' button onClick={()=>this.handleClick3()}>
                        <ListItemText primary="چه طور می توانم جزو ارایه دهندگان همایش باشم؟" />
                    </ListItem>
                    <Collapse in={this.state.open3} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <ListItem className='answer'  button >
                          <ListItemText primary="مقاله شما توسط داوران بررسی شده و پس از آن می تواند به عنوان سخنرانی شفاهی ارایه شود. نتیجه ارسال شما بلافاصله پس از بررسی به شما اطلاع رسانی می شود."/>
                        </ListItem>
                      </List>
                    </Collapse>

                    <ListItem className='question' button onClick={()=>this.handleClick4()}>
                        <ListItemText primary="من به چه صورت هایی می توانم از تخفیف بهره مند شوم؟" />
                    </ListItem>
                    <Collapse in={this.state.open4} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <ListItem className='answer'  button >
                          <ListItemText primary="اگر دانشجو هستید می توانید از تخفیف دانشجویی ما () استفاده نمایید. البته ملزم به نوشتن شماره دانشجویی
                          و نام دانشگاه می باشد.
                          اگر از طرف سازمان یا شرکت خاصی شرکت می کنید در صورت هماهنگی شرکت با کمیته برگزاری همایش می توانید از تخفیف ویژه شرکت ها
                          و سازمان ها بهره مند شوید."/>
                        </ListItem>
                      </List>
                    </Collapse>

                    <ListItem className='question' button onClick={()=>this.handleClick5()}>
                        <ListItemText primary="با ثبت نام در همایش چه چیزهایی دریافت می کنم؟" />
                    </ListItem>
                    <Collapse in={this.state.open5} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <ListItem className='answer'  button >
                          <ListItemText primary="با ثبت نام کردن در این همایش شما در هنگام ثبت حضور خود یک کارت و یک آویز دریافت می کنید. در پایان
                          همایش نیز گواهی شرکت در همایش به صورت دو زبانه برای شما صادر می گردد.
                           کسانی که در بخش ارسال مقالات شرکت کرده اند در صورت گرفتن امتیاز لازم گواهی ارایه مقاله خود را به صورت دو زبانه دریافت می کنند. "/>
                        </ListItem>
                      </List>
                    </Collapse>
                  </div>
              }
            </div>
       
        )
    }
}