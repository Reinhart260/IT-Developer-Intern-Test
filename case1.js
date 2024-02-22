"use strict";
var fruits = [
    {
        fruitId: 1,
        fruitName: 'Apel',
        fruitType: 'IMPORT',
        stock: 10
    },
    {
        fruitId: 2,
        fruitName: 'Kurma',
        fruitType: 'IMPORT',
        stock: 20
    },
    {
        fruitId: 3,
        fruitName: 'apel',
        fruitType: 'IMPORT',
        stock: 50
    },
    {
        fruitId: 4,
        fruitName: 'Manggis',
        fruitType: 'LOCAL',
        stock: 100
    },
    {
        fruitId: 5,
        fruitName: 'Jeruk Bali',
        fruitType: 'LOCAL',
        stock: 10
    },
    {
        fruitId: 6,
        fruitName: 'KURMA',
        fruitType: 'IMPORT',
        stock: 20
    },
    {
        fruitId: 7,
        fruitName: 'Salak',
        fruitType: 'LOCAL',
        stock: 150
    }
];
// 1. Buah apa saja yang dimiliki Andi? (fruitName)
var andisFruits = fruits.map(function (fruit) { return fruit.fruitName; });
// 2. Andi memisahkan buahnya menjadi beberapa wadah berdasarkan tipe buah (fruitType).
// Berapa jumlah wadah yang dibutuhkan? Dan ada buah apa saja di masing-masing wadah?
var separatedFruitsByType = {};
fruits.forEach(function (fruit) {
    var fruitType = fruit.fruitType, fruitName = fruit.fruitName;
    var container = separatedFruitsByType[fruitType] || [];
    container.push(fruitName);
    separatedFruitsByType[fruitType] = container;
});
var numberOfContainers = Object.keys(separatedFruitsByType).length;
// 3. Berapa total stock buah yang ada di masing-masing wadah?
var totalStockByContainer = {};
fruits.forEach(function (fruit) {
    var fruitType = fruit.fruitType, stock = fruit.stock;
    totalStockByContainer[fruitType] = (totalStockByContainer[fruitType] || 0) + stock;
});
// 4. Apakah ada komentar terkait kasus di atas?
var comment = [
    'Andi sebaiknya menggunakan unique fruitId untuk setiap jenis buah agar tidak terjadi duplikasi.',
];

console.log("1. Buah yang dimiliki Andi:", andisFruits);
console.log("2. Jumlah wadah yang dibutuhkan:", numberOfContainers);
console.log("Buah di masing-masing wadah:", separatedFruitsByType);
console.log("3. Total stock buah di masing-masing wadah:", totalStockByContainer);
console.log("4. Komentar terkait kasus di atas:", comment);
