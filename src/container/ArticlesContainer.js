import { connect } from 'react-redux'
import Article from '../components/Articles'

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})

export default connect(mapDispatchToProps)(Article)
