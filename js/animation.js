$("document").ready(function() {
    
    var con1 = $(".container1");
    var con2 = $(".container2");

    $(".left-arrow").hover(function() {
        $("#left").attr("src", "Assets/arrow-blue-left.png");
    }, function() {
        $("#left").attr("src", "Assets/arrow-gray-left.png");
    });
    
    $(".right-arrow").hover(function() {
        $("#right").attr("src", "Assets/arrow-blue-right.png");
    }, function() {
        $("#right").attr("src", "Assets/arrow-gray-right.png");
    });

    $(".left-arrow").click(function() {
        con1.css("opacity", "0");
        con2.css("opacity", "0");
        
        con1.animate({
            opacity: 1
        }, 300);
        
        con2.animate({
            opacity: 1
        }, 300);
        
        $(".container1 img").last().clone().prependTo(".container1").end().end().remove();
        $(".container2 img").last().clone().prependTo(".container2").end().end().remove();
    });

    $(".right-arrow").click(function() {
        con1.css("opacity", "0");
        con2.css("opacity", "0");

        con1.animate({
            opacity: 1
        }, 300);
        
        con2.animate({
            opacity: 1
        }, 300);

        $(".container1 img").first().clone().appendTo(".container1").end().end().remove();
        $(".container2 img").first().clone().appendTo(".container2").end().end().remove();
    });
});