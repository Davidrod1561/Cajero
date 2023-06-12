var cuentas = [
    { nombre: "Mali", saldo: 200 },
    { nombre: "Gera", saldo: 290 },
    { nombre: "Maui", saldo: 67 }
  ];
  
  var cuentaSeleccionada = null;
  
  function seleccionarCuenta() {
    var cuentaIndex = document.getElementById("cuentas").value;
    cuentaSeleccionada = cuentas[cuentaIndex];
  
    var password = document.getElementById("password").value;
    if (password === "1234") {
      document.getElementById("operaciones").style.display = "block";
    } else {
      alert("Contraseña incorrecta. Inténtalo nuevamente.");
    }
  }
  
  function consultarSaldo() {
    document.getElementById("saldo").innerText = "Saldo actual: $" + cuentaSeleccionada.saldo;
    document.getElementById("saldo").style.display = "block";
  }
  
  function ingresarMonto() {
    var monto = prompt("Ingrese el monto a ingresar:");
    monto = parseFloat(monto);
  
    if (isNaN(monto) || monto <= 0) {
      alert("Monto inválido.");
      return;
    }
  
    cuentaSeleccionada.saldo += monto;
    document.getElementById("mensaje").innerText = "Monto ingresado: $" + monto + "\nNuevo saldo: $" + cuentaSeleccionada.saldo;
    document.getElementById("mensaje").style.display = "block";
  }
  
  function retirarMonto() {
    var monto = prompt("Ingrese el monto a retirar:");
    monto = parseFloat(monto);
  
    if (isNaN(monto) || monto <= 0) {
      alert("Monto inválido.");
      return;
    }
  
    if (monto > cuentaSeleccionada.saldo || cuentaSeleccionada.saldo - monto < 10 || cuentaSeleccionada.saldo - monto > 990) {
      alert("No se puede retirar esa cantidad. Verifica tu saldo actual.");
      return;
    }
  
    cuentaSeleccionada.saldo -= monto;
    document.getElementById("mensaje").innerText = "Monto retirado: $" + monto + "\nNuevo saldo: $" + cuentaSeleccionada.saldo;
    document.getElementById("mensaje").style.display = "block";
  }
  