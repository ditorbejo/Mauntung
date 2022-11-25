import nearbyBrands from "./data/nearbyBrands.json";

const fetch = (mockData, time = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, time);
  });
};

const listNearbyBrands = () => {
  return fetch(nearbyBrands, 1000);
};

export default {
  listNearbyBrands,
};
