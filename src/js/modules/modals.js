const modals = () => {
    function bindModal(triggersSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const triggers = document.querySelectorAll(triggersSelector)
        const modal = document.querySelector(modalSelector)
        const close = document.querySelector(closeSelector)
        const windows = document.querySelectorAll('[data-modal]')

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
                    e.preventDefault();

                    windows.forEach(item => item.style.display = 'none')

                    showModal(modal)
                }
            })
        })
    }

    function showModal(modal) {
        modal.style.display = 'block'
        document.body.style.overflow = 'hidden';
    }

    function hideModal(modal) {
        modal.style.display = 'none'
        document.body.style.overflow = 'scroll';
    }

    function showModalByTime(selector, time) {
        setTimeout(() => {
            showModal(document.querySelector(selector))
        }, time)
    }


    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close')
    bindModal('.phone_link', '.popup', '.popup .popup_close')
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close')
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false)
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false)
    // showModalByTime('.popup', 60000)
}

export default modals