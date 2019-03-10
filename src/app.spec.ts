// import * as app from './app'
let rewire = require("rewire");
let app = rewire("./app.ts");
let auth = rewire("./auth.ts");


describe('App Test', () => {
    beforeEach(()=>{
        app.__set__("auth", auth);   //reset so we don't get a failure

    })
    it(('should check for auth'), ()=>{
        //How do I rewire app.checkAuthorization so that I can fake different responses?
        expect(app.checkAuthorization()).toEqual('Is Authorized') 
    })
    describe('should mock the response', () => {
        beforeEach(()=>{ 
            app.__set__("auth", {
                isAuthorized:()=>{
                    return 'Is NOT Authorized';
                }   
            });
        })
        it(('should mock auth'), ()=>{
        
            //How do I rewire app.checkAuthorization so that I can fake different responses?
            expect(app.checkAuthorization()).toEqual('Is NOT Authorized')  
        })
    });

});