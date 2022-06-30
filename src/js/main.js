import './modules/slider'
import modals from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import changeModalState from "./modules/changeModalState";
import timer from "./modules/timer";
import popupImages from "./modules/popup-images";


window.addEventListener('DOMContentLoaded', () => {
    modals()

    let modalState = {
        form: 0,
        type: 'tree'
    }
    const deadline = '2022-06-30, 16:00'

    changeModalState(modalState)

    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active')
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click')
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block')

    forms(modalState)

    timer('#timer', deadline)

    popupImages()
})