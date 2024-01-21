document.addEventListener("DOMContentLoaded", function() {
    const depthIndicator = document.getElementById("depthIndicator");
    const secondVideo = document.querySelector(".video2");
    const scrollButton = document.getElementById("scrollButton");
    const depthIndicatorVisibleClass = "depth-indicator-visible";

    let depth = 0;
    const speedFactor = 0.1;

    window.addEventListener("scroll", function() {
        // Check if the scroll position has reached the second video
        if (window.scrollY >= secondVideo.offsetTop) {
            // Calculate the new depth based on the scroll position and speed factor
            depth = Math.floor((window.scrollY - secondVideo.offsetTop) * speedFactor);

            // Update the depth indicator
            depthIndicator.textContent = "Depth: " + depth + " meters";
            depthIndicator.classList.add(depthIndicatorVisibleClass);

            // Hide the scroll button when the second video is reached
            scrollButton.style.display = "none";
        } else {
            depth = 0; // Reset depth to 0 when above the second video
            depthIndicator.classList.remove(depthIndicatorVisibleClass);

            // Show the scroll button when above the second video
            scrollButton.style.display = "block";
        }
    });
});

document.getElementById('scrollButton').addEventListener('click', function() {
    window.scrollBy(0, 900);
});
