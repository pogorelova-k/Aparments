const COUNT_ROW_GOODS = 5; // количество товаров для вывода

// запрос
const getData = (url, callback) => {
    const request = new XMLHttpRequest(); 

    request.open('GET', url); 

    request.addEventListener('readystatechange', () => { 
    if (request.readyState !== 4) return;
    if (request.status === 200) { 
        const response = JSON.parse(request.response);
        callback(response);
    } else {
        console.error(new Error('Ошибка:' + request.statusText));
    }
    });

    request.send();
};

// фукция рендера элементов
const renderCrossSell = () => {
    const crossSellList = document.querySelector('.t-body__list'),
        crossSellAdd = document.querySelector('.result__button');
    const allGoods = [];
    let wrapRender = null;


    // функция рандома, чтобы выводить по 5 рандомных товара
    const shuffle = arr => arr.sort();

    // функция, которая добавляет товары из db.json
    const createCrossSellItem = ({ name, square, floor, total_floors, price, img }) => {

        // создаем li элемент
        const liItem = document.createElement('li');
        liItem.classList.add('t-body__item');
        // вставляем верстку в Li
        liItem.innerHTML = `
            <div class="t-body__left">
                <img src="${img}" alt="Планировка">
                <p class="t-body__name">${name}</p>
            </div>
            <div class="t-body__right">
                <p class="t-body__square">${square}</p>
                <p class="t-body__floor">${floor} <span>из ${total_floors}</span></p>
                <p class="t-body__price">${price.replace(/(\d)(?=(\d{3})+$)/g, '$1 ')}</p>
            </div>
        `;
        return liItem;
    }

    const render = arr => {
        arr.forEach(item => {
            crossSellList.append(createCrossSellItem(item));
        })
    }

    const wrapper = (fn, count) => {
        let counter = 0;
        return (...args) => {
            if (counter === count) return;
            counter++;
            return fn(...args);
        }
    };

    // получеам и перебираем массив данных
    const createCrossSellList = (goods) => {

        wrapRender = wrapper(render, parseInt(goods.length/COUNT_ROW_GOODS) + 1);

        allGoods.push(...shuffle(goods))
        const fourItems = allGoods.splice(0, COUNT_ROW_GOODS);
        render(fourItems);
    };

    crossSellAdd.addEventListener('click', () => {
        wrapRender(allGoods.splice(0, COUNT_ROW_GOODS));
        
        if (allGoods.length === length) {
            crossSellAdd.remove();
        }
    })

    // получаем данные по этому адресу и они прилетают в createCrossSellList
    getData('db.json', createCrossSellList);
};

export default renderCrossSell;