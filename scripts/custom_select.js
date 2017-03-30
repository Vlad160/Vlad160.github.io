function customInput () {
    let INPUT_MENU;
    let DROPDOWN_MENU;
    let CUSTOM_INPUT;
    let SELECTED = [];
    function init(items,id) {
        CUSTOM_INPUT = document.getElementById(id);
        INPUT_MENU = CUSTOM_INPUT.querySelector('.input');
        INPUT_MENU.addEventListener('click', handleClick);
        DROPDOWN_MENU = CUSTOM_INPUT.querySelector('.block-container');
        DROPDOWN_MENU.addEventListener('click', handleClickOnBlock);
        addItems(items);
        return this;
    }
    function addItems(items) {
        items.forEach(function (item) {
            DROPDOWN_MENU.appendChild(createOption(item));
        })
    }
    function createOption(item) {
        let option = document.createElement('div');
        option.className = "block";
        option.innerHTML = item;
        option.setAttribute("data-value",item);
        return option;
    }
    function handleClick(event) {
        let target = event.target;
        if (target.hasAttribute('data-value')) {
            DROPDOWN_MENU.appendChild(target.cloneNode(true));
            let index = SELECTED.indexOf(target.getAttribute('data-value'));
            SELECTED.splice(index,1);
            target.remove();
        }
        DROPDOWN_MENU.classList.add("show");
    }

    function handleClickOnBlock(event) {
        let target = event.target;
        if (target.hasAttribute('data-value')) {
            INPUT_MENU.appendChild(target.cloneNode(true));
            SELECTED.push(target.getAttribute('data-value'));
            target.remove();
        }
    }
    function getSelected() {
        return SELECTED;

    }
    document.addEventListener('click', function (e) {
        let container = CUSTOM_INPUT;
        if (container.getElementsByClassName(e.target.classList).length === 0) {
            if (DROPDOWN_MENU.classList.contains('show')) {
                DROPDOWN_MENU.classList.remove('show');
            }
        }
    });

    return {
        init: init,
        getSelected:getSelected
    }
};