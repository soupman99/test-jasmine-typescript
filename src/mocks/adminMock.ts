const mockFbAdmin = jasmine.createSpyObj('admin', ['auth', 'verifyIdToken', 'then', 'catch']);
mockFbAdmin.auth.and.returnValue(mockFbAdmin);
mockFbAdmin.verifyIdToken.and.returnValue(mockFbAdmin); 
mockFbAdmin.then.and.returnValue(mockFbAdmin); 
mockFbAdmin.catch.and.returnValue(mockFbAdmin); 

module.exports = mockFbAdmin;