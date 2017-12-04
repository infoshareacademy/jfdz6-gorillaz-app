import store from "./store"
import {add} from './state/contacts'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export default (async function showResults(values) {
    await sleep(500)
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
    store.dispatch(add({id: Date.now(), ...values}))
});
