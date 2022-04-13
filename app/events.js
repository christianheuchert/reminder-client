const store = require('./store.js')
const getFormFields = require('../lib/get-form-fields.js')
const authUi = require('./ui.js')
const authApi = require('./api.js')

const onSignUp = function (event) {
    event.preventDefault()
    console.log('onSignUp')

    // get data from form
    const form = event.target
    const data = getFormFields(form)
    console.log(data)

    authApi.signUp(data)
        .then(() => authUi.onSignUpSuccess())
        .catch(() => authUi.onSignUpFailure())
}

const onSignIn = function (event) {
    event.preventDefault()
    console.log("onSignIn")
    // get data from form
    const form = event.target
    const data = getFormFields(form)

    authApi
        .signIn(data)
        .then((response) => authUi.onSignInSuccess(response))
        .then(onIndexReminders)
        .catch(() => authUi.onSignInFailure())
}

const onChangePassword = function (event) {
    event.preventDefault()
    console.log("onChangePassword")

    // get data from form
    const form = event.target
    const data = getFormFields(form)

    authApi
        .changePassword(data)
        .then((response) => authUi.onChangePasswordSuccess(response))
        .catch(() => authUi.onChangePasswordFailure())
}

const onSignOut = function () {
    console.log("onSignOut")
    authApi
        .signOut()
        .then(() => authUi.onSignOutSuccess())
        .catch(() => authUi.onSignOutFailure())
}

// REMINDER FUNCTIONS -------------------------------------------------

const onCreateReminder = function (event) {
    event.preventDefault()
    const form = event.target
    const data = getFormFields(form)

    authApi
        .createReminder(data)
        .then(() => authUi.onCreateReminderSuccess())
        .then(onIndexReminders)
        .catch(() => authUi.onCreateReminderFailure())
}

const onIndexReminders = function () {

    authApi.indexReminders()
        .then(authUi.onIndexRemindersSuccess)
        .catch(authUi.onIndexRemindersFailure)
}

const onDeleteReminder = function(event){
    event.preventDefault()
    const clicked = event.target
    const reminderId = $(clicked).data('id')
    console.log(reminderId)
    authApi
        .deleteReminder(reminderId)
        .then(authUi.onDeleteRemindersSuccess)
        .then(onIndexReminders)
        .catch(authUi.onDeleteRemindersFailure)
}

const onUpdateReminder = function(event){
    event.preventDefault()
    const clicked = event.target
    const reminderId = $(clicked).data('id')
    const data = getFormFields(clicked)

    authApi.updateReminder(data, reminderId)
    .then(onIndexReminders)

}

module.exports = {
    //user fxns
    onSignUp,
    onSignIn,
    onChangePassword,
    onSignOut,
    // reminder fxns
    onCreateReminder,
    onIndexReminders,
    onDeleteReminder,
    onUpdateReminder
}