import ArticleLandingPage from '../components/ArticleLandingPage'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    firstname: state.firstname,
    lastname: state.lastname,
    email: state.email,
})

export default connect(mapStateToProps)(ArticleLandingPage)