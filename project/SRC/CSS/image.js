const image = document.getElementById("movingImage");

let angle = Math.PI / 2; // Start angle at π/2 (90 degrees, pointing down)

moveInQuarterCircle();

function moveInQuarterCircle() {
    const radius = 125; // Radius of circular path
    const centerX = 150; // Horizontal center of the circle
    const centerY = 150; // Vertical center of the circle

    angle += 0.01; // Adjust speed (higher = faster), moving clockwise

    // Restrict angle to the 90-degree clockwise arc (from π/2 to π)
    if (angle > Math.PI) {
        angle = Math.PI / 2; // Reset the angle to start the quarter-circle again
    }

    // Calculate x and y based on the angle for the quarter-circle motion
    const x = centerX + radius * Math.cos(angle);  // Horizontal (x) movement
    const y = centerY + radius * Math.sin(angle);  // Vertical (y) movement

    // Set the new position
    image.style.left = `${x}px`;
    image.style.top = `${y}px`;

    requestAnimationFrame(moveInQuarterCircle);
}
