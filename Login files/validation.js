function validate() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email == "" || password == "") {
      alert("Por favor, ingrese su correo y contraseña.");
    } else {
      // Aquí se puede agregar código para validar el correo y la contraseña
      alert("Inicio de sesión exitoso.");
    }
  }
