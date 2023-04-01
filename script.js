const planner = document.getElementById('planner');

// Add your personalized tasks here
const tasks = {
    Monday: {
        '9:00': 'Meeting with team',
        '13:00': 'Lunch',
    },
    Tuesday: {
        '14:00': 'Project review',
    },
    Wednesday: {
        '8:00': 'work'
    }
};

// Loop through hours from 6 to 23
for (let hour = 6; hour < 23; hour++) {
    const hourDiv = document.createElement('div');
    hourDiv.className = 'planner-hour';
    hourDiv.textContent = `${hour}:00`;
    planner.appendChild(hourDiv);

    for (let day = 0; day < 7; day++) {
        const cellDiv = document.createElement('div');
        cellDiv.className = 'planner-cell';

        const dayName = planner.children[day].textContent;
        const task = tasks[dayName] && tasks[dayName][`${hour}:00`];

        if (task) {
            cellDiv.textContent = task;
        }

        planner.appendChild(cellDiv);
    }
}
