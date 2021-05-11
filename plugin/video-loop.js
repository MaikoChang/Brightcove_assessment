videojs.registerPlugin('videoLoop', function() {
  // Get a reference to the player
  var myPlayer = this,
      videoLoopNum = 0;

  // Listen for the "ended" event and play the video
  // You can also do this by adding the loop attribute to the player code
  myPlayer.on("ended", function () {
      playVideo();
  });

  // Play the video first time
  playVideo();

  // +++ Loop video 3 times +++
  function playVideo () {
    // Check the number of times the video has played
    if (videoLoopNum < 3) {
      // Start video playback
      myPlayer.play();
      // Increment number of times video played
      videoLoopNum++;
    }
  }
});

videojs.registerPlugin('listenForParent', function() {
  var myPlayer = this;
  // This method called when postMessage sends data into the iframe
  function controlVideo(evt){
    if(evt.data === "playVideo") {
      myPlayer.play();
    } else if (evt.data === 'pauseVideo') {
      myPlayer.pause();
    }
  };
  // Listen for the message, then call controlVideo() method when received
  window.addEventListener("message",controlVideo);
});

