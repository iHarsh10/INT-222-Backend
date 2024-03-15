let users = []; 


document.getElementById("form").addEventListener("submit", function(event) {

  event.preventDefault();
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  if (users.length >= 5) {
    alert("User limit exceeded");
    return;
  }
});

