const shareBtn = document.querySelectorAll('.share-btn')
const shareTooltip = document.querySelector('.share-tooltip')

shareBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        shareTooltip.classList.toggle('hidden')
        btn.classList.toggle('clicked')
    })
})