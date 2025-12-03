// two states - 1. resolve 2. reject 
// api call (request) ->      <- response either success or error
// to handle promise use .then((result) => {  }) .catch((error) => {  })
// if(true) -> resolve if(false) -> reject


function getUserDetails (id) {
    return new Promise((resolve, reject) => {
        console.log("fun1 called")
        resolve({userRollNo: '7'})
    })
};
function getUserSubjects (userRollNo) {
    return new Promise((resolve, reject) => {
        console.log("fun2 called")
        resolve({userSubId: 'mat'});
    })
};
function getUserMarks  (userSubId) {
    return new Promise((resolve, reject) => {
        console.log("fun3 called")
        resolve("getting user marks with subject id ", userSubId)
    })
};

getUserDetails("123").then((result) => {
    return getUserSubjects(result.userRollNo)
}).then((result) => {
    return getUserMarks(result.userSubId)
}).then((result) => console.log(result))
  .catch((error) => console.log(error))