const initialState = {
	score: 0,
};
export default function quizScore(state = initialState, action) {
	switch (action.type) {
		case 'DISPLAY_SCORE':
			return {
				...state,
				totalMarks: state.totalMarks + action.totalMarks,
			};
		default:
			return state;
	}
}
