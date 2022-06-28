import checkNumInputs from "./checkNumInputs";

const forms = () => {
    const forms = document.querySelectorAll('form')
    const inputs = document.querySelectorAll('form input')

    checkNumInputs('input[name="user_phone"]')

    const messages = {
        loading: 'Загрузка...', success: 'Форма отправлена', failure: 'Что-то пошло не так...'
    }
    const postData = async (url, data) => {
        document.querySelector('.status').textContent = messages.loading

        const res = await fetch(url, {
            method: 'POST', // headers: {},
            body: data
        })
        return await res.text()
    }
    const clearInputs = () => inputs.forEach(input => input.value = '')


    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('div')
            statusMessage.classList.add('status')
            form.append(statusMessage)

            const formData = new FormData(form)

            postData('assets/server.php', formData)
                .then(result => {
                    console.log(result)
                    statusMessage.textContent = messages.success
                })
                .catch(() => {
                    statusMessage.textContent = messages.failure
                })
                .finally(() => {
                    clearInputs()
                    setTimeout(()=>{
                        statusMessage.remove()
                    }, 3000)
                })
        })
    })
}

export default forms