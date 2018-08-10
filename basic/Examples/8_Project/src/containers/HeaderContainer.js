import { connect } from "react-redux";

import Header from "../components/Header";
import { filterAction } from "../actions/todosActions";

function mapStateToProps(state, ownProps) {
  return {
    filter: state.filter,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    filterHandler: filter => {
      dispatch(filterAction(filter));
    },
  };
}

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

export default HeaderContainer;
