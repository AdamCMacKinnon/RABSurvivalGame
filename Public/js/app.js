

const googleButton = document.getElementById('GoogleButton');
const twitterButton = document.getElementById('TwitterButton');

var google = new firebase.auth.GoogleAuthProvider();
var twitter= new firebase.auth.TwitterAuthProvider();





twitterButton.onclick = () => auth.signInWithPopup(twitter);

auth.onAuthStateChanged(user =>{
    if (user){
    window.location.href="gamepage.html"
    }else {
        auth.signOut();
    }
})
