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
    ticket.appendChild(issuePara);
    ticket.appendChild(priorityLabel);
    ticket.appendChild(resolveButton);
    
    // Append the ticket to the ticketContainer
    document.getElementById("ticketContainer").appendChild(ticket);
}
