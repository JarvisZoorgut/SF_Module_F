const initialState = ["redux", "react"];

function changeLibrary(state = initialState, action) {
    switch (action.type) {
        case "ADD_LIBRARY":
            return [...state, action.payload]; // ✅ Добавляем элемент в массив

        case "DELETE_LIBRARY":
            return state.filter(library => library !== action.payload); // ✅ Удаляем элемент из массива

        default:
            return state;
    }
}

export default changeLibrary;
