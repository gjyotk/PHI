document.addEventListener("DOMContentLoaded", () => {
    // Available time slots for mentorship
    const timeSlots = [
        "Tuesday: 8 AM - 9 PM",
        "Thursday: 11 AM - 12:30 PM",
        "Saturday: 5 PM - 7 PM"
    ];

    const timeSlotsContainer = document.getElementById('time-slots');
    
    // Check if the time slots container exists
    if (timeSlotsContainer) {
        // Populate the time slots
        timeSlots.forEach(slot => {
            const li = document.createElement('li');
            li.textContent = slot;
            timeSlotsContainer.appendChild(li);
        });
    } else {
        console.error("Time slots container not found.");
    }

    // Add event listeners to toggle buttons
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.getAttribute('data-target');
            toggleVisibility(sectionId);
        });
    });
});

// Toggle publication visibility with sliding effect
function toggleVisibility(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        if (section.classList.contains('hidden')) {
            section.classList.remove('hidden');
            section.style.maxHeight = section.scrollHeight + "px";
        } else {
            section.style.maxHeight = "0px";
            section.addEventListener('transitionend', () => {
                section.classList.add('hidden');
            }, { once: true });
        }
    } else {
        console.error(`Section with ID ${sectionId} not found.`);
    }
}