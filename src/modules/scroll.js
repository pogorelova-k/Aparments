// плавный скролл
const scroll = () => {
    const scrollLinks = document.querySelectorAll(".scroll"),
        totop = document.querySelector('.topUp');

    for (const scrollLink of scrollLinks) {
        scrollLink.addEventListener("click", event => {
            // отключаем обычный способ возвращения наверх
            event.preventDefault();
            // задаем свои свойства скролла, делаем плавно
            const id = scrollLink.children[0].getAttribute('href');
            document.querySelector(id).scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        });
    }

    // появление кнопки top при скролле вниз
    window.addEventListener('scroll', () => {
        if (pageYOffset > 300) {
            // добавляем кнопку top up
            totop.style.display = 'block';
        } else {    
            totop.style.display = 'none';
        }
    });
};

export default scroll;