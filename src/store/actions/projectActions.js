export const createProject = (project) => {
  return (dispatch, getState, {getfirebase,getFirestore}) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('P-java').add({
      ...project,
       timestamp: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
    }).catch(err => {
      console.log(err)
      dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
    });
  }
};
export const createPython = (project) => {
	return (dispatch, getState, { getfirebase, getFirestore }) => {
		// make async call to database
		const firestore = getFirestore();
		firestore
			.collection("P-python")
			.add({
				...project,
				timestamp: new Date(),
			})
			.then(() => {
				dispatch({ type: "CREATE_PYTHON_SUCCESS" });
			})
			.catch((err) => {
				console.log(err);
				dispatch({ type: "CREATE_PYTHON_ERROR" }, err);
			});
	};
};