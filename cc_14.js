// Task 2: Adding Support Tickets Dynamically

function addTicket(customerName, issueDescription, priorityLevel) {
    const ticketContainer = document.getElementById('ticketContainer');
// main support ticket container
    const ticket = document.createElement('div');
    ticket.setAttribute('class','ticket'); //Set class attribute

    const nameHeading = document.createElement('h2'); //Add heading for customer's name
    nameHeading.textContent = customerName;
    
    const issueText= document.createElement('p');  //issue description section
    issueText.textContent = issueDescription;

    const priorityState = document.createElement('span');
    priorityState.textContent = `Priority: ${priorityLevel}`;
    priorityState.setAttribute('class', priorityLevel.toLowerCase());

    const resolveButton = document.createElement('button');  //Add resolve button to remove the ticket
    resolveButton.textContent = 'Resolve';
    resolveButton.setAttribute('class', 'resolve-button');

// Task 5 Addition 
const editButton = document.createElement('button'); //Add edit button 
editButton.textContent = 'Edit Ticket';
editButton.setAttribute('class', 'edit-button')

// Task 4 addition
resolveButton.addEventListener('click', function(event) {
    ticketContainer.removeChild(ticket); // removing ticket from container
    event.stopPropagation();
})

editButton.addEventListener('click', function(event) {
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.value = nameHeading.textContent;

    const issueInput = document.createElement('input');
    issueInput.setAttribute('type', 'text');
    issueInput.value = issueText.textContent;

    const priorityInput = document.createElement('input');
    priorityInput.setAttribute('type', 'text');
    priorityInput.value = priorityState.textContent.split(": ")[1]
})

    // Append elements to the ticket container
    ticket.appendChild(nameHeading);
    ticket.appendChild(issueText);
    ticket.appendChild(priorityState);
    ticket.appendChild(resolveButton);
    ticket.appendChild(editButton);
    ticketContainer.appendChild(ticket); // appending ticket to container

// Task 5 Inline Editing of Support Tickets

ticket.addEventListener('dblclick', function() {
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.value = nameHeading.textContent;

    const issueInput = document.createElement('input');
    issueInput.setAttribute('type', 'text');
    issueInput.value = issueText.textContent;

    const priorityInput = document.createElement('input');
    priorityInput.setAttribute('type', 'text');
    priorityInput.value = priorityState.textContent.split(": ")[1]; // trying to get current priority

    // making save button
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    saveButton.setAttribute('class', 'save-btn');

    // clearing current content
    ticket.innerHTML = '';

    // appending again just in case
    ticket.appendChild(nameInput);
    ticket.appendChild(issueInput);
    ticket.appendChild(priorityInput);
    ticket.appendChild(saveButton);

     // save button listener
     saveButton.addEventListener('click', function() {
        // updating new values
        nameHeading.textContent = nameInput.value;
        issueText.textContent = issueInput.value;
        priorityState.textContent = `Priority: ${priorityInput.value}`;
        priorityState.setAttribute('class', priorityInput.value.toLowerCase());

        //clear and update ticket with new details
        ticket.innerHTML = '';
        ticket.appendChild(nameHeading);
        ticket.appendChild(issueText);
        ticket.appendChild(priorityState);
        ticket.appendChild(resolveButton);
        ticket.appendChild(editButton);
        ticket.appendChild(saveButton);
    });
});
}
document.getElementById('addTicketBtn').addEventListener('click', function() {
    // Prompt user for ticket details
    const customerName = prompt("Enter customer name:");
    const issueDescription = prompt("Enter issue description:");
    const priorityLevel = prompt("Enter priority level (High, Medium, Low):");

    // Validate inputs before creating a ticket
    if (customerName && issueDescription && priorityLevel) {
        addTicket(customerName, issueDescription, priorityLevel);
    } else {
        alert("Please fill in all details to create a ticket.");
    }
});

// Task 3 Addition
// making a function to highlight tickets
function highlightHighPriorityTickets() {
    const highlightHighPriorityTickets = document.querySelectorAll('.high');
    const highPriorityArray = Array.from(highlightHighPriorityTickets);

    highPriorityArray.forEach(ticket => {
        ticket.style.backgroundColor = 'lightblue'; // setting a highlight color
        ticket.style.border = '2px solid green'; // added a border
    });
}

highlightHighPriorityTickets()

// attaching an event listener to ticketContainer
const ticketContainer = document.getElementById('ticketContainer');
ticketContainer.addEventListener('click', function() {
    console.log('A ticket was clicked')
});


// Example test case

addTicket("Micheal Jordan", "Cannot log in to account.", "High");
addTicket("Steph Curry", "Payment processing issue.", "Medium");
addTicket("Nikola Jokic", "Page not showing.", "High");
    