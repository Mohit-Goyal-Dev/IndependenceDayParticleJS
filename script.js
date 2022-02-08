const removeBackGroundClass = () => document.getElementById("stripWhite").classList.remove("backGround");
const AddBackGroundClass = () => document.getElementById("stripWhite").classList.add("backGround");

const typeInWish = () => {
    var typed = new Typed('#show', {
        stringsElement: '#typed',
        typeSpeed: 60,
        backSpeed: 20,
        fadeOut: true,
        fadeOutClass: 'typed-fade-out',
        fadeOutDelay: 2000,
        showCursor: false,
        loop: true,
        loopCount: Infinity
    });

};
typeInWish();

//setInterval(() => {
//    removeBackGroundClass();
//    typeInWish();
//    console.log('tyingwish');
//    setTimeout(() => {
//        console.log("timeout entry");
//        AddBackGroundClass();
//    }, 6000);
//}, 8000);
