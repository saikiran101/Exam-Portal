export const signIn = (credentials) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    
    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({ type: 'LOGIN_SUCCESS' });
    }).catch((err) => {
      dispatch({ type: 'LOGIN_ERROR', err });
    });
  }
}
export const Admin = (credentials) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    
    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({ type: 'ADMIN_SUCCESS' });
    }).catch((err) => {
      dispatch({ type: 'ADMIN_ERROR', err });
    });
  }
}

export const signOut = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().signOut().then(() => {
      dispatch({ type: 'SIGNOUT_SUCCESS' })
    });
  }
}
export const closeAdmin = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().closeAdmin().then(() => {
      dispatch({ type: 'CLOSEADMIN_SUCCESS' })
    });
  }
}
  //returning function call dispatch & getState.
  // to store email & password we use firebase auth methed.
  //& for user profile name firestore in Users collection.
   //here we should match the firestore uid with the users uid
   //here f[0]& l[0] is to displays in ur profile
//export const signUp = (newUser) => {
//  return (dispatch, getState, { getFirebase, getFirestore }) => {
//    const firebase = getFirebase();
//    const firestore = getFirestore();

//    firebase.auth().createUserWithEmailAndPassword(
//      newUser.email,
//      newUser.password
//    ).then((resp) => {
 
//      return firestore.collection('users').doc(resp.users.uid).set({
//        firstName: newUser.firstName,
//        lastName: newUser.lastName,
//        initials:newUser.firstName[0] + newUser.lastName[0]
//      });
//    }).then(() => {
//      dispatch({type:'SIGNUP_SUCCESS'});
//    }).catch(err => {
//      dispatch({type:'SIGNUP_ERROR',err});
//    });
//  }
//}
export const signUp = (newUser) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword(
      newUser.email, 
      newUser.password
    ).then(resp => {
      return firestore.collection('users').doc(resp.user.uid).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initials: newUser.firstName[0] + newUser.lastName[0]
        
      });
    }).then(() => {
      dispatch({ type: 'SIGNUP_SUCCESS' });
    }).catch((err) => {
      dispatch({ type: 'SIGNUP_ERROR', err});
    });
  }
}
export const AdminReg = (newAdmin) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword(
      newAdmin.email, 
      newAdmin.password
    ).then(resp => {
      return firestore.collection('admin').doc(resp.admin.uid).set({
        firstName: newAdmin.firstName,
        lastName: newAdmin.lastName,
        initials: newAdmin.firstName[0] + newAdmin.lastName[0]
      });
    }).then(() => {
      dispatch({ type: 'ADMIN_SUCCESS' });
    }).catch((err) => {
      dispatch({ type: 'ADMIN_ERROR', err});
    });
  }
}
