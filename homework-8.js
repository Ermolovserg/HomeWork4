let myMap = new Map();

myMap.set("Ivan", "Semenov");
myMap.set("Sergey", "Matveev");
myMap.set("Maksim", "Sidorov")
for (let [key, value] of myMap) {
  console.log(`Ключ — ${key}, Значение — ${value}`);
}