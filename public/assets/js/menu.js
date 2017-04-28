$('.sidebar-menu li a').click(function () {
    $('.sidebar-menu li').removeClass('active');
    $(this).parent().addClass('active');
});