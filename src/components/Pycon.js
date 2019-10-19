// import React from 'react'
// import './Pycon.css'
// import Header from './Header'

// export default class Pycon extends React.Component {
//     render () {
//         return (
//             <div className='mainDiv'>
//                 <Header />
//                 <div className='style'>
//                 درباره پایکان
// کنفرانس پایتون ایران یک رویداد منحصر به فرد در حوزه ی زبان برنامه نویسی پایتون است که هر ساله در دانشگاه علم و صنعت ایران برگزار می شود.در این رویداد علاقه‌مندان و متخصصان این زبان در یک روز گردهم می‌آیند تا دانش خود را با یکدیگر به اشتراک بگذارند.

// روز اول
// روز اول مخصوص تازه کاران است . افرادی که برنامه نویسی کار نکرده اند یا با پایتون اشنایی ندارند در کارگاه های روز اول شرکت میکنند. این کارگاه ها شامل یادگیری زبان برنامه نویسی پایتون و کاربرد های آن در سطح ساده است . بعد از شرکت در این کارگاه ها شرکت کنندگان تا سطح خوبی با زبان برنامه نویسی پایتون آشنا می شوند.

// روز دوم
// روز دوم مخصوص افراد با تجربه تر است . در این روز کارگاه هایی با موضوع کاربرد های پایتون در سطح بالاتر مانند کاربرد های هوش مصنوعی در پایتون تدریس خواهد شد. افرادی که در کارگاه های روز اول شرکت میکنند، میتوانند دانش لازم را برای شرکت در کارگاه های روز دوم را نیز بدست اورند و در کارگاه های مورد نظر خود شرکت کنند.



// </div> 
// <div className='divStyle'>
//             salam
// </div>         
// </div>
//         )
//     }
// }


import React, { Component } from "react";
import Navbar from "./Navbar";
import Section from "./Section";
import dummyText from "../DummyText";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Section
          title="ثبت نام"
          subtitle={dummyText}
          dark={true}
          id="section1"
        />
        <Section
          title="خانه"
          subtitle={dummyText}
          dark={false}
          id="section2"
        />
        <Section
          title="درباره پایکان"
          subtitle={dummyText}
          dark={true}
          id="section3"
        />
        <Section
          title="محور های همایش"
          subtitle={dummyText}
          dark={false}
          id="section4"
        />
        <Section
          title="برنامه روز اول"
          subtitle={dummyText}
          dark={true}
          id="section5"
        />
        <Section
          title="برنامه روز دوم"
          subtitle={dummyText}
          dark={false}
          id="section6"
        />
        <Section
          title="ارسال مقالات"
          subtitle={dummyText}
          dark={true}
          id="section7"
        />
        <Section
          title="سوالات متداول"
          subtitle={dummyText}
          dark={false}
          id="section8"
        />
        <Section
          title="حامیان"
          subtitle={dummyText}
          dark={true}
          id="section9"
        />
        <Section
          title="تماس با ما"
          subtitle={dummyText}
          dark={false}
          id="section10"
        />
      </div>
    );
  }
}

export default App;
