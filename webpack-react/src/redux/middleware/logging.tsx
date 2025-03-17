// Вариант написан на ES5
// export function logging(store) {
//     return function(next) {
//         return function(action) {
//             console.log('MiddleWare ES5 Hello')
//             return next(action)
//         }
//     }
// }

// Вариант написан на ES6
export const logging = store => next => action => {
    console.log(`Done Middleware ES6: ${action.type}`)
    return next(action)
}