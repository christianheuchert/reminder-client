'use strict'
const events = require('./events')
const store = require('./store.js')

// USER FUNCTIONS ----------------------------------------------------
const onSignUpSuccess = function () {
    $('#auth-display').html('<p>user signed up successfully</p><p>sign in to continue</p>')
    $('form').trigger('reset')
    $('#sign-up-form').hide()
    $('#sign-up-button').show()
}
const onSignUpFailure = function () {
    $('#auth-display').html('<p>error while signing up</p>')
}

const onSignInSuccess = function (response) {

    $('#auth-display').html('<p></p>')
    $('form').trigger('reset')
    store.user = response.user
    
    $('#sign-up-form').hide()
    $('#sign-in-form').hide()
    $('#sign-up-button').hide()

    $('#change-password-button').show()
    $('#sign-out-button').show()
    $('#create-reminder-button').show()
    $('.instructions').hide()
}
    
const onSignInFailure = function () {
    $('#auth-display').show()
    $('#auth-display').html('<p>error while signing in</p>')
    $('#auth-display').hide(2000)
}

const onChangePasswordSuccess = function () {
    $('#auth-display').show()
    $('#auth-display').html('<p>user changed password successfully</p>')
    $('#auth-display').hide(3000)
    $('form').trigger('reset')
    $('#change-password-form').hide()
    $('#change-password-button').show()
}
const onChangePasswordFailure = function () {
    $('#auth-display').html('<p>error while changing password</p>') 
}

const onSignOutSuccess = function () {
    $('#auth-display').html('<p>user signed out successfully</p>')
    $('#auth-display').hide(4000)
    $('form').trigger('reset')

    $('#sign-in-form').show()
    $('#sign-up-button').show()
    $('#reminders-display').html("")
    $('#create-reminder-button').hide()
    $('#sign-out-button').hide()
    $('#change-password-button').hide()

}
const onSignOutFailure = function () {
    $('#auth-display').html('<p>error while signing out</p>')
}

// REMINDER FUNCTIONS -----------------------------------------------
const onCreateReminderSuccess = function () {
    $('#reminder-display').show()
    $('#reminder-display').html('<p>reminder made</p>')
    $('#reminder-display').hide(3000)
    $('form').trigger('reset')
    $('#reminder-form').hide()
    $('#create-reminder-button').show()
}
const onCreateReminderFailure = function () {
    $('#reminder-display').html('<p>all fields required to create</p><p>or date must be a future date</p>')
}

const onIndexRemindersSuccess = function (response){
    let remindersList = ''
    response.reminders.forEach((reminder) => {
        remindersList += `
            <div class="reminder">
                <h4>${reminder.title}</h4>
                <h5>${reminder.text}</h5>
                <h5>${reminder.date.substring(0,10)}</h5>
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

const onUpdateReminderSuccess = function (){
    $('#reminder-display').html('<p>update success</p>')
    $('#reminder-display').hide(3000)
}
const onUpdateReminderFailure = function (){
    $('#reminder-display').html('<p>update error</p>')
}

const onSearchFailure = function (){
    $('#reminder-display').html('<p>search error</p>')
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
    onDeleteRemindersSuccess,
    onUpdateReminderFailure,
    onUpdateReminderSuccess,
    onSearchFailure
}