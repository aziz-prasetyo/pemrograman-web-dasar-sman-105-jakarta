const h1 = document.querySelector('h1');
h1.style.cursor = 'pointer';

let toggled = false;

h1.addEventListener('click', function() {
    toggled = !toggled;
    if (toggled) {
        h1.style.backgroundColor = '#4caf50';
        h1.style.color = '#fff';
    } else {
        h1.style.backgroundColor = 'aliceblue';
        h1.style.color = '';
    }
});
