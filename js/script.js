$(document).ready(function() {
	$('.hidden').fadeIn(800).removeClass('hidden');
});

var container1 = $('#carousel1');
var list1 = container1.children('ul');
var items1 = list1.children('li');

var container2 = $('#carousel2');
var list2 = container2.children('ul');
var items2 = list2.children('li');

$('#right').click(function() {

	var itemWidth1 = $('#carousel1 ul li img').first().outerWidth();
	var itemWidth2 = $('#carousel2 ul li img').first().outerWidth();
	
	list1.animate({
		'right': '-=' + itemWidth1
	}, 300, function() {
		list1.css('right', 0);
		$('#carousel1 ul li').last().after($('#carousel1 ul li').first());
		
	});

	$('#carousel1 ul li').first().animate({
		'opacity': 0
	}, 310, function() {
		$('#carousel1 ul li').last().css('opacity', 1);
	});

	list2.animate({
		'right': '-=' + itemWidth2
	}, 300, function() {
		list2.css('right', 0);
		$('#carousel2 ul li').last().after($('#carousel2 ul li').first());
		
	});


	$('#carousel2 ul li').first().animate({
		'opacity': 0
	}, 310, function() {
		$('#carousel2 ul li').last().css('opacity', 1);
	});

});	

$('#left').click(function() {

	var itemWidth1 = $('#carousel1 ul li img').last().outerWidth();
	var itemWidth2 = $('#carousel2 ul li img').last().outerWidth();

	list1.animate({
		'right': '+=' + itemWidth1
	}, 300, function() {
		$('#carousel1 ul li').first().before($('#carousel1 ul li').last());
		list1.css('right', 0);
		$('#carousel1 ul li').first().css('opacity', 0);
		$('#carousel1 ul li').first().animate({
			'opacity': 1
		}, 200);
	});

	list2.animate({
		'right': '+=' + itemWidth2
	}, 300, function() {
		$('#carousel2 ul li').first().before($('#carousel2 ul li').last());
		list2.css('right', 0);
		$('#carousel2 ul li').first().css('opacity', 0);
		$('#carousel2 ul li').first().animate({
			'opacity': 1
		}, 200);
	});
});
