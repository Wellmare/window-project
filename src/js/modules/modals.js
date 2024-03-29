import validate from "./validation";

const modals = () => {
    function bindModal(triggersSelector, modalSelector, closeSelector, dependentInputsSelectors, closeClickOverlay = true) {
        const triggers = document.querySelectorAll(triggersSelector)
        const modal = document.querySelector(modalSelector)
        const close = document.querySelector(closeSelector)
        const windows = document.querySelectorAll('[data-modal]')

        let dependentInputs
        if (dependentInputsSelectors) {
            if (Array.isArray(dependentInputsSelectors)) {
                dependentInputs = dependentInputsSelectors.map(item => {
                    const items = document.querySelectorAll(item)
                    return items.length === 1 ? items[0] : items
                })
            } else {
                dependentInputs = document.querySelectorAll(dependentInputsSelectors)
            }
        }

        close.addEventListener('click', () => {
            windows.forEach(item => item.style.display = 'none')
            hideModal(modal)
        })
        modal.addEventListener('click', (e) => {
            if (e.target && e.target === modal && closeClickOverlay) {
                windows.forEach(item => item.style.display = 'none')
                hideModal(modal)
            }
        })
        triggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                if (e.target) {
                    if (!dependentInputsSelectors || validate(dependentInputs)) {
                        e.preventDefault();

                        windows.forEach(item => item.style.display = 'none')
                        showModal(modal)
                    } else {
                        alert('Вы заполнили не все поля')
                    }
                }
            })
        })
    }

    const scroll = calcScroll()

    function showModal(modal) {
        document.body.style.marginRight = scroll + 'px'

        modal.style.display = 'block'
        document.body.style.overflow = 'hidden';
    }

    function hideModal(modal) {
        document.body.style.marginRight = 0
        modal.style.display = 'none'
        document.body.style.overflow = 'scroll';
    }

    function showModalByTime(selector, time) {
        setTimeout(() => {
            showModal(document.querySelector(selector))
        }, time)
    }

    function calcScroll() {
        const div = document.createElement('div')

        div.style.width = '50px'
        div.style.height = '50px'
        div.style.overflowY = 'scroll'
        div.style.visibility = 'hidden'

        document.body.append(div)
        const scrollWidth = div.offsetWidth - div.clientWidth
        div.remove()
        return scrollWidth
    }


    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close')
    bindModal('.phone_link', '.popup', '.popup .popup_close')
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close')
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', ['#width', '#height'], false)
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', '.checkbox-type', false)
    showModalByTime('.popup', 60000)
}

export default modals