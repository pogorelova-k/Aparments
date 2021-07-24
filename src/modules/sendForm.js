const sendForm = () => {
    const form = document.querySelector('form'),
        inputs = form.querySelectorAll('input'),
        sliders = form.querySelectorAll('.range__slider'),
        url = './server.php';

    const postData = body => fetch(url, {
        method: 'POST',
        // application/json - отправляем данные в формате json строки
        headers: {
            'Content-Type': 'application/json'
        },
        // данные из инпутов в формате json
        body: JSON.stringify(body)
    });

    // sendForm
    const sendData = () => {
         // получаем значение из всех инпутов формы у которых есть атрибут name
        const formData = new FormData(form),
            body = {};

        // извлекаем данные из formData и добавляем в body
        formData.forEach((val, key) => {
            body[key] = val;
        });

        postData(body)
            .then(response => {
                if (response.status !== 200) {
                    throw new Error('status network not 200');
                }
                // outputData();
            })
            .catch(error => console.warn(error))
    };

    sliders.forEach(slider => slider.addEventListener('click', () => sendData()));
    inputs.forEach(input => input.addEventListener('input', () => sendData()));
};

export default sendForm;