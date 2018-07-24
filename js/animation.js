$("document").ready(function() {
    
    $(".left-arrow").hover(function() {
        $(this).attr("src", "Assets/arrow-blue-left.png");
    }, function() {
        $(this).attr("src", "Assets/arrow-gray-left.png");
    });
    
    $(".right-arrow").hover(function() {
        $(this).attr("src", "Assets/arrow-blue-right.png");
    }, function() {
        $(this).attr("src", "Assets/arrow-gray-right.png");
    });
    
    $(".right-arrow").click(function() {
        var current = $(".active");
        var next = current.next();
        var first = $(".images img:first-child");
        console.log("..dsa");
        
        if(next.length) {
            next.css("opacity", "0");
            current.animate({
                opacity: 0
            }, 300);
            current.removeClass("active");
            next.animate({
                opacity: 1
            }, 300);
            next.addClass("active");
        }
        else {
            first.css("opacity", "0.1");
            current.animate({
                opacity: 0
            }, 300);
            current.removeClass("active");
            first.animate({
                opacity: 1
            }, 300);
            first.addClass("active");
        }
    });
    
    $(".left-arrow").click(function() {
        var current = $(".active");
        var previous = current.prev();
        var last = $(".images img:last-child");
        
        if(previous.length) {
            previous.css("opacity", "0");
            current.animate({
                opacity: 0
            }, 300);
            current.removeClass("active");
            previous.animate({
                opacity: 1
            }, 300);
            previous.addClass("active");
        }
        else {
            last.css("opacity", "0");
            current.animate({
                opacity: 0
            }, 300);
            current.removeClass("active");
            last.animate({
                opacity: 1
            }, 300);
            last.addClass("active");
        }
    });
    
});