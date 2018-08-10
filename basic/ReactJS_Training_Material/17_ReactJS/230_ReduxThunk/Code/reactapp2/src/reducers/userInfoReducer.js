const userInfoReducer = (state = {
  data: '',
  error: '',
}, action) => {
  let newState;

  switch (action.type) {
  case 'FETCH_USER_SUCCESS':
    newState = {
        ...state,
        data: action.data,
        error: '',
      };
    return newState;

  case 'FETCH_USER_FAILURE':
    newState = {
        ...state,
        data: '',
        error: action.error,
      };
    return newState;

  default:
    return state;
  }
};

export default userInfoReducer;
