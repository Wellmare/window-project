const timer = (parentSelector, deadline) => {
    const getTimeRemaining = (endTime) => {
        const time = Date.parse(endTime) - Date.parse(new Date())
        const seconds = Math.floor((time / 1000) % 60)
        const minutes = Math.floor((time / 1000 / 60) % 60)
        const hours = Math.floor((time / 1000 / 60 / 60) % 24)
        const days = Math.floor((time / 1000 / 60 / 60 / 24))

        return {
            total: time, days, hours, minutes, seconds
        }
    }
    const setClock = (selector, endTime) => {
        const timer = document.querySelector(selector)
        const daysNode = timer.querySelector('#days')
        const hoursNode = timer.querySelector('#hours')
        const minutesNode = timer.querySelector('#minutes')
        const secondsNode = timer.querySelector('#seconds')
        const timeInterval = setInterval(updateClock, 1000)

        updateClock()

        function updateClock() {
            const {total, days, hours, minutes, seconds} = getTimeRemaining(endTime)

            if (total > 0) {
                daysNode.textContent = addZero(days)
                hoursNode.textContent = addZero(hours)
                minutesNode.textContent = addZero(minutes)
                secondsNode.textContent = addZero(seconds)
            } else {
                daysNode.textContent = '00'
                hoursNode.textContent = '00'
                minutesNode.textContent = '00'
                secondsNode.textContent = '00'
                clearInterval(timeInterval)
            }
        }
    }
    const addZero = num => num < 10 ? '0' + num : num.toString()

    setClock(parentSelector, deadline)

    // setInterval(() => {
    //     console.log('ss')
    //     setClock(parentSelector, deadline)
    // }, 1000)
}
export default timer