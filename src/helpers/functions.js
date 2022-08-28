const makeShorter = (title) => {
    const splitedTitle = title.split(" ");
    const newTitle = `${splitedTitle[0]} ${splitedTitle[1]}`
    return newTitle
}

const isInCart = (state, id) => {
    return !!state.selectedItems.find(item => item.id === id)
}

const quantityCount = (state, id) => {
    const index = state.selectedItems.findIndex(item => item.id === id)
    if(index === -1) {
        return false
    } else {
        return state.selectedItems[index].quantity
    }
}

export { makeShorter , isInCart , quantityCount }