import { getAuth, signOut } from "@firebase/auth";
import { getDatabase } from "@firebase/database";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDFTVTDVP9f7Oa_gCMMqhaPwshDW4c0K9U",
  authDomain: "guide-point-bd2b2.firebaseapp.com",
  databaseURL: "https://guide-point-bd2b2-default-rtdb.firebaseio.com",
  projectId: "guide-point-bd2b2",
  storageBucket: "guide-point-bd2b2.firebasestorage.app",
  messagingSenderId: "774495345740",
  appId: "1:774495345740:web:8864db397d58120bf2e8e9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
export function signOutUser() {
  return signOut(auth)
    .then(() => {
      console.log("User signed out successfully.");
    })
    .catch((error) => {
      console.error("Error signing out: ", error);
    });
}
export function deleteData(path) {
  return remove(ref(db, path))
    .then(() => {
      console.log("Data deleted successfully.");
    })
    .catch((error) => {
      showErrorSection("Error deleting data:", error);
      return;
    });
}
export function pushData(path, data) {
  return push(ref(db, path), data)
    .then(() => {
      console.log("Data pushed successfully.");
    })
    .catch((error) => {
      showErrorSection("Error pushing data:", error);
      return;
    });
}
export function updateData(path, data) {
  return update(ref(db, path), data)
    .then(() => {
      console.log("Data updated successfully.");
    })
    .catch((error) => {
      showErrorSection("Error updating data:", error);
      return;
    });
}
export function writeData(path, data) {
  return set(ref(db, path), data)
    .then(() => {
      console.log("Data written successfully.");
    })
    .catch((error) => {
      showErrorSection("Error writing data:", error);
      return;
    });
}
