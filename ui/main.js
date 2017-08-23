
// submit username/password to login
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
  // create a request object
  var request = new XMLHttpRequest();
  request.onreadystatechange = function(){
    if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
            console.log('user logged in');
            alert('Logged in successfully');
        } else if (request.status === 403){
            alert('Username/password is incorrect');
        } else if (request.status === 403){
            alert('Something went wrong on the server');
        }    
    }
    // Not done yet
  };

    // Make the request
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST', 'http://shivaothers.imad.hasura-app.io/login', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify({"username":username, "password": password}));
};
