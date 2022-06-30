const popupImages = () => {
    const imgPopup = document.createElement('div')
    const workSection = document.querySelector('.works')
    const bigImage = document.createElement('img')

    imgPopup.classList.add('popup-img')

    imgPopup.append(bigImage)
    imgPopup.style.cssText = 'display: none; justify-content: center; align-items: center;'
    bigImage.style.maxHeight = '93vh'
    bigImage.style.maxWidth = '93vw'

    workSection.append(imgPopup)


    workSection.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('preview')) {
            e.preventDefault()

            document.body.style.overflow = 'hidden'
            bigImage.src = e.target.parentNode.href


            imgPopup.style.display = 'flex'

        }
        if (e.target && e.target.matches('div.popup-img')) {
            document.body.style.overflow = 'scroll'
            imgPopup.style.display = 'none'
        }
    })
}
export default popupImages