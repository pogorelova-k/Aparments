// send-ajax-form
const sendForm = () => {
    const erorrMessage = 'Что-то пошло не так...',
        successMesage = 'Запрос отправлен успешно',
        loadMessage = `Загрузка...`,
        url = './server.php';

    const form = document.querySelector('form'),
        inputs = form.querySelectorAll('input'),
        sliders = form.querySelectorAll('.range__slider');

    const statusMessage = document.createElement('div');
    statusMessage.classList.add('status-mesage');


    const postData = body => fetch(url, {
        method: 'POST',
        // application/json - отправляем данные в формате json строки
        headers: {
            'Content-Type': 'application/json'
        },
        // данные из инпутов в формате json
        body: JSON.stringify(body)
    });

    // функция для отображения сообщения пользователю
    const outputData = (time = 5000) => {
        statusMessage.textContent = successMesage;
        setTimeout(() => {
            statusMessage.textContent = '';
        }, time);
    };

    // функция для отображения ошибки пользователю и в консоль
    const errorData = (error, time = 5000) => {
        statusMessage.textContent = erorrMessage;
        console.error(error);
        setTimeout(() => {
            statusMessage.textContent = '';
        }, time);
    };

    // sendForm
    const sendData = () => {
         // получаем значение из всех инпутов формы у которых есть атрибут name
        const formData = new FormData(form),
            body = {};

        form.append(statusMessage);
        statusMessage.innerHTML = loadMessage;

        // извлекаем данные из formData и добавляем в body
        formData.forEach((val, key) => {
            body[key] = val;
        });

        postData(body)
            .then(response => {
                if (response.status !== 200) {
                    throw new Error('status network not 200');
                }
                outputData();
            })
            .catch(error => errorData(error))
    };

    sliders.forEach(slider => slider.addEventListener('click', () => sendData()));
    inputs.forEach(input => input.addEventListener('input', () => sendData()));
};

export default sendForm;