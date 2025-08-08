// -----Regular Expression Code-----
document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('organization-title');

    const re = /^[A-Za-z\s-]{7,}$/;

    input.addEventListener('input', function () {
        if (re.test(input.value)) {
            input.style.border = '4px solid green';
        } else {
            input.style.border = '4px solid red';
        }
    });
});

function setTimestamp() {
    const now = new Date().toLocaleString();

    document.getElementById('timestamp').value = now;
}