import ProductOption from "./ProductOption.js";
import { request } from "./api.js";
const dummyData = [
  { optionId: 1, optionName: "더미1", optionPrice: 1000, stock: 10 },
  { optionId: 2, optionName: "더미2", optionPrice: 1000, stock: 12 },
  { optionId: 3, optionName: "더미3", optionPrice: 5000, stock: 10 },
  { optionId: 4, optionName: "더미4", optionPrice: 300, stock: 0 },
];
const fetchOptionData = () => {
  return request().then((data) => console.log(data));
};
fetchOptionData();
const $target = document.querySelector("#app");
new ProductOption({
  $target,
  initialState: dummyData,
  onSelect: (option) => alert(option.optionName),
});
