
function formReducer(state, action) {
  switch (action.type) {
    case 'set_email': {
      return {
        ...state,
        email: action.email,
        isEmailValid: action.email.includes('@'),
      }
    }
    case 'set_password': {
      return {
        ...state,
        password: action.password,
        isPasswordValid: action.password.trim().length > 7,
      }
    }
    default: {
      return state
    }
  }
}

export default formReducer
