import $ from './lib/lib';

$('button').on('click', function() {
    $(this).toggleClass('active');
});

// console.log($('.some').closest('.awdawd').addClass('awdawd'));
$('.more').fadeIn(1800);