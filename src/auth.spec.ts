
describe('Auth Test', () => {
    let rewire = require("rewire");
    let auth = rewire("./auth.ts");
    let mockFbAdmin = require('./mocks/adminMock');
    beforeEach(()=>{
        // mockFbAdmin = jasmine.createSpyObj('admin', ['auth', 'verifyIdToken']);
        // mockFbAdmin.auth.and.returnValue(mockFbAdmin);
        // mockFbAdmin.verifyIdToken.and.returnValue(mockFbAdmin); 


        auth.__set__("admin", mockFbAdmin);
    })

    it('should make sure admin.auth().verifyIdToken() is called', () => {
        let tokenId = 'blkjaoudasdf'
        let call = auth.getVerifiedUid(tokenId)
        expect(mockFbAdmin.verifyIdToken).toHaveBeenCalledWith(tokenId); 
        
    });


    
    it('should get the resolve UID', (done) => {
        let decodedUID = "iuawlkjnasdfk"
        mockFbAdmin.verifyIdToken.and.returnValue(Promise.resolve({uid:decodedUID}))

        let tokenId = 'blkjaoudasdf'
        let call = auth.getVerifiedUid(tokenId)
       
        call.then(res=>{
            expect(res).toEqual(decodedUID)
            done();
        })
      
        expect(mockFbAdmin.verifyIdToken).toHaveBeenCalledWith(tokenId);
        done();

    });

    it('should catch the rejection', (done) => {
        
        mockFbAdmin.verifyIdToken.and.returnValue(Promise.reject())

        let tokenId = 'blkjaoudasdf'
        let call = auth.getVerifiedUid(tokenId)
        call.catch(err=>{
            expect(err).toEqual('verifyIdToken Error')
            done();
        })
        expect(mockFbAdmin.verifyIdToken).toHaveBeenCalledWith(tokenId);

    });
    
 
});