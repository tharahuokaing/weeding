/**
 * Opens the wedding reception venue location marker inside a new browser tab.
 */
function openMap() {
    const locationUrl = "https://tharahuokaing.github.io/restaurant1/";
    window.open(locationUrl, '_blank');
}

/**
 * Toggles the visibility of the traditional wedding program timeline list container.
 */
function toggleProgram() {
    const timeline = document.getElementById('weddingTimeline');
    if (timeline) {
        timeline.classList.toggle('collapsed');
    }
}
