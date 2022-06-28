import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img')
    const windowWidth = document.querySelectorAll('#width')
    const windowHeight = document.querySelectorAll('#height')
    const windowType = document.querySelectorAll('#view_type')
    const windowProfile = document.querySelectorAll('.checkbox')

    checkNumInputs('.num-input')

    bindActionToElems('click', windowForm, 'form')
    bindActionToElems('input', windowWidth, 'width')
    bindActionToElems('input', windowHeight, 'height')
    bindActionToElems('change', windowType, 'type')
    bindActionToElems('change', windowProfile, 'profile')

    function bindActionToElems(event, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, (e) => {
                if (elem.length === 1) {
                    state[prop] = e.target.value
                } else {
                    state[prop] = i
                }
                console.log(state)
            })
        })
    }
}
export default changeModalState