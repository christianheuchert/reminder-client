// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
    $('#sign-up-form').on('submit', authEvents.onSignUp)
    $('#sign-in-form').on('submit', authEvents.onSignIn)
    $('#change-password-form').on('submit', authEvents.onChangePassword)
    $('#sign-out-button').on('click', authEvents.onSignOut)
    $('#reminder-form').on('submit', authEvents.onCreateReminder)

    $('#reminders-display').on('click', '.delete-reminder', authEvents.onDeleteReminder)
    $('#reminders-display').on('submit', '.update-reminder', authEvents.onUpdateReminder)
    
})
