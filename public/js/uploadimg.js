let fileReader = document.getElementById("file");
let URI = document.getElementById("UriImg");
fileReader.onclick = function (e) {
  URI.value = e.target.result;
  console.log(fileReader.value);
};
