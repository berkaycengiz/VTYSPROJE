const form = document.getElementById("form");

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let username = document.getElementById("usernameid");
    let password = document.getElementById("passwordid");
    axios.post('', {
        username: username.value,
        password: password.value,
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
})
