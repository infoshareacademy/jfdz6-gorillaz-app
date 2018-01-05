export const filterMatchingPhrase = (event, phrase) => phrase ? new RegExp('\\b' + phrase , 'i')
    .test((event.title || '') + ' ' + event.payload) : true
