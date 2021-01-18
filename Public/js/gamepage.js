
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










// USER DETAILS POPULATE ON PAGE