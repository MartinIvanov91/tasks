define([
    'jquery',
    'model/context',
    'action/save',
    'action/delete'
], function ($, context, saveAction, deleteAction) {

    return function () {
        let ticket = context.getContext()
        let title = $('#title')
        let description = $('#description')
        let assigned = $('#assigned')
        let status = $('#status')

        let deleteButton = $('#delete').click(deleteAction(ticket ? ticket.id : null))

        if (!ticket) {
            deleteButton.text('Cancel')
        } else {
            title.val(ticket.title)
            description.val(ticket.description)
            assigned.val(ticket.assigned)
            status.val(ticket.status)
        }

        saveAction = saveAction(ticket ? ticket.id : null)

        $('#register').submit(function (event) {
            event.preventDefault()
            
            const newTicket = {
                title: title.val(),
                description: description.val(),
                assigned: assigned.val(),
                status: status.val()
            }

            saveAction(newTicket)
        })

        $('#delete').click(function (event) {
            event.preventDefault()

            if (ticket) {
                deleteAction = deleteAction(ticket.id)
                deleteAction()
            }
        })
    }()
})
