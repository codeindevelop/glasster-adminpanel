import {combineReducers} from 'redux'
import {login} from './loginReducer'
import {register} from './registerReducers'
import {forgotPassword} from './forgotpassReducer'
import {otpReducer} from './otpReducer'
import {profileReducer} from './profileReducer'

const authReducers = combineReducers({
  user: profileReducer,
  otp: otpReducer,
  login,
  register,
  forgotPassword,
})

export default authReducers
