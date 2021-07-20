// // async function defaultMenu(){
// //   let finalResult;
// //   try {
// //     const url = fetch('https://www.themealdb.com/api/json/v1/1/search.php?s', {
// //       mode: 'cors'
// //     });
// //     const response = await url;
// //     const result = response.json();
// //     const final = await result;
// //     const arr = final;
// //     finalResult = arr.meals
// //     return finalResult;
// //   } catch (error) {
// //     return error;
// //   }
// // }

// const defaultMenu = () => {
//   return fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
//             .then(response => response.json())
//             .then(result => console.log(result.meals))
//             .catch(err => err)
// }


// export default defaultMenu;
