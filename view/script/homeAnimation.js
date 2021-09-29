$(".hover").mouseleave(
    function () {
        $(this).removeClass("hover");
    }
);
// var videoPlayButton,
//     videoWrapper = document.getElementsByClassName('video-wrapper')[0],
//     video = document.getElementsByTagName('video')[0],
//     videoMethods = {
//         renderVideoPlayButton: function () {
//             if (videoWrapper.contains(video)) {
//                 this.formatVideoPlayButton()
//                 video.classList.add('has-media-controls-hidden')
//                 videoPlayButton = document.getElementsByClassName('video-overlay-play-button')[0]
//                 videoPlayButton.addEventListener('click', this.hideVideoPlayButton)
//             }
//         },

//         formatVideoPlayButton: function () {
//             videoWrapper.insertAdjacentHTML('beforeend', '\
//                 <svg class="video-overlay-play-button" viewBox="0 0 200 200" alt="Play video">\
//                     <circle cx="100" cy="100" r="90" fill="none" stroke-width="15" stroke="#fff"/>\
//                     <polygon points="70, 55 70, 145 145, 100" fill="#fff"/>\
//                 </svg>\
//             ')
//         },

//         hideVideoPlayButton: function () {
//             video.play()
//             videoPlayButton.classList.add('is-hidden')
//             video.classList.remove('has-media-controls-hidden')
//             video.setAttribute('controls', 'controls')
//         }
//     }

// videoMethods.renderVideoPlayButton()

var video_player = document.getElementById("video_player"),
    // what are the "links" and some other logic i don't quite understand
    /* says i = 0, that said i on click = handler?
     */
    links = video_player.getElementsByTagName('a');
for (var i = 0; i < links.length; i++) {
    links[i].onclick = handler;
}

/* calling the function named handler, not sure what the e and e.preventDefault is doing */
function handler(e) {
    e.preventDefault();

    // What is our video target, the attribute href
    videotarget = this.getAttribute("href");

    /* our filename is the videotarget the href element until the dot?
    for a .mp4 file thats fine, but not for one that is a jumbled url lilke
    youtube etc. We want the end of the href which is a "
    */
    filename = videotarget.substr(0, videotarget.lastIndexOf('/"')) || videotarget;

    video = document.querySelector("#video_player video");

    source = document.querySelectorAll("#video_player video source");

    source[0].src = filename /*+ ".mp4"*/ ;
    video.load();
    video.play();
}