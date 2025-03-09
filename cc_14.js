// Task 2: Adding Support Tickets Dynamically

function addSupportTicket(customerName, issueDescription, priorityLevel) {
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
    resolveButton.addEventListener("click", function() {
        ticket.remove();
    });
    
    // Append elements to the ticket container
    ticket.appendChild(nameHeading);
    ticket.appendChild(issueParagraph);
    ticket.appendChild(priorityLabel);
    ticket.appendChild(resolveButton);

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

// Example test case
document.addEventListener("DOMContentLoaded", function() {
    createSupportTicket("Micheal Jordan", "Unable to login to account.", "High");
    createSupportTicket("Steph Curry", "Payment processing issue.", "Medium");
    createSupportTicket("Nikola Jokic", "Website is down.", "High");
    highlightHighPriorityTickets();
});