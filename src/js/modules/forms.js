import checkNumInputs from "./checkNumInputs";

const forms = (state) => {
    const forms = document.querySelectorAll('form')


    checkNumInputs('input[name="user_phone"]')
    checkNumInputs('.num-input')


    const messages = {
        loading: 'Загрузка...', success: 'Спасибо! Мы с вами скоро свяжемся', failure: 'Что-то пошло не так...'
    }
    const postData = async (url, data) => {
        document.querySelector('.status').textContent = messages.loading

        const res = await fetch(url, {
            method: 'POST', // headers: {},
            body: data
        })
        return await res.text()
    }
    const clearInputs = () => {
        const inputs = document.querySelectorAll('input')
        const checkboxes = document.querySelectorAll('input[type="checkbox"]')
        inputs.forEach(input => input.value = '')
        checkboxes.forEach(item => item.checked = false)
    }


    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('div')
            statusMessage.classList.add('status')
            form.append(statusMessage)

            const formData = new FormData(form)
            if (form.getAttribute('data-calc') === 'end') {
                Object.entries(state).forEach(item => {
                    formData.append(item[0], item[1])
                })
            }

            postData('assets/server.php', formData)
                .then(result => {
                    statusMessage.textContent = messages.success
                })
                .catch(() => {
                    statusMessage.textContent = messages.failure
                })
                .finally(() => {
                    clearInputs()
                    state = {
                        form: 0, type: 'tree'
                    }
                    setTimeout(() => {
                        statusMessage.remove()
                        document.querySelectorAll('[data-modal]').forEach(item => item.style.display = 'none')
                        document.body.style.overflow = 'scroll';
                    }, 3000)
                })
        })
    })
}

export default forms