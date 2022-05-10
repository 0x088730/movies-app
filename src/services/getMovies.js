// import axios from "axios";
// import { addDoc, getDocs, collection } from "firebase/firestore";
// import { db } from "../firebase";

// (async () => {
//   const url =
//     "https://api.themoviedb.org/3/movie/popular?api_key=bc2c220b4c8c46f13d243867890a3e7c&page=2";

//   const res = await axios.get(url);
//   const data = res.data;
//   const dataMovies = data.results;

//   const single = dataMovies.slice(1, 2);
//   const obj = Object.assign({}, single);

//   // push data to firebase
//   //   await addDoc(collection(db, "test"), obj);
//   const querySnapshot = await getDocs(collection(db, "test"));
//   const getMovies = querySnapshot.docs.map((doc) => doc.data());

//   for (let i of getMovies) {
//     let arr = [];
//     arr.push(i[0]);
//     arr.map((a) => console.log(a));
//   }
// })();
