let auth = require("./auth");

export const checkAuthorization = ()=>{
   return auth.isAuthorized()
   
}