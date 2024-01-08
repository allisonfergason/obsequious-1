let isSigma = false;

window.onload = () => {
    let joshBtn = document.getElementById('sigma');
    joshBtn.addEventListener('click', (ev)=> {
        makeNewVideo(window.innerWidth / 2 - 320 * 1.5, window.innerHeight / 2 - 240 * 1.5);
        isSigma = true;
        ev.stopPropagation();
    })

    document.body.addEventListener('keydown', (ev)=> {
        if(ev.key === "Escape") {
            let videos = document.getElementsByTagName('video');
            for(let i = videos.length - 1; i >= 0; i--) {
                videos[i].remove();
            }

            isSigma = false;
        }
    })

    document.body.addEventListener('click', ()=> {
        if(isSigma) makeNewVideo();
    })
}

function makeNewVideo(x, y) {
    let video = document.createElement('video');
    if(x) {
        video.style.top = y + "px";
        video.style.left = x + "px";
    } else {
        video.style.top = Math.floor(Math.random() * (window.innerHeight - 480)) + "px";
        video.style.left = Math.floor(Math.random() * (window.innerWidth - 640)) + "px";
    }
    video.src = 'vids/lol.mp4';
    video.play();
    document.body.appendChild(video);
    video.width = 640 * 1.5;
    video.height = 480 * 1.5;
}