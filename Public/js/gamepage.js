
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
db.collection('PRODUCTION');
//DB collection changes week to week.  This allows for authentication of picks
const submission = document.getElementById('submission');

submission.addEventListener('submit',(e) => {
    e.preventDefault();
    let userId = `${submission.twitter.value.toLowerCase()}` + `${submission.week.value}`;
    db.collection("PRODUCTION").doc(userId).set({
        team : submission.teams.value,
        week : submission.week.value
        // twitter: submission.twitter.value.toLowerCase()
    })
    .then(function(){
        console.log("submission received!");
    let docRef = db.collection('PRODUCTION').doc(userId);
    

    docRef.get().then(function(doc) {
        if (doc.exists) {
            localStorage.setItem('currentUser',JSON.stringify(doc.data()));
            console.log('User Selection:', doc.data());
        } else {
            console.log('ERROR inputting user Selection');
        }
    })
    })
})



document.getElementById('submitButton').addEventListener('click', () => {
    document.querySelector('.submitModal').style.display = 'flex';
    document.querySelector('.body').addEventListener('click', () => {
        document.querySelector('.submitModal').style.display = 'none';
    })
})

//DISPLAY USER SELECTIONS ON SCREEN

const currentUser = localStorage.getItem('currentUser');
const currentUserObj = JSON.parse(currentUser);
var currentTeam = db.collection('PRODUCTION').doc(currentUserObj.team);
const currentPick = document.getElementById('currentPick');

currentPick.innerHTML = `<h5>Your Current Pick: ${JSON.stringify(currentUserObj.team)}</h5>`

const prevPicks = document.getElementById('prevPicks');
//list previous picks on screen

// const getPick = async() =>{
//     let response = await db.collection('PRODUCTION').doc(`${submission.twitter.value} + ${submission.week.value}`).get()
//     let data = await response
//     return data
// }
// let pick = getPick()
// console.log(pick)
// 
let docRef = db.collection("PRODUCTION").doc("rmntcbaseball");
console.log(docRef)

docRef.get().then((doc) => {
    if (doc.exists) {
        localStorage.setItem('pastPicks', JSON.stringify(doc.data()));
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

const pastPicks = localStorage.getItem('pastPicks');
const pastPicksObj = JSON.parse(pastPicks)
console.log(pastPicksObj)


prevPicks.innerHTML = `<li>Week ${pastPicksObj.week}: ${pastPicksObj.team}</li>`










