// import create from "zustand"; // create로 zustand를 불러옵니다.
// import axios from "axios";

// const transformData = (rawData) => {
//   const transformedData = {};
//   rawData.forEach((item) => {
//     const { coinName, coinPrice, date } = item;
//     const seriesName = coinName === "Coin1" ? "KOSPI 50" : "S&P 500";
//     if (!transformedData[coinName]) {
//       transformedData[coinName] = {
//         name: seriesName,
//         data: [],
//       };
//     }
//     transformedData[coinName].data.push({
//       x: new Date(date).getTime(),
//       y: coinPrice,
//     });
//   });
//   return Object.values(transformedData);
// };

// const useStore = create((set) => ({
//   CoinData: {},
//   fetchData: async () => {
//     try {
//       const response =
//         await axios.get`https://j9a510.p.ssafy.io:/api/coins/price`();
//       const response2 = transformData(response.data.data);
//       set({ CoinData: response2 });
//     } catch (error) {
//       console.log(error);
//     }
//   },
// }));

// export default useStore;
