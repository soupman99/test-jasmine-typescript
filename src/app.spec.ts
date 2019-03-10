import * as app from './app'

describe('App Test', () => {
    it(('should check for auth'), ()=>{
        //How do I rewire app.checkAuthorization so that I can fake different responses?
        expect(app.checkAuthorization()).toEqual('Is Authorized') 
    })
});