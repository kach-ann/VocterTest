const cars ={
    "мини": "img/picsCar/ситроен/",
    "средний": "img/picsCar/мазда/",
    "премиум": "img/picsCar/мерседес/"
};

const typeCar ={
    "минимальный": "минимальный.jpg",
    "стандарт": "стандарт.jpg",
    "стандарт+": "стандарт+.jpg",
    "стандарт++": "стандарт++.jpg",
    "стандарт+++": "стандарт+++.jpg",
    "целиком": "целиком.jpg"
};

const parts = {
    "оптика": "оптика.jpg",
    "пороги-внутренние": "пороги-внутренние.jpg",
    "пороги-наружные": "пороги-наружние.jpg",
    "двери": "двери.jpg",
    "задние-крылья": "задние-крылья.jpg",
    "капот": "капот.jpg",
    "передний-бампер": "передний-бампер.jpg",
    "задний-бампер": "задний-бампер.jpg"
}

var selectedClass = "премиум";

const dropdownBtn = document.querySelector('.plan-item-parts');

dropdownBtn.addEventListener('click', function () {
    const dropdownItems = document.getElementById('dropdown-items');
    if(dropdownItems.classList.contains('dropdown-content--active')){
        dropdownItems.classList.remove('dropdown-content--active');
        dropdownBtn.classList.remove('plan-item-parts--active');
    }else{
        dropdownItems.classList.add('dropdown-content--active');
        dropdownBtn.classList.add('plan-item-parts--active');
    }
});

let pointer = document.querySelectorAll('.car-price');
pointer.forEach(function(elem) {
    elem.addEventListener("click", function() {
        const arrows = document.querySelectorAll('.arrow');
        arrows.forEach(function (item) {
            item.classList.remove('arrow--active');
        });
        var  arrow = elem.querySelector('.arrow');
        arrow.classList.add('arrow--active');
        selectedClass = elem.dataset.className;
        planSelectHandler(document.querySelector('.plan-item[data-plan-name="стандарт++"]'))();
    });
});


function planSelectHandler (plan) {
    return function () {
        allPlans.forEach(function (item) {
            item.classList.remove('plan-item--active');
        });
        plan.classList.add('plan-item--active');
        let carImg = typeCar[plan.dataset.planName];

        const carImageElement = document.querySelector('.car-pic img');
        carImageElement.src = cars[selectedClass]+carImg;
    }

}

const allPlans = document.querySelectorAll('.plan-item[data-plan-name]');
allPlans.forEach(function (plan) {
    plan.addEventListener("mouseover", planSelectHandler(plan));
});

const allItemParts = document.querySelectorAll('.dropdown-content .plan-item');
allItemParts.forEach((function (part) {
    part.addEventListener("mouseover", function () {
        allItemParts.forEach(function (part) {
            part.classList.remove('plan-item--active');
        });
        part.classList.add('plan-item--active');
        let partImg = parts[part.dataset.planImage];

        const partImageElement = document.querySelector('.car-pic img');
        partImageElement.src = cars[selectedClass]+partImg;
    })
}));


