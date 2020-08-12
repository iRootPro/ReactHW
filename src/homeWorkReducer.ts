export const hwReducer = (
    state: Array<{ id: string, name: string, age: number }>,
    action: { type: string, payload: any }) => {
    switch (action.type) {
        case 'SORT':
            if (action.payload === 'up') {
                return [...state.sort((a, b) => (a.name > b.name) ? 1 : -1)]
            }

            if (action.payload === 'down') {
                return [...state.sort((a, b) => (a.name < b.name) ? 1 : -1)]
            }
            return [...state]
        case 'CHECK':
            return [...state.filter(man => man.age === 18)]
        default:
            return []
    }
};
