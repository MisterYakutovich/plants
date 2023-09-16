const serviceBtns = document.querySelectorAll('.button_item');
const cardItems = document.querySelectorAll('.img_items');

let count = 0;
serviceBtns[0].addEventListener('click', () => {
    if (serviceBtns[0].classList.contains('active')) {
        count--
        serviceBtns[0].classList.remove('active');

        if (!serviceBtns[1].classList.contains('active') && !serviceBtns[2].classList.contains('active')) {
            cardItems[1].classList.remove('hidden_blur');
            cardItems[2].classList.remove('hidden_blur');
            cardItems[3].classList.remove('hidden_blur');
            cardItems[5].classList.remove('hidden_blur');
        } else if (serviceBtns[1].classList.contains('active') && !serviceBtns[2].classList.contains('active')) {
            cardItems[0].classList.add('hidden_blur');
            cardItems[4].classList.add('hidden_blur');
        } else if (!serviceBtns[1].classList.contains('active') && serviceBtns[2].classList.contains('active')) {
            cardItems[0].classList.add('hidden_blur');
            cardItems[4].classList.add('hidden_blur');
        }
    } else {
        if (count !== 2) {
            count++
            serviceBtns[0].classList.add('active');
        } 

        if (!serviceBtns[1].classList.contains('active') && !serviceBtns[2].classList.contains('active')) {
            cardItems[1].classList.add('hidden_blur');
            cardItems[2].classList.add('hidden_blur');
            cardItems[3].classList.add('hidden_blur');
            cardItems[5].classList.add('hidden_blur');
        } else if (serviceBtns[1].classList.contains('active') && !serviceBtns[2].classList.contains('active')) {
            cardItems[0].classList.remove('hidden_blur');
            cardItems[4].classList.remove('hidden_blur');
            cardItems[1].classList.add('hidden_blur');
            cardItems[2].classList.add('hidden_blur');
            cardItems[5].classList.add('hidden_blur');
        } else if (!serviceBtns[1].classList.contains('active') && serviceBtns[2].classList.contains('active')) {
            cardItems[0].classList.remove('hidden_blur');
            cardItems[4].classList.remove('hidden_blur');
        }
    }
})

serviceBtns[1].addEventListener('click', () => {
    if (serviceBtns[1].classList.contains('active')) {
        count--
        serviceBtns[1].classList.remove('active');


        if (!serviceBtns[0].classList.contains('active') && !serviceBtns[2].classList.contains('active')) {
            cardItems[0].classList.remove('hidden_blur');
            cardItems[1].classList.remove('hidden_blur');
            cardItems[2].classList.remove('hidden_blur');
            cardItems[3].classList.remove('hidden_blur');
            cardItems[4].classList.remove('hidden_blur');
            cardItems[5].classList.remove('hidden_blur');
        } else if (serviceBtns[0].classList.contains('active') && !serviceBtns[2].classList.contains('active')) {
            cardItems[3].classList.add('hidden_blur');
        } else if (!serviceBtns[0].classList.contains('active') && serviceBtns[2].classList.contains('active')) {
            cardItems[3].classList.add('hidden_blur');
        }
    } else {
        if (count !== 2) {
            count++
            serviceBtns[1].classList.add('active');
        }

        if (!serviceBtns[0].classList.contains('active') && !serviceBtns[2].classList.contains('active')) {
            cardItems[0].classList.add('hidden_blur');
            cardItems[1].classList.add('hidden_blur');
            cardItems[2].classList.add('hidden_blur');
            cardItems[4].classList.add('hidden_blur');
            cardItems[5].classList.add('hidden_blur');
        } else if (serviceBtns[0].classList.contains('active') && !serviceBtns[2].classList.contains('active')) {
            cardItems[3].classList.remove('hidden_blur');
            cardItems[1].classList.add('hidden_blur');
            cardItems[2].classList.add('hidden_blur');
            cardItems[5].classList.add('hidden_blur');
        } else if (!serviceBtns[0].classList.contains('active') && serviceBtns[2].classList.contains('active')) {
            cardItems[3].classList.remove('hidden_blur');
        }
    }
})

serviceBtns[2].addEventListener('click', () => {
    if (serviceBtns[2].classList.contains('active')) {
        count--
        serviceBtns[2].classList.remove('active');

        if (!serviceBtns[0].classList.contains('active') && !serviceBtns[1].classList.contains('active')) {
            cardItems[0].classList.remove('hidden_blur');
            cardItems[3].classList.remove('hidden_blur');
            cardItems[4].classList.remove('hidden_blur');
        } else if (serviceBtns[0].classList.contains('active') && !serviceBtns[1].classList.contains('active')) {
            cardItems[1].classList.add('hidden_blur');
            cardItems[2].classList.add('hidden_blur');
            cardItems[5].classList.add('hidden_blur');
        } else if (!serviceBtns[0].classList.contains('active') && serviceBtns[1].classList.contains('active')) {
            cardItems[1].classList.add('hidden_blur');
            cardItems[2].classList.add('hidden_blur');
            cardItems[5].classList.add('hidden_blur');
        }

    } else {
        if (count !== 2) {
            count++
            serviceBtns[2].classList.add('active');


            if (!serviceBtns[0].classList.contains('active') && !serviceBtns[1].classList.contains('active')) {
                cardItems[0].classList.add('hidden_blur');
                cardItems[3].classList.add('hidden_blur');
                cardItems[4].classList.add('hidden_blur');
            } else if (serviceBtns[0].classList.contains('active') && !serviceBtns[1].classList.contains('active')) {
                cardItems[1].classList.remove('hidden_blur');
                cardItems[2].classList.remove('hidden_blur');
                cardItems[5].classList.remove('hidden_blur');
            } else if (!serviceBtns[0].classList.contains('active') && serviceBtns[1].classList.contains('active')) {
                cardItems[1].classList.remove('hidden_blur');
                cardItems[2].classList.remove('hidden_blur');
                cardItems[5].classList.remove('hidden_blur');
            }
        }
    }
})