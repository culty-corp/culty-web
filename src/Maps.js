import {
    passarPost
  } from './actions'
  
  export const mapDispatchToProps = (dispatch) => {
    return {
      passarPost: () => dispatch(passarPost())
    }
  }