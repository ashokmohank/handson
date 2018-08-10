import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from '../components/Link';

/*
mapStateToProps(): This function tells how to transform the current Redux
store state into the props you want to pass to a presentational component
you are wrapping.

mapDispatchToProps(): This function receives the dispatch() method and
returns callback props that you want to inject into the presentational
component.
*/

// Pass property named 'active'
const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
});

// Pass property named 'onClick'
const mapDispatchToProps = (dispatch, ownProps) => ({
  onLinkClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter));
  },
});

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;
