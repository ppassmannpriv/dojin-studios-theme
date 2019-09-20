if (window.innerWidth >= 690) {
    var video = document.getElementById('backgroundvideo');
    var srcPath = video.dataset.src;
    var src = '<source src="' + srcPath + '" type="video/mp4">';
    video.innerHTML = src;
}