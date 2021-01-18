
//AUTHENTICATION AND SIGN OUT
const signOutButton = document.getElementById('signOutButton');
const userDetails = document.getElementById('userDetails');

signOutButton.onclick = () => auth.signOut();

auth.onAuthStateChanged(user =>{
    if (user) {
        userDetails.innerHTML = `<h3>Welcome, ${user.displayName}!</h3>`;
    } else {
        window.location.href="index.html"
        auth.signOut();
    }
})

// TEAM SELECT FORM TO DATABASE
db.collection('TeamSelections');
const submission = document.getElementById('submission');

submission.addEventListener('submit',(e) => {
    e.preventDefault();
    let userId = `${submission.twitter.value}`;
    db.collection("TeamSelections").doc(userId).set({
        team : submission.teams.value,
        twitter: submission.twitter.value
    })
    .then(function(){
        console.log("submission received!");
    })
})








// USER DETAILS POPULATE ON PAGE