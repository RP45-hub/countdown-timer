document.getElementById('start-button').addEventListener('click', function() {
    // Get the target date from the input field
    const targetDate = new Date(document.getElementById('target-date').value).getTime();
    
    // Check if the target date is valid
    if (isNaN(targetDate)) {
        alert('Please select a valid date and time.');
        return;
    }

    // Hide the input section and show the timer
    document.querySelector('.input-section').classList.add('hidden');
    document.getElementById('timer').classList.remove('hidden');

    // Update the countdown every second
    const interval = setInterval(function() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        if (distance < 0) {
            clearInterval(interval);
            document.getElementById('timer').classList.add('hidden');
            document.getElementById('message').classList.remove('hidden');
            return;
        }

        // Calculate time components
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result
        document.getElementById('days').textContent = formatTime(days);
        document.getElementById('hours').textContent = formatTime(hours);
        document.getElementById('minutes').textContent = formatTime(minutes);
        document.getElementById('seconds').textContent = formatTime(seconds);
    }, 1000);
});

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}
