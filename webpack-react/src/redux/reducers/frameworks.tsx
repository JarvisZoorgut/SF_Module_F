const initialState = ["angular"];

function changeFramework(state = initialState, action) {
    switch (action.type) {
        case "ADD_FRAMEWORK":
            return [...state, action.payload]; // ✅ Добавляем элемент в массив

        case "DELETE_FRAMEWORK":
            return state.filter(framework => framework !== action.payload); // ✅ Удаляем элемент из массива

        default:
            return state;
    }
}

export default changeFramework;
