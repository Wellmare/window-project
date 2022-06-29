const validate = (items) => {
    let inputs = []
    let checkboxes = []
    items.forEach(item => {
        if (item.nodeName === 'INPUT' && item.type === 'text') {
            inputs.push(item)
        }
        if (item.nodeName === 'INPUT' && item.type === 'checkbox') {
            checkboxes.push(item)
        }
    })

    if (inputs.length) {
        let result = true
        inputs.forEach(item => {
            if (!item.value.trim().length) {
                result = false
            }
        })
        return result
    }

    if (checkboxes.length) {
        let result = false
        checkboxes.forEach(item => {
            if (item.checked) {
                result = true
            }
        })
        return result
    }
}
export default validate