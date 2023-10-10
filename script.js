// Get references to the download button and the animation element
const downloadButton = document.querySelector('.download-button');
const downloadAnimation = document.getElementById('download-animation');

// Function to show the animation and apply the bouncing animation
function showDownloadAnimation() {
    downloadAnimation.classList.remove('hidden');
    downloadAnimation.classList.add('visible', 'bouncing');
    setTimeout(() => {
        downloadAnimation.classList.remove('visible', 'bouncing');
        downloadAnimation.classList.add('hidden');
    }, 3000); // Hide the animation after 3 seconds (adjust as needed)
}

// Add a click event listener to the download button
downloadButton.addEventListener('click', showDownloadAnimation);
