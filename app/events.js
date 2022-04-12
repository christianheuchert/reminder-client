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
    console.log(data)

    authApi
        .signIn(data)
        .then((response) => authUi.onSignInSuccess(response))
        .catch(() => authUi.onSignInFailure())
}

const onChangePassword = function (event) {
    event.preventDefault()
    console.log("onChangePassword")

    // get data from form
    const form = event.target
    const data = getFormFields(form)
    console.log(data)

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

module.exports = {
    onSignUp,
    onSignIn,
    onChangePassword,
    onSignOut
}