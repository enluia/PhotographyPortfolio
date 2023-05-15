const track = document.getElementById("main-image-track")

window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
}

window.onmousemove = e => {
    if (track.dataset.mouseDownAt === "0") {
        return;
    } // if

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;
    const nextPercentage = parseFloat(track.dataset.prevScrollPercentage) + percentage;

    track.dataset.percentage = nextPercentage;

    track.style.transform = `translate(${percentage}%, -50%)`;
}

window.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevScrollPercentage = track.dataset.percentage;
}