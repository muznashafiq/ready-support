const sliders = {
    basic: [
        "assets/image/basic1.png",
        "assets/image/basic2.png"     
    ],

    standard: [
        "assets/image/standard1.png",
        "assets/image/standard2.png"
    ],

    premium: [
        "assets/image/premium1.png",
        "assets/image/premium2.png"
    ],

    enterprise: [
        "assets/image/enterprise1.png",
        "assets/image/enterprise2.png"
    ]
};

const currentSlide = {
    basic:0,
    standard:0,
    premium:0,
    enterprise:0
};

function changeSlide(packageName,direction){

    currentSlide[packageName]+=direction;

    if(currentSlide[packageName] < 0){
        currentSlide[packageName] =
            sliders[packageName].length - 1;
    }

    if(currentSlide[packageName] >= sliders[packageName].length){
        currentSlide[packageName] = 0;
    }

    document.getElementById(
        packageName + "-img"
    ).src =
        sliders[packageName][
            currentSlide[packageName]
        ];
}