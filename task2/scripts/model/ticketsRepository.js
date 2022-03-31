define([
    'storage/localStorage'
], function (localStorage) {
    const key = 'tickets'

    const generateId = () => Date.now()

    return {
        getTickets: function () {
            return localStorage.getData(key)
        },

        getTicket: function (id) {
            let tickets = this.getTickets()

            return tickets.find(item => item.id === id) || null
        },

        saveTicket: function (ticket) {
            if (!ticket.id) {
                ticket.id = generateId()
            }
            
            let tickets = this.getTickets() || []
            let updated = false;

            tickets.forEach((item, index) => {
                if (item.id === ticket.id) {
                    tickets[index] = ticket
                    updated = true
                }
            })

            if (!updated) {
                tickets.push(ticket)
            }

            localStorage.setData(key, tickets)
        },

        deleteTicket: function (id) {
            let tickets = this.getTickets()
            console.log("🚀 ~ file: ticketsRepository.js ~ line 43 ~ tickets", tickets)

            if (!tickets || !tickets.length) {
                return
            }

            const filteredTickets = tickets.filter(item => item.id != id)
            console.log("🚀 ~ file: ticketsRepository.js ~ line 49 ~ filteredTickets", filteredTickets)

            localStorage.setData(key, filteredTickets)
        }
    }
})
