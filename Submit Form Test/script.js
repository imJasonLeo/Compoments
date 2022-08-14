const buttons = document.querySelectorAll('.btn')
const userRating = document.querySelector('.user-rating')
const submitBtn = document.querySelector('.submit-btn')

const fullscreen = document.querySelector('.fullscreen-container')
const response = document.querySelector('.response-container')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // console.log(button.innerHTML)
        userRating.innerHTML = button.innerHTML
    })
})

submitBtn.addEventListener('click', (e) => {
    // console.log(String(userRating.innerHTML))

    if (userRating.innerHTML === '' || userRating.innerHTML === undefined) {
        e.preventDefault()
        console.log('Please Select A Rating')
    } else {
        localStorage.setItem('rating', String(userRating.innerHTML))
        fullscreen.classList.add('hidden')
        response.classList.remove('hidden')
    }
})