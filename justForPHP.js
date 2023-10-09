document.getElementById("runPHPButton").addEventListener("click", function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "testing.php", true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var resultContainer = document.getElementById("resultContainer");
            resultContainer.innerHTML = xhr.responseText;
        }
    };

    xhr.send();
});