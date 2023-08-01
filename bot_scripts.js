const toggleDropdownButtons = document.querySelectorAll('.toggle-dropdown');

toggleDropdownButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const dropdown = e.target.closest('.movement').querySelector('.dropdown');
    const currentState = dropdown.style.display;
    dropdown.style.display = currentState === 'block' ? 'none' : 'block';
    e.target.textContent = currentState === 'block' ? '+' : '-';
  });
});

const exerciseCheckboxes = document.querySelectorAll('.exercise-checkbox');
exerciseCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('change', (e) => {
    const movementDescription = e.target.closest('.movement').querySelector('.movement-description');
    movementDescription.style.textDecoration = e.target.checked ? 'line-through' : 'none';
  });
});

const saveableCheckboxes = document.querySelectorAll('.saveable-checkbox');
saveableCheckboxes.forEach((checkbox, index) => {
  const movementDescription = checkbox.closest('.movement').querySelector('.movement-description');
  const localStorageKey = window.location.href + checkbox.id + '-index-' + index;
  const isChecked = localStorage.getItem(localStorageKey);

  if (isChecked === 'true') {
    checkbox.checked = true;
    movementDescription.style.textDecoration = 'line-through';
  }

  checkbox.addEventListener('change', (e) => {
    localStorage.setItem(localStorageKey, e.target.checked);
    movementDescription.style.textDecoration = e.target.checked ? 'line-through' : 'none';
  });
});




// Set tracker script
const addSetBtn = document.getElementById("add-set-btn");
const clearSetsBtn = document.getElementById("clear-sets-btn");
const setTracker = document.getElementById("set-tracker");

addSetBtn.addEventListener("click", () => {
  const currentSets = setTracker.querySelectorAll('.set-checkbox').length;
  if (currentSets < 20) {
    const newSetDiv = document.createElement("div"); // New container div
    newSetDiv.style.display = "inline-block";

    const newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newCheckbox.classList.add("set-checkbox");
    newCheckbox.id = "set-" + (currentSets + 1);
    newSetDiv.appendChild(newCheckbox); // Append to container

    const newLabel = document.createElement("label");
    newLabel.innerHTML = currentSets + 1;
    newLabel.classList.add("checkbox-label");
    newLabel.setAttribute("for", "set-" + (currentSets + 1));
    newSetDiv.appendChild(newLabel); // Append to container

    setTracker.appendChild(newSetDiv);
  }
});

clearSetsBtn.addEventListener("click", () => {
  while (setTracker.firstChild) {
    setTracker.firstChild.remove();
  }
});

  const timerDisplay = document.getElementById('timer-display');
  const startTimerBtn = document.getElementById('start-timer-btn');
  const stopTimerBtn = document.getElementById('stop-timer-btn');
  const resetTimerBtn = document.getElementById('reset-timer-btn');

  let timerInterval;
  let startTime;
  let elapsedTime = 0;

  function displayTime() {
    const totalSeconds = Math.floor(elapsedTime / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const remainingSeconds = totalSeconds % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  }

  function startTimer() {
    startTime = performance.now() - elapsedTime;
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      elapsedTime = performance.now() - startTime;
      displayTime();
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timerInterval);
  }

  function resetTimer() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    displayTime();
  }

  startTimerBtn.addEventListener('click', startTimer);
  stopTimerBtn.addEventListener('click', stopTimer);
  resetTimerBtn.addEventListener('click', resetTimer);

  document.addEventListener('DOMContentLoaded', function() {
    const collapsible = document.querySelectorAll('.toggle-dropdown');

    collapsible.forEach((button, index) => {
      // Load the state of the collapsible
      const collapsibleStorageKey = 'collapsible-state-' + index;
      const collapsibleState = localStorage.getItem(collapsibleStorageKey);
      if (collapsibleState === 'open') {
        button.click();
      }

      // Save the state of the collapsible
      button.addEventListener('click', () => {
        if (button.textContent === '-') {
          localStorage.setItem(collapsibleStorageKey, 'open');
        } else {
          localStorage.setItem(collapsibleStorageKey, 'closed');
        }
      });
    });
  });
