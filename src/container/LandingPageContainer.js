import LandingPage from '../components/LandingPage'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    firstname: state.firstname,
    lastname: state.lastname,
    email: state.email,
})

export default connect(mapStateToProps)(LandingPage)