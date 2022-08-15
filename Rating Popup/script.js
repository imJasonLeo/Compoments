const buttons = document.querySelectorAll('.rating-btn')
const submitBtn = document.querySelector('.submit-btn')
const userSelected = document.querySelector('.user-selected')
const ratingWidget = document.querySelector('.rating-widget')
const confirmMsg = document.querySelector('.confirmation-msg')
let userRating


buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault()
        userRating = button.innerHTML
        console.log('User Selected: ' + String(userRating))
    })
})

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (userRating === undefined || userRating === '') {
        window.alert('Please Select A Value')
    } else {
        localStorage.setItem('userRating', String(userRating))
        userSelected.innerHTML = localStorage.getItem('userRating')
        console.log('User Submitted: ' + String(userRating))

        ratingWidget.classList.add('hidden')
        confirmMsg.classList.remove('hidden')

    }
})
