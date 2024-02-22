type IFruit = {
  fruitId: number,
  fruitName: string,
  fruitType: 'IMPORT' | 'LOCAL',
  stock: number
}

const fruits: IFruit[] = [
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
const andisFruits = fruits.map(fruit => fruit.fruitName);

// 2. Andi memisahkan buahnya menjadi beberapa wadah berdasarkan tipe buah (fruitType).
// Berapa jumlah wadah yang dibutuhkan? Dan ada buah apa saja di masing-masing wadah?
const separatedFruitsByType: { [key: string]: string[] } = {};

fruits.forEach(fruit => {
  const { fruitType, fruitName } = fruit;
  const container = separatedFruitsByType[fruitType] || [];
  container.push(fruitName);
  separatedFruitsByType[fruitType] = container;
});

const numberOfContainers = Object.keys(separatedFruitsByType).length;

// 3. Berapa total stock buah yang ada di masing-masing wadah?
const totalStockByContainer: { [key: string]: number } = {};

fruits.forEach(fruit => {
  const { fruitType, stock } = fruit;
  totalStockByContainer[fruitType] = (totalStockByContainer[fruitType] || 0) + stock;
});

// 4. Apakah ada komentar terkait kasus di atas?
const comment = [
  'Andi sebaiknya menggunakan unique fruitId untuk setiap jenis buah agar tidak terjadi duplikasi.',
];

console.log("1. Buah yang dimiliki Andi:", andisFruits);
console.log("2. Jumlah wadah yang dibutuhkan:", numberOfContainers);
console.log("Buah di masing-masing wadah:", separatedFruitsByType);
console.log("3. Total stock buah di masing-masing wadah:", totalStockByContainer);
console.log("4. Komentar terkait kasus di atas:", comment);
