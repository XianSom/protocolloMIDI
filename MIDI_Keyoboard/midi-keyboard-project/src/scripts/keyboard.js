// This file contains the JavaScript code that implements the interactive functionality of the MIDI keyboard.
// It handles mouse click events on the keyboard keys and displays the corresponding MIDI parameters for the selected note.

document.addEventListener('DOMContentLoaded', () => {
    const keys = document.querySelectorAll('.key');
    const display = document.getElementById('midi-display');

    keys.forEach(key => {
        key.addEventListener('click', () => {
            const note = key.dataset.note;
            const midiNumber = key.dataset.midi;
            const velocity = 100; // Example velocity value

            display.innerHTML = `Nota: ${note} (MIDI: ${midiNumber}, Velocità: ${velocity})`;
            // Here you can add additional functionality to send MIDI messages if needed
        });
    });
});