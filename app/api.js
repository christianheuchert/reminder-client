'use strict'

const store = require('./store')
const config = require('./config.js')

const signUp = function (data) {
    return $.ajax({
        method: 'POST',
        url: config.apiUrl + '/sign-up',
        data
        // same as data: data
    })
}

const signIn = function (data) {
    return $.ajax({
        method: 'POST',
        url: config.apiUrl + '/sign-in',
        data
        // same as data: data
    })
}

const changePassword = function (data) {
    return $.ajax({
        method: 'PATCH',
        url: config.apiUrl + '/change-password',
        headers: {
            Authorization: 'Bearer ' + store.user.token
        },
        data
        // same as data: data
    })
}

const signOut = function () {
    return $.ajax({
        method: 'DELETE',
        url: config.apiUrl + '/sign-out',
        headers: {
            Authorization: 'Bearer ' + store.user.token
        }
    })
}

module.exports = {
    signUp,
    signIn,
    changePassword,
    signOut
}