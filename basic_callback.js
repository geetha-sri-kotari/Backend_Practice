function getUserDetails(id, getUserSubjects) {
    console.log("Getting user details with id ", id);
    getUserSubjects({userRollNo : "7"})
};
function getUserSubjects(userRollNo, getUserMarks) {
    console.log("Getting marks of user with roll number ", userRollNo);
    getUserMarks({subId : "mat"})
};
function getUserMarks(subId) {
    console.log("Getting marks with subject id ", subId)
    console.log("100 / 100")
};
getUserDetails("77", function (userRollNo) {
    getUserSubjects(userRollNo, function (subId) {
        getUserMarks(subId)
    })
});