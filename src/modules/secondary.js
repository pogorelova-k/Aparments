const secondary = () => {
    const arrow = document.querySelectorAll('.t-header__button'),
        roomsItems = document.querySelectorAll('.rooms__item');

    // arrow.forEach(item => {
    //     if (item.textContent === 'Сдача') {
    //         item.style.display = 'none';
    //     }
    // }); 

    // активация стрелки сортировки по-возрастанию
    arrow.forEach(item => item.addEventListener('click', () => {
        item.classList.toggle('t-header__button_active');
        item.querySelector('.arrow').classList.toggle('arrow-top_active');
    }));

    // добавления disabled input по классу rooms__item_disabled
    roomsItems.forEach(item => {
        if (item.classList.contains('rooms__item_disabled')) {
            item.querySelector('input').disabled = true;
        }
    });
}

export default secondary;