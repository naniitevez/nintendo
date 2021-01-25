const elementVisible = (elto) => {
    var anchoViewport = window.innerWidth || document.documentElement.clientWidth;
    var alturaViewport = window.innerHeight || document.documentElement.clientHeight;
    //Posición de la caja del elemento
    var caja = elto.getBoundingClientRect();
    return (caja.top >= 0 &&
        caja.bottom <= alturaViewport &&
        caja.left >= 0 &&
        caja.right <= anchoViewport);
}


const windowOnScroll = () => {
    let elto = document.getElementById('isabelle')
    let birth = document.getElementById('birthdayDiv')
    let birthName = document.getElementById('birthName')
    let arrayTextForAnimate = document.getElementsByClassName("textForAnimate")



    if (elementVisible(elto)) {
        elto.classList.remove("hidden")
        elto.classList.add('animate__animated', 'animate__bounceInLeft');
    }

    if (elementVisible(birth)) {
        birth.classList.add('animate__animated', 'animate__bounceIn')
    }

    if (elementVisible(birthName)) {
        birthName.classList.add('animate__animated', 'animate__jackInTheBox')
    }

    for (text of arrayTextForAnimate) {
        if (elementVisible(text)) {
            text.classList.add('animate__animated', 'animate__backInDown')
        }
    }

}




window.onscroll = windowOnScroll;