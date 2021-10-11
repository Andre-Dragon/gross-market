'use strict';

const mapBtns = document.querySelector('.map__btns');
const mapButton = document.querySelectorAll('.map__button');
let myMap;

// Список городов и магазинов в них
const shopList = [
    {
      'userId': 'legal',
      'shops': [
        {'coordinates': [55.81187388363143,37.830908755766345], 'name': 'Щёлковское шоссе, 100к100'},
        {'coordinates': [55.87589629776184,37.66917770455113], 'name': 'Енисейская улица, 36с1'},
        {'coordinates': [55.630327707851094,37.521674194493066], 'name': 'Профсоюзная улица, 113к3'},
        {'coordinates': [55.71610812643423,37.39245358971247], 'name': 'Барвихинская улица, 4к1'},
        {'coordinates': [55.68155645949082,37.534778711464554], 'name': 'Ленинский проспект, 82'}
      ]
    },
    {
      'userId': 'physical',
      'shops': [
        {'coordinates': [55.70873540711816,37.72283282836824], 'name': 'Волгоградский проспект, 42к5'},
        {'coordinates': [55.76739696234218,37.62308642917381], 'name': 'Цветной бульвар, 2'},
        {'coordinates': [55.8047746050791,37.41226836935092], 'name': 'улица Маршала Катукова, 22'},
        {'coordinates': [55.77651878552145,37.53702141127527], 'name': 'Хорошёвское шоссе, 38'},
        {'coordinates': [55.65809920682801,37.765820185071746], 'name': 'Новомарьинская улица, 17'}
    ]
  }
];

ymaps.ready(init);

function init() {

  // Создаем карту
  myMap = new ymaps.Map("map", {
    center: [55.76, 37.64],
    zoom: 10,
    type: 'yandex#publicMap',
    controls: [
      'zoomControl',
      // 'rulerControl',
      'routeButtonControl', 
      'trafficControl', 
      'fullscreenControl',

      new ymaps.control.SearchControl({
        options: {
          size: 'small',
          provider: 'yandex#search'
        }
      })
    ],
      zoomMargin: [20]
  });

  shopsHandler();
}

function placemarkHundler(shops) {
  
  // Создаём коллекцию меток для города
  let cityCollection = new ymaps.GeoObjectCollection();
  myMap.geoObjects.removeAll(cityCollection);
  
  shops.forEach( item => {
    
    let shopPlacemark = new ymaps.Placemark(
      item.coordinates,
      {
        hintContent: item.name,
        balloonContent: item.name
      },
      {
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: '/images/icons/point.svg',
        // Размеры метки.
        iconImageSize: [44, 44],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        // iconImageOffset: [-16, -16]
      }
    );

    // Добавляем метку в коллекцию
    cityCollection.add(shopPlacemark);

  });

  // Добавляем коллекцию на карту
  myMap.geoObjects.add(cityCollection);

}

function sizeMap() {	
  myMap.setBounds(myMap.geoObjects.getBounds(), 
    {
      checkZoomRange:true
    }).then(() => {
      if(myMap.getZoom() > 10) myMap.setZoom(10); // Если значение zoom превышает 10, то устанавливаем 10.
  });
}

// Функции добавления метки магазинов
function shopsHandler() {
  let shopsAll = [];
  shopList.forEach( item => {
    if (!item.shops) return;
    shopsAll = shopsAll.concat(item.shops);
  });

  placemarkHundler(shopsAll);
}


function shopsUserId(id) {
  shopList.find( item => {
    if (item.userId !== id) return;
    placemarkHundler(item.shops);
  });
}

// Обработка кнопок
function deactivationBtnActive() {
  mapButton.forEach(item => item.classList.remove('map__button--active'));
}

function callHandlerBts( target ) {
  if (target.classList.contains('button-showall')) {
    shopsHandler();
  } else if (target.classList.contains('button-legalentities')) {
    shopsUserId(target.dataset.userId);
  } else if (target.classList.contains('button-individuals')) {
    shopsUserId(target.dataset.userId);
  }
  
  sizeMap();
}

mapButton.forEach(btn => btn.addEventListener('click', ({target}) => {
  deactivationBtnActive();
  callHandlerBts(target);
  btn.classList.add('map__button--active');
}));


