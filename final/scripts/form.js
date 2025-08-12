// -----Regular Expression Code-----
document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('feedback');

    const re = /^[A-Za-z\s-]{2,}$/;

    input.addEventListener('input', function () {
        if (re.test(input.value)) {
            input.style.border = '3px solid green';
        } else {
            input.style.border = '3px solid red';
        }
    });
});

// -----Timestamp-----
function setTimestamp() {
    const now = new Date().toLocaleString();

    document.getElementById('timestamp').value = now;
}
