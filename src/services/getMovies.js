// import axios from "axios";
// import { addDoc, getDocs, collection } from "firebase/firestore";
// import { db } from "../firebase";

// (async () => {
//   const url =
//     "https://api.themoviedb.org/3/movie/popular?api_key=bc2c220b4c8c46f13d243867890a3e7c";

//   const res = await axios.get(url);
//   const data = res.data;
//   const dataMovies = data.results;

//   let obj = Object.assign({}, dataMovies);

//   // push data to firebase
//   // await addDoc(collection(db, "movies"), obj);

//   // get data from firebase
//   const querySnapshot = await getDocs(collection(db, "movies"));
//   const getMovies = querySnapshot.docs.map((doc) => doc.data());
//   const arrMovies = Object.values(getMovies);
//   console.log(getMovies);
//   // arrMovies.forEach((mov) => console.log(mov));
// })();
