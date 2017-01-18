var backColors = ["#16a085", "#2ecc71", "#3498db", "#9b59b6", "#2c3e50", "#7f8c8d", "#bdc3c7"];
var colors = ["#f1c40f", "#f39c12", "#d35400", "#c0392b", "#e74c3c", "#0D47A1", "#512DA8", "#FF1744", "#00E5FF", "#00E676", "#43A047", "#4A148C"];

function getRandInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getQuote() {
	var quote = "";
	var author = "";

$.ajax({
		url: "https://api.tumblr.com/v2/blog/heremyjadfield.tumblr.com/posts/quote?			api_key=xboyZKnoEhzmna7GYfCOy6dUpY23bWDwOUIMw0M7nO5K0X2HPS&limit=50",
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

	$("body").css("background-color", randBack);
	$(".quotecircle").css("background-color", randColor);

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