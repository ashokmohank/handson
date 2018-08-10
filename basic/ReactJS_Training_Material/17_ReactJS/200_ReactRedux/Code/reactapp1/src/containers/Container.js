import { connect } from "react-redux";
import Presentational from "../components/Presentational";
import { decrementCounter } from "../actions";

function mapStateToProps(state, ownProps) {
  return {
    counter: state.counterReducer.counter,
    step: state.stepReducer.step,
    title: ownProps.pageheader,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    decrementCount: step => {
      dispatch(decrementCounter(step));
    },
    dispatch,
  };
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

export default Container;
