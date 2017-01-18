var backColors = ["#16a085", "#2ecc71", "#3498db", "#9b59b6", "#2c3e50", "#7f8c8d", "#bdc3c7", "#5D4037", "#212121", "#607D8B", "#F57F17", "#FF8A65", "#80CBC4", "#BA68C8", "#7986CB", "#AEEA00", "#18FFFF", "#448AFF", "#FFD600"];
var colors = ["#f1c40f", "#f39c12", "#d35400", "#c0392b", "#e74c3c", "#0D47A1", "#512DA8", "#FF1744", "#00E5FF", "#00E676", "#43A047", "#4A148C", "#b71c1c", "#880E4F", "#4A148C", "#311B92", "#4527A0", "#1A237E", "#0D47A1", "#01579B", "#006064", "#004D40", "#1B5E20", "#BF360C", "#d50000", "#6200EA", "#304FFE", "#DD2C00", "#00C853"];

function getRandInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getQuote() {
	var quote = "";
	var author = "";

	$.ajax({
		url: "https://api.tumblr.com/v2/blog/heremyjadfield.tumblr.com/posts/quote?api_key=xboyZKnoEhzmna7GYfCOy6dUpY23bWDwOUIMw0M7nO5K0X2HPS&limit=50",
		dataType: 'jsonp',
		success: function(posts) {
			var postings = posts.response.posts;
			var post = postings[getRandInt(0, 49)];
			quote = post.text;
			author = "– " + post.source;
			$(".quote").html(quote);
			$(".quoteauth").html(author);

		}
	});
}

$(".quotecircle").click(function() {
	// change colors 
	var randBack = backColors[getRandInt(0, backColors.length)];
	console.log(randBack);
	var randColor = colors[getRandInt(0, colors.length)];
	console.log(randColor);

	$("body").css({
		"background-color":randBack, 
		"-webkit-transition":"background-color 2s" 
	});
	$(".quotecircle").css({
		"background-color":randColor, 
		"-webkit-transition":"background-color 2s" 
	});

	// display elements
	$(".quotetxt").css("display", "none");
	$(".quote").css("display", "table-cell");
	$(".iconleft").css("display", "block");
	$(".iconright").css("display", "block");
	$(".quoteauth").css("display", "block");
	$(".twittericon").css("display", "block");

	// get quote
	getQuote();
});

$(".fa-twitter").click(function() {
	var share = "http://twitter.com/share?text="; 
	var quoteAuth = $(".quoteauth").html(); 
	var quoteTxt = '"' + $(".quote").html() + '"'; 
			
	window.open(share + quoteTxt + quoteAuth, "_blank", "adressbar=no"); 
}); 