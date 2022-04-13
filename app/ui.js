'use strict'

const events = require('./events.js')
const store = require('./store.js')

// USER FUNCTIONS ----------------------------------------------------
const onSignUpSuccess = function () {
    $('#auth-display').html('<p>User signed up successfully</p>')
    $('form').trigger('reset')
}
const onSignUpFailure = function () {
    $('#auth-display').html('<p>Error while signing up</p>')
}

const onSignInSuccess = function (response) {
    $('#auth-display').html('<p>User signed in successfully</p>')
    $('form').trigger('reset')
    store.user = response.user
}
const onSignInFailure = function () {
    $('#auth-display').html('<p>Error while signing in</p>')
}

const onChangePasswordSuccess = function () {
    $('#auth-display').html('<p>User changed password successfully</p>')
    $('form').trigger('reset')
}
const onChangePasswordFailure = function () {
    $('#auth-display').html('<p>Error while changing password</p>')
}

const onSignOutSuccess = function () {
    $('#auth-display').html('<p>User signed out successfully</p>')
    $('form').trigger('reset')
}
const onSignOutFailure = function () {
    $('#auth-display').html('<p>Error while signing out</p>')
}

// REMINDER FUNCTIONS -----------------------------------------------
const onCreateReminderSuccess = function () {
    $('#reminder-display').html('<p>reminder made</p>')
    $('form').trigger('reset')
}
const onCreateReminderFailure = function () {
    $('#reminder-display').html('<p>reminder error</p>')
}

const onIndexRemindersSuccess = function (response){
    // console.log(response)
    let remindersList = ''
    response.reminders.forEach((reminder) => {
        remindersList += `
            <div class="reminder">
                <h4>${reminder.title}</h4>
                <h5>${reminder.text}</h5>
                <h5>${reminder.date}</h5>
                <div class="edit-form" id="${reminder._id}">
                    <form class="update-reminder" data-id=${reminder._id}>
                                <input name="reminder[title]" type="text" placeholder="event">
                                <input name="reminder[text]" type="text" placeholder="details">
                                <input name="reminder[date]" type="date" placeholder="date">
                                <button type="submit">update book</button>
                            </form>
                    <button class="delete-reminder" data-id=${reminder._id}>delete </button>
                </div>
                <button class="edit-reminder" data-id=${reminder._id}>edit</button>
            </div>
        `
    })
    $('#reminders-display').html(remindersList)
    $('.edit-form').hide()
    $('.edit-reminder').on('click', onShowEditForm)

}
const onIndexRemindersFailure = function (){
    $('#reminder-display').html('<p>reminder index error</p>')
}
const onShowEditForm= function(event){
    const showForm = event.target
    const editFormId = $(showForm).data('id')
    $('#'+editFormId).show()
    $(showForm).hide()
}

const onDeleteRemindersSuccess = function (response){
    $('#reminder-display').html('<p>deleted item</p>')
}
const onDeleteRemindersFailure = function (){
    $('#reminder-display').html('<p>deletion error</p>')
}


module.exports = {
    // user functions
    onSignUpSuccess,
    onSignUpFailure,
    onSignInSuccess,
    onSignInFailure,
    onChangePasswordSuccess,
    onChangePasswordFailure,
    onSignOutSuccess,
    onSignOutFailure,
    // reminder functions
    onCreateReminderSuccess,
    onCreateReminderFailure,
    onIndexRemindersSuccess,
    onIndexRemindersFailure,
    onDeleteRemindersFailure,
    onDeleteRemindersSuccess
}