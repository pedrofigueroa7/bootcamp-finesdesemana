function mostrar(){
  var archivo = document.getElementById("file").files[0];
  var reader = new FileReader();
  if (file) {
    reader.readAsDataURL(archivo );
    reader.onloadend = function () {
      document.getElementById("img").src = reader.result;
     
    }
  }
}
function mostrarText(){
  var titulo = document.getElementById("titulo").value
  document.getElementById("card title").innerHTML=titulo
}
function mostrarParrafo(){
  var parrafo = document.getElementById("parrafo").value
  document.getElementById("card parrafo").innerHTML=parrafo
}
