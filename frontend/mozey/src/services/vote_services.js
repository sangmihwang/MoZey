import { db } from "../firebase";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const voteCollectionRef = collection(db, "notice");
class VoteData {
  addVotes = (newVote) => {
    return addDoc(voteCollectionRef, newVote);
  };
  updateVote = (id, updatedVote) => {
    const voteDoc = doc(db, "notice", id);
    return updateDoc(voteDoc, updatedVote);
  };
  deleteVote = (id) => {
    const voteDoc = doc(db, "notice", id);
    return deleteDoc(voteDoc);
  };

  getAllVotes = () => {
    return getDocs(voteCollectionRef);
  };

  getVote = (id) => {
    const voteDoc = doc(db, "notice", id);
    return getDocs(voteDoc);
  };
}

export default new VoteData();
