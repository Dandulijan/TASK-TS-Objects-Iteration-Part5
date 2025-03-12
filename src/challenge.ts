// don't change this import statement
import { Fruit } from "./fruits";

/**
 * You can use this array
 * to manually test your code
 */
const fruits: Fruit[] = [
  {
    id: 501,
    name: "Apple",
    color: "Red",
    taste: "Sweet",
  },
  {
    id: 502,
    name: "Banana",
    color: "Yellow",
    taste: "Sweet",
  },
  {
    id: 503,
    name: "Orange",
    color: "Orange",
    taste: "Citrusy",
  },
  {
    id: 504,
    name: "Grapes",
    color: "Purple",
    taste: "Sweet",
  },
  {
    id: 505,
    name: "Kiwi",
    color: "Green",
    taste: "Tangy",
  },
];

interface FruitByTaste {
  [key: string]: string[];
}

/**
 * 🌶️🌶️🌶️ `fruitByTaste` function:
 * - Accepts:
 *   - A `fruits` array of type `Fruit[]`.
 * - Returns an object where:
 *   - The **keys** are unique taste categories.
 *   - The **values** are arrays of fruit names belonging to that taste.
 *
 * Example:
 *  fruitByTaste(fruits);
 *    // => {
 *    //    Sweet: ["Apple", "Banana", "Grapes"],
 *    //    Citrusy: ["Orange"],
 *    //    Tangy: ["Kiwi"]
 *    // }
 */
function fruitByTaste(fruits: Fruit[]): FruitByTaste {
  // Write your code here...
  const Taste: String[] = [];
  fruits.forEach((fruit) => {
    if (!Taste.includes(fruit.taste)) {
      Taste.push(fruit.taste);
    }
  });

  let FruitTasteList: FruitByTaste[] = [];

  fruits.forEach((fruit) => {
    if (fruit.taste === Taste[0])
      FruitTasteList[`${Taste[0]}`].push(fruit.name);
    else if (fruit.taste === Taste[1])
      FruitTasteList[`${Taste[1]}`].push(fruit.name);
    else FruitTasteList[`${Taste[2]}`].push(fruit.name);
  });
  return {}; // replace empty object with what you see is fit
}

export { fruitByTaste, FruitByTaste };
