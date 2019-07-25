//var uuidv4 = require('uuid/v4');
import uuidv4 from 'uuid/v4'

let items = [
    { id: uuidv4(), name: 'Reactjs', level: 0 },
    { id: uuidv4(), name: 'ReactNative', level: 1 },
    { id: uuidv4(), name: 'Angular', level: 2 },
    { id: uuidv4(), name: 'Vue', level: 2 }
];

export default items;