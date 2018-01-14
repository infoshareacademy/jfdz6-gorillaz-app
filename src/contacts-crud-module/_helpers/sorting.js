const sortContacts = sortBy => (prev, next) =>  prev[sortBy] > next[sortBy] ? 1 : -1

export const sortContactsAscending = sortContacts('lastName')
