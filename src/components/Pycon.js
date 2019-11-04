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


import React, { Component } from "react"
import NavbarContainer from "../container/NavbarContainer"
import HomeSectionContainer from '../container/HomeSectionContainer'
import { FaSection, EngSection } from './mutliLang'


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarContainer />
        <HomeSectionContainer
          id='section2'
        />
        {!this.props.en &&
          <FaSection />
        }
        {this.props.en &&
          <EngSection />

        }

      </div>
    );
  }
}

export default App
