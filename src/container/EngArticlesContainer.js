import { connect } from 'react-redux'
import EngArticle from '../components/EngArticles'

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})

export default connect(mapDispatchToProps)(EngArticle)