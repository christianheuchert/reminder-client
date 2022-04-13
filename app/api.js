'use strict'

const store = require('./store')
const config = require('./config.js')

//USER FUNCTIONS --------------------------------------
const signUp = function (data) {
    return $.ajax({
        method: 'POST',
        url: config.apiUrl + '/sign-up',
        data
    })
}

const signIn = function (data) {
    return $.ajax({
        method: 'POST',
        url: config.apiUrl + '/sign-in',
        data
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

// REMINDER FUNTIONS --------------------------------------
const createReminder = function(data){
    return $.ajax({
        method: 'POST',
        url: config.apiUrl + '/reminders',
        headers: {
            Authorization: 'Bearer ' + store.user.token
        },
        data: data
    })
}

const indexReminders = function(){
    return $.ajax({
        method: 'GET',
        url: config.apiUrl + '/reminders',
        headers: {
            Authorization: 'Bearer ' + store.user.token
        }
    })
}

const deleteReminder = function(reminderId){
    return $.ajax({
        method: 'DELETE',
        url: config.apiUrl + '/reminders/'+reminderId,
        headers: {
            Authorization: 'Bearer ' + store.user.token
        }
    })
}

const updateReminder = function(data, reminderId){
    return $.ajax({
        method: 'PATCH',
        url: config.apiUrl + '/reminders/'+reminderId,
        headers: {
            Authorization: 'Bearer ' + store.user.token
        },
        data:data
    })
}

module.exports = {
    // user fxns
    signUp,
    signIn,
    changePassword,
    signOut,
    // reminder fxns
    createReminder,
    indexReminders,
    deleteReminder,
    updateReminder
}