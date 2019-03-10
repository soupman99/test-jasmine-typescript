let admin = require('firebase-admin');


export const isAuthorized = ()=>{
    return 'Is Authorized';

}

export const getVerifiedUid = (idToken) => {
    return admin.auth()
    .verifyIdToken(idToken)
        .then((decodedToken)=> {
            return Promise.resolve(decodedToken.uid)
        }).catch( (error) =>{
            return Promise.reject(error)
        });
}