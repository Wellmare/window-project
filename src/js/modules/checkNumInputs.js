const checkNumInputs = (selector) => {
    const inputs = document.querySelectorAll(selector)
    inputs.forEach(item => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/g, '')
        })
    })
}

export default checkNumInputs