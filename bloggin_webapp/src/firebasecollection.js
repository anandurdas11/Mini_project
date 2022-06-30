import { db } from './firebase';
import { collection } from 'firebase/firestore';
export const postrefernce = collection(db, 'Post');

