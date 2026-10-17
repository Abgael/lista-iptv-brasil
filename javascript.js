document.getElementById('load-btn').addEventListener('click', function() {
    const url = document.getElementById('m3u8-url').value;
    const videoPlayer = document.getElementById('video-player');
    if (url) {
        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(url);
            hls.attachMedia(videoPlayer);
            hls.on(Hls.Events.MANIFEST_PARSED, function() {
                videoPlayer.play();
            });
        } else if (videoPlayer.canPlayType('application/vnd.apple.mpegurl')) {
            // For Safari
            videoPlayer.src = url;
            videoPlayer.addEventListener('loadedmetadata', function() {
                videoPlayer.play();
            });
        } else {
            alert('Your browser does not support M3U8 playback.');
        }
    } else {
        alert('Please enter a valid M3U8 URL.');
    }
});
