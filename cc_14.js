// Task 2: Adding Support Tickets Dynamically

function createSupportTicket(customerName, issueDescription, priorityLevel) {
// main support ticket container
    const ticket = document.createElement('div');
    card.setAttribute("id", `ticket-${Date.now()}`); //Set class attribute

    const heading = document.createElement('h3'); //Add heading for customer's name
    heading.textContent = customerName;
    
    const paragraph = document.createElement('p'); //Add paragragh for customer's issue description
    paragraph.textContent = issueDescription;

    const priorityLabel = document.createElement('span'); //Add paragragh for customer's priority level
    priorityLabel.textContent = `Priority: ${priorityLevel}`;
    
    const resolveButton = document.createElement("button");  //Add resolve button to remove the ticket
    resolveButton.textContent = "Resolve";
    resolveButton.classList.add("resolve-button");
    resolveButton.addEventListener("click", function(event) {
    event.stopPropagation();   //Task 5
        document.getElementById("ticketContainer").removeChild(ticket);
    });
// Task 5 Addition 
const editButton = document.createElement('button'); //Add edit button 
editButton.textContent = 'Edit';

    // Append elements to the ticket container
    ticket.appendChild(nameHeading);
    ticket.appendChild(issueParagraph);
    ticket.appendChild(priorityLabel);
    ticket.appendChild(resolveButton);
    ticket.appendChild(editButton);

// Task 3 addition
// Highlight high-priority tickets
if (priorityLevel.toLowerCase() === "high") {
    ticket.classList.add("high-priority");
}
    // Append the ticket to the ticketContainer
    document.getElementById("ticketContainer").appendChild(ticket);
}

function highlightHighPriorityTickets() {
    const tickets = Array.from(document.querySelectorAll(".support-ticket"));
    tickets.forEach(ticket => {
        const priorityLabel = ticket.querySelector(".priority-label");
        if (priorityLabel && priorityLabel.textContent.includes("High")) {
            ticket.classList.add("high-priority");
        }
    });
}
// Task 4 Addition
// Event listener on ticketContainer to demonstrate event bubbling
document.getElementById("ticketContainer").addEventListener("click", function(event) {
    if (event.target.closest(".support-ticket")) {
        console.log("Ticket clicked:", event.target.closest(".support-ticket").querySelector("h3").textContent);
    }
});

// Task 5 Inline Editing of Support Tickets

editButton.addEventListener('click', function() {
    const nameInput = document.createElement('input');  
    nameInput.value = heading.textContent;

    const issueDescriptionInput = document.createElement('input');
    issueDescriptionInput.value = paragraph.textContent;

    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    card.appendChild(issueDescriptionInput);

// appending new functions
card.innerHTML = '';
card.appendChild(nameInput);
card.appendChild(issueDescriptionInput);
card.appendChild(saveButton);
card.appendChild(removeButton);

// save button listener
saveButton.addEventListener('click', function() {
    heading.textContent = nameInput.value;
    paragraph.textContent = positionInput.value;

    card.innerHTML = '';
    card.appendChild(heading);
    card.appendChild(paragraph);
    card.appendChild(editButton);
    card.appendChild(removeButton);
}); // event listener for save button and inner text 
});

// Example test case
document.addEventListener("DOMContentLoaded", function() {
    createSupportTicket("Micheal Jordan", "Unable to login to account.", "High");
    createSupportTicket("Steph Curry", "Payment processing issue.", "Medium");
    createSupportTicket("Nikola Jokic", "Website is down.", "High");
    highlightHighPriorityTickets();
});