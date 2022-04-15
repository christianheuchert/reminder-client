// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
    $('#sign-up-form').on('submit', authEvents.onSignUp).hide()
    $('#sign-up-button').on('click', authEvents.showSignUp)
    $('#sign-in-form').on('submit', authEvents.onSignIn)
    $('#change-password-form').on('submit', authEvents.onChangePassword).hide()
    $('#sign-out-button').on('click', authEvents.onSignOut).hide()
//reminder event listeners
    $('#create-reminder-button').on('click', authEvents.onShowCreateForm).hide()
    $('#change-password-button').on('click', authEvents.onShowChangePasswordForm).hide()
    $('#reminder-form').on('submit', authEvents.onCreateReminder).hide()
    $('#reminders-display').on('click', '.delete-reminder', authEvents.onDeleteReminder)
    $('#reminders-display').on('submit', '.update-reminder', authEvents.onUpdateReminder)
    
})
