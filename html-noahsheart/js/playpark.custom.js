// --------- CUSTOM JS YOUTUBE BG --------- //
var player;

function onYouTubeIframeAPIReady() {
	player = new YT.Player('video-placeholder', {
		width: 600,
		height: 400,
		videoId: 'c-YHzUzze04',
		playerVars: {
			color: '#000000',

			mute: 1,
			autoplay: 1,
			controls: 0,
			loop: 1,
			rel: 0,
			showinfo: 0,
			disablekb: 1
		},
		events: {

			onStateChange: onPlayerStateChange
		}
	});
}

function onPlayerStateChange(event) {
	if (event.data == YT.PlayerState.ENDED) {
		player.seekTo(0);
		player.playVideo();
	}
}

// --------- MENU TOP NOT SHOW --------- //
window.onscroll = function () {
	scrollFunction()
};

// function scrollFunction() {
// 	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
// 		document.getElementById("navbar").style.top = "0";
// 	} else {
// 		document.getElementById("navbar").style.top = "-90px";
// 	}
// }


// --------- SCROLL INDICATOR ---------//
/*window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}*/




