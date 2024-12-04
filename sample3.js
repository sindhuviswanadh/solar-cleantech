function connectDevice(deviceId) {
    const deviceCard = document.getElementById(deviceId);
    const statusElement = document.getElementById("status-" + deviceId);
    const connectButton = deviceCard.querySelector(".btn-connect");

    // Change status to connected
    statusElement.textContent = "Connected";
    statusElement.style.color = "#27ae60"; // Green color for connected status

    // Disable the connect button to prevent multiple clicks
    connectButton.disabled = true;
    connectButton.textContent = "Connected";

    // Optionally, add a 'connected' class for styling purposes
    deviceCard.classList.add('connected');
}