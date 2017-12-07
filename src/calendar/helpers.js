export const parseCustomEvents = (currentYear) => (
    (event) => ({
        start: new Date(currentYear, +event.date.slice(0, 2), +event.date.slice(2)),
        end: new Date(currentYear, +event.date.slice(0, 2), +event.date.slice(2) + 1),
        title: event.title,
        payload: event.payload
    })
)

export const parseOfficialEvents = (currentYear) => (
    (event) => ({
        start: new Date(currentYear, +event.date.slice(0, 2), +event.date.slice(2)),
        end: new Date(currentYear, +event.date.slice(0, 2), +event.date.slice(2) + 1),
        isOfficial: true,
        title: event.title,
        payload: event.payload
    })
)