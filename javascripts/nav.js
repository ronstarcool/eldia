$(document).ready(function(){
    var a = sessionStorage.getItem('active');
    $('#' + a).addClass('activeLink');
    sessionStorage.removeItem('active');
    $('nav a').on('click', function(e){
        $(this).removeClass('activeLink');
        // e.preventDefault();
        sessionStorage.setItem('active', this.id);
    });
});