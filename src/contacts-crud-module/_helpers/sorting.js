const sortContacts = sortBy => (prev, next) =>  prev > next ? 1 : -1

export const sortContactsAscending = sortContacts('lastName')
