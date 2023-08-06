//if ticket number is less than 100, per ticket price is 100 taka
//if ticket number is more than 100, but less than 200, per ticket price is 100 taka/per ticket
//rest ticket price is 90 taka/per ticket
//if you perches 200 ticket, first 100 ticket price is 100 taka/per ticket
//second 100 ticket price is 90 taka/per ticket
//if 200+ ticket per ticket price is 70 taka/per ticket

function ticketCost(ticket) {
    let total = 0;
    if (ticket <= 100) {
        total = ticket * 100;
    }
    else if (ticket <= 200) {
        const first100Ticket = 100 * 100;
        const restTicket = ticket - 100;
        const second100Ticket = restTicket * 80;
        total = first100Ticket + second100Ticket;
    }
    else {
        const first100Ticket = 100 * 100;
        const second100Ticket = 100 * 80;
        const restTicket = ticket - 200;
        const restTicketPrice = restTicket * 50;
        total = first100Ticket + second100Ticket + restTicketPrice;
    }
    return total;
}

const totalTicketCost = ticketCost(201);
console.log(totalTicketCost);
