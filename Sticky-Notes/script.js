 function addNote() {
            const notesContainer = document.getElementById('notes-container');
            const note = document.createElement('div');
            note.className = 'note';
            
            const textarea = document.createElement('textarea');
            textarea.placeholder = 'Enter your note...';
            
            const noteActions = document.createElement('div');
            noteActions.className = 'note-actions';
            
            const colorPicker = document.createElement('input');
            colorPicker.type = 'color';
            colorPicker.className = 'color-picker';
            
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'delete-note';
            deleteButton.onclick = function () {
                notesContainer.removeChild(note);
            };

            colorPicker.addEventListener('input', function() {
                const selectedColor = colorPicker.value;
                note.style.backgroundColor = selectedColor;
                textarea.style.color = selectedColor; // Set the text color to match the selected color.
            });

            noteActions.appendChild(colorPicker);
            noteActions.appendChild(deleteButton);
            note.appendChild(textarea);
            note.appendChild(noteActions);
            notesContainer.appendChild(note);
            
            const noteAddedSound = document.getElementById('noteAddedSound');
            noteAddedSound.play();
        }