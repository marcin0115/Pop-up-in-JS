// JS
document.querySelector('.article button ').addEventListener('click', function() { 
    document.querySelector('.modal-wrap').classList.add('active');
    document.querySelector('.article').classList.add('blur'); 
})

document.querySelector('span.hide').addEventListener('click', function() {
    document.querySelector('.modal-wrap').classList.remove('active');
    document.querySelector('.article').classList.remove('blur'); 
})

/* jQuery:  
$('.article button, span.hide').on('click', function() {
    $('.modal-wrap').toggleClass('active');
    $('.article').toggleClass('blur');
})
*/