document.querySelector('button').addEventListener('click', function () {
    var file = document.getElementById('file').files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function () {
        console.log(reader.result);
        divtext.innerHTML = reader.result;
        divsrc.innerHTML = file.location;
    }
    reader.onerror = function () {
        console.log(reader.error);
    }
}
)