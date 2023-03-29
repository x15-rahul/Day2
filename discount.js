/* 
    first 100 ticket = 100/ticket
    second 100 ticket = 90/ticket
    rest ticket = 70/ticket
 */

const first100Ticket = 100;
const second100Ticket = 90;
const restTicket = 70;

function getTotal(ticketQuantity){
    if(ticketQuantity <= 100){
        const totalPrice = ticketQuantity * first100Ticket;
        return totalPrice;
    } else if(ticketQuantity <= 200){
        const first100TicketPrice = first100Ticket * 100;
        const second100TicketPrice = second100Ticket * (ticketQuantity - 100);
        const totalPrice = first100TicketPrice + second100TicketPrice;
        return totalPrice;
    } else {
        const first100TicketPrice = first100Ticket * 100;
        const second100TicketPrice = second100Ticket * 100;
        const restTicketPrice = restTicket * (ticketQuantity - 200);
        const totalPrice = first100TicketPrice + second100TicketPrice + restTicketPrice;
        return totalPrice;
    }
}
const totalPrice = getTotal(201);
console.log(totalPrice);