const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
    const header = document.querySelector(headerSelector)
    const tabs = document.querySelectorAll(tabSelector)
    const contents = document.querySelectorAll(contentSelector)

    function hideTabContent() {
        contents.forEach(item => {
            item.style.display = 'none'
        })
        tabs.forEach(item => {
            item.classList.remove(activeClass)
        })
    }

    function showTabContent(index = 0) {
        contents[index].style.display = display
        tabs[index].classList.add(activeClass)
    }

    header.addEventListener('click', (e) => {
        const target = e.target
        if (target && target.classList.contains(tabSelector.replace(/\./, '')) || target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
            tabs.forEach((tab, index) => {
                if (tab === target || target.parentNode === tab) {
                    hideTabContent()
                    showTabContent(index)
                }
            })
        }
    })

    hideTabContent()
    showTabContent()
}
export default tabs

