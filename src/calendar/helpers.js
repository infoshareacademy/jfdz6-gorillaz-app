export const parseEvents = (event) => ({
    start: new Date(2017, +event.date.slice(0, 2), +event.date.slice(2)),
    end: new Date(2017, +event.date.slice(0, 2), +event.date.slice(2) + 1),
    title: event.title,
    payload: event.payload
})