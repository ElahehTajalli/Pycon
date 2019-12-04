import React from 'react';
import './App.css';
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PyconContainer from './container/PyconContainer'
import SignUpContainer from './container/SignUpContainer'
// import ConfirmInformation from './components/ConfirmInfo'
import pycon from './reducer/Pycon'
import LandingPageContainer from './container/LandingPageContainer'
import ArticleContainer from './container/ArticlesContainer'
import EngArticleContainer from './container/EngArticlesContainer'
import ArticleLandingPageContainer from './container/ArticleLandingPageContainer'
import EngArticleLandingPageContainer from './container/EngArticleLandingPageContainer'
import EngSignUpContainer from './container/EngSignUpContainer'
import EngLandingPageContainer from './container/EngLandingPageContainer';



const store = createStore(pycon, applyMiddleware(logger))


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path='/' exact component={PyconContainer} />
        <Route path='/signUp/' exact component={SignUpContainer} />
        <Route path='/enSignUp/' exact component={EngSignUpContainer} />
        <Route path='/landingPage/' exact component={LandingPageContainer} />
        <Route path='/enLandingPage/' exact component={EngLandingPageContainer} />
        <Route path='/articles/' exact component={ArticleContainer} />
        <Route path='/enArticles/' exact component={EngArticleContainer} />
        <Route path='/articleLandingPage/' exact component={ArticleLandingPageContainer} />
        <Route path='/enArticleLandingPage/' exact component={EngArticleLandingPageContainer} />
        {/* <Route path='/confirm/' exact component={ConfirmInformation} /> */}
        {/* <Route path='/profile/' exact component={Profile} />
        <Route path='/messenger/' component={Messenger} /> */}
      </Router>
    </Provider>
  );
}

export default App



