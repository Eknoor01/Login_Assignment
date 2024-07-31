function authentication() {
    alert("Hello there! Please add your valid credentials.");
    var loc=prompt("Enter yor location Choose from Har,Chdor Himachal");
    if(loc=='Har'|| loc=='Chd' || loc=='Himachal'){
        var userName = prompt("Enter your username");
        var password = prompt("Enter your password");
        if (userName == 'ABC' && password === '1234') {
            alert("Welcome, " + userName + "!");
            window.location.href = "signin.html"; 
        } else {
            alert("Invalid username or password. Please try again.");
        }

    }else{
        alert("We done operate in your state");
    }
    
}
