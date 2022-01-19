var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  var form = document.querySelector("#form-adicionar");
  var paciente = capturarDatosPaciente(form);
  var pacienteTr = crearPacienteTr(paciente);

  var errores = validarPaciente(paciente);
  if (errores.length > 0) {
    mostrarMensajesErrores(errores);
    return;
  }

  var tabla = document.querySelector("#tabla-pacientes");
  tabla.appendChild(pacienteTr);
  form.reset();

  var mensajesErrores = document.querySelector("#mensajes-errores");
  mensajesErrores.innerHTML = "";
});

function capturarDatosPaciente(form) {
  var paciente = {
    nombre: form.nombre.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calcularIMC(form.peso.value, form.altura.value),
  };
  return paciente;
}

function crearPacienteTr(paciente) {
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(crearTd(paciente.nombre, "info-nombre"));
  pacienteTr.appendChild(crearTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(crearTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(crearTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(crearTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function crearTd(dato, clase) {
  var td = document.createElement("td");
  td.classList.add(clase);
  td.textContent = dato;
  return td;
}

function validarPaciente(paciente) {
  var errores = [];

  if (paciente.nombre.length == 0) {
    errores.push("Debe agregar un nombre al paciente");
  }
  if (paciente.peso.length == 0) {
    errores.push("Debe agregar un peso al paciente");
  }
  if (paciente.altura.length == 0) {
    errores.push("Debe agregar una altura al paciente");
  }
  if (paciente.gordura.length == 0) {
    errores.push("Debe agregar el % Gordura al paciente");
  }
  if (!validarPeso(paciente.peso)) {
    errores.push("El peso del paciente es incorrecto");
  }
  if (!validarAltura(paciente.altura)) {
    errores.push("La altura del paciente es incorrecta");
  }
  return errores;
}

function mostrarMensajesErrores(errores) {
  var ul = document.querySelector("#mensajes-errores");
  ul.innerHTML = "";

  errores.forEach(function (error) {
    var li = document.createElement("li");
    li.textContent = error;
    ul.appendChild(li);
  });
}
