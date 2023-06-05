export const characterList = (payload: string): void => {
    fetch('/api/v1/character/list?page=0&size=2')
        .then(res => res.text())
        .then(characters => {
            payload = characters
        })
}