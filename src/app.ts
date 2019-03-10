import * as auth from './auth'

export const checkAuthorization = ()=>{
   return auth.isAuthorized()
   
}