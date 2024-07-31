function authentication() {
    alert("Hello there! Please add your valid credentials.");
    var userName = prompt("Enter your username");
    var password = prompt("Enter your password");

    if (userName === 'ABC' && password === '1234') {
        alert("Welcome, " + userName + "!");
        window.location.href = "signin.html"; 
    } else {
        alert("Invalid username or password. Please try again.");
    }
}
