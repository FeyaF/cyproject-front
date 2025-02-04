const authUrl = "http://localhost:8080/users/auth"

const submitEmailAndPassword = () => {

    const email = $("#email").val();
    const password = $("#password").val();

    connectWithEmailAndPassword(email, password);
}

const connectWithEmailAndPassword = (email, password) => {
    $.ajax({
        url: `${authUrl}?email=${email}&password=${password}`,
        headers: {"Access-Control-Allow-Origin": "*"}
    }).done((payload) => {
        window.location.href = "./etudiant.html";
    },).fail(() => {
        alert("NOT OK !");
    })
}