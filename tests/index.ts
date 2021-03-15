import EmotesJS from '../src';

const api = new EmotesJS();

console.log(api.find(e => e.shortcodes.includes('joy')));
