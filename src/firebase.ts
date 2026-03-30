import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  onAuthStateChanged as firebaseOnAuthStateChanged, 
  signOut as firebaseSignOut,
  signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword,
  createUserWithEmailAndPassword as firebaseCreateUserWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { 
  getFirestore, 
  collection as firebaseCollection, 
  doc as firebaseDoc, 
  query as firebaseQuery, 
  where as firebaseWhere, 
  orderBy as firebaseOrderBy, 
  limit as firebaseLimit, 
  onSnapshot as firebaseOnSnapshot, 
  addDoc as firebaseAddDoc, 
  updateDoc as firebaseUpdateDoc, 
  deleteDoc as firebaseDeleteDoc, 
  setDoc as firebaseSetDoc, 
  getDoc as firebaseGetDoc, 
  getDocs as firebaseGetDocs, 
  writeBatch as firebaseWriteBatch,
  serverTimestamp as firebaseServerTimestamp,
  getDocFromServer
} from "firebase/firestore";
import firebaseConfig from "../firebase-applet-config.json";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

// Auth functions
export const onAuthStateChanged = (authInstance: any, callback: (user: any) => void) => {
  return firebaseOnAuthStateChanged(authInstance, callback);
};

export const signOut = (authInstance: any) => {
  return firebaseSignOut(authInstance);
};

export const signInWithEmailAndPassword = (authInstance: any, email: string, pass: string) => {
  return firebaseSignInWithEmailAndPassword(authInstance, email, pass);
};

export const createUserWithEmailAndPassword = async (authInstance: any, email: string, pass: string, role?: string, name?: string, uid?: string) => {
  const userCredential = await firebaseCreateUserWithEmailAndPassword(authInstance, email, pass);
  if (name) {
    await updateProfile(userCredential.user, { displayName: name });
  }
  // We don't use the uid parameter here because Firebase Auth generates its own UID.
  // The caller should handle saving the user document to Firestore with the correct role.
  return userCredential;
};

// Firestore functions
export const serverTimestamp = firebaseServerTimestamp;

export const doc = (dbInstance: any, collectionName?: string, id?: string) => {
  if (typeof dbInstance === "string") {
    // doc(collectionRef, id)
    return firebaseDoc(firebaseCollection(db, dbInstance), collectionName);
  }
  if (id) {
    return firebaseDoc(db, collectionName!, id);
  }
  return firebaseDoc(firebaseCollection(db, collectionName!));
};

export const collection = (dbInstance: any, path?: string, ...pathSegments: string[]) => {
  if (typeof dbInstance === "string") {
    return firebaseCollection(db, dbInstance, path || "", ...pathSegments);
  }
  if (path) {
    return firebaseCollection(dbInstance, path, ...pathSegments);
  }
  // Fallback for cases where only one argument is provided, though Firestore usually requires two
  return firebaseCollection(dbInstance, "default");
};

export const query = firebaseQuery;
export const where = firebaseWhere;
export const orderBy = firebaseOrderBy;
export const limit = firebaseLimit;

export const onSnapshot = (q: any, callback: (snapshot: any) => void, errorCallback?: (err: any) => void) => {
  return firebaseOnSnapshot(q, callback, (error) => {
    if (errorCallback) {
      errorCallback(error);
    } else {
      handleFirestoreError(error, OperationType.GET, q.path || "unknown");
    }
  });
};

export const addDoc = firebaseAddDoc;
export const updateDoc = firebaseUpdateDoc;
export const deleteDoc = firebaseDeleteDoc;
export const setDoc = firebaseSetDoc;
export const getDoc = firebaseGetDoc;
export const getDocs = firebaseGetDocs;
export const writeBatch = (dbInstance?: any) => firebaseWriteBatch(dbInstance || db);

export const isFirebaseConfigured = true;

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId: string | undefined;
    email: string | null | undefined;
    emailVerified: boolean | undefined;
    isAnonymous: boolean | undefined;
    tenantId: string | null | undefined;
    providerInfo: {
      providerId: string;
      displayName: string | null;
      email: string | null;
      photoUrl: string | null;
    }[];
  }
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData.map(provider => ({
        providerId: provider.providerId,
        displayName: provider.displayName,
        email: provider.email,
        photoUrl: provider.photoURL
      })) || []
    },
    operationType,
    path
  }
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

// Test connection
async function testConnection() {
  try {
    await getDocFromServer(firebaseDoc(db, 'test', 'connection'));
  } catch (error) {
    if(error instanceof Error && error.message.includes('the client is offline')) {
      console.error("Please check your Firebase configuration. ");
    }
  }
}
testConnection();
