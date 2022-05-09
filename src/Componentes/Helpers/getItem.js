const itemList = [
  { id: 1, categoria: "celulares", name: "a52s", price: 89000, foto: "" },
  { id: 2, categoria: "celulares", name: "s22", price: 189000, foto: "" },
  { id: 3, categoria: "tablets", name: "a7 lite", price: 35000, foto: "" },
];

const getItem = new Promise((resolve, reject) => {
  let condition = true;
  if (condition) {
    setTimeout(() => {
      resolve(itemList);
    }, 3000);
  } else {
    reject("400 - not found");
  }
});

export default getItem;
