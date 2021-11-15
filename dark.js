const $html = document.querySelector('html')
const $checkbox = document.querySelector('#switch')

$checkbox.addEventListener('change', function() {
$html.classList.toogle('dark-mode')
})