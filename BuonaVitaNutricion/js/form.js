var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  var form = document.querySelector("#form-adicionar");

  var tabla = document.querySelector("#tabla-pacientes");

  var paciente = capturarDatosPaciente(form);
  console.log(paciente);

  pacienteTr = document.createElement("tr");
  nombreTd = document.createElement("td");
  alturaTd = document.createElement("td");
  pesoTd = document.createElement("td");
  gorduraTd = document.createElement("td");
  imcTd = document.createElement("td");

  nombreTd.textContent = paciente.nombre;
  alturaTd.textContent = paciente.altura;
  pesoTd.textContent = paciente.peso;
  gorduraTd.textContent = paciente.gordura;
  imcTd.textContent = paciente.imc;

  pacienteTr.appendChild(nombreTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  tabla.appendChild(pacienteTr);

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
});
