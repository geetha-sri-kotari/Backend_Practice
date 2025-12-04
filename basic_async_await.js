function getUserDetails (id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({userRollNo: '7'})
        }, 2000);
    })
};
function getUserSubjects (userRollNo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({userSubId: 'mat'});
        }, 2000);
    })
};
function getUserMarks  (userSubId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({marks : '100/100'})
        }, 2000);
    })
};

const myFun = async() => {
    console.log("hello");
    const res1 = await getUserDetails("123");
    console.log("User roll number : ", res1.userRollNo);
    const res2 = await getUserSubjects(res1);
    console.log("user fav subject : ", res2.userSubId);
    const res3 = await getUserMarks(res2);
    console.log("marks : ", res3.marks);
}

myFun();