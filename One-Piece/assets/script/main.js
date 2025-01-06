window.onload = function() {
    var toggleButton = document.getElementById('toggleButton');
    var body = document.body;

    toggleButton.onclick = function() {
        body.classList.toggle('night-mode');
        if (body.classList.contains('night-mode')) {
            toggleButton.innerText = 'Day Mode';
        } else {
            toggleButton.innerText = 'Night Mode';
        }
    };
};
