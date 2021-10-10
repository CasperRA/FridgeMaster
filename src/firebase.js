// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: "AIzaSyAVlNcSp-dIkkY0YtIIE3cswMi6jH_BilY",
    authDomain: "genskab-58d4e.firebaseapp.com",
    databaseURL: "https://genskab-58d4e-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "genskab-58d4e",
    storageBucket: "genskab-58d4e.appspot.com",
    messagingSenderId: "794265300626",
    appId: "1:794265300626:web:0411671129ab5f1bd1004b",
    measurementId: "G-EHCBVGLSLW"
  };

// export const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
// export const foodRef = async function refFood(db) {
//   const foodCol = collection(db, 'food')
// }

// export const foodRef = db.collection('users').doc("user1").collection("food").doc("item-1");
// const foodCollection = db.collection('users').doc("user1").collection("food");

// export const getFood = async id => {
//   const food = await foodCollection.get()
//   return food.exists ? food.data() : null;
// };

// export const createFood = (item, name, date) => {
//   return foodCollection.add(item), foodCollection.doc(item).set({
//     name: '', date: ''
//   })
// }

