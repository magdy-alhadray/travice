$(function() {
    //Navbar hide in Footer Section

        $(document).scroll(function() {
            if (window.pageYOffset >= 4900)
                $(".navbar").css("display", "none");
            else
                $(".navbar").css("display", "block");
        });
    
    //Toggle Active Class

    $(".navbar .navbar-nav li").on('click', function() {
        $(this).addClass("active").siblings().removeClass("active");
    });

    //Toggle Active Class IN Restarent Menu Section && Toggle Between Restarnet Menu pages

    $(".nav ul li").on('click', function() {
        event.preventDefault();
        $(this).addClass("active").siblings().removeClass("active");
        $(".menu div.mains,.menu div.desserts,.menu div.drinks").hide();
        $($(this).data("class")).fadeIn();
    });

});