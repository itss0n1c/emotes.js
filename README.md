# Emotes.JS
A JavaScript library for resolving emoji shortcodes to unicode, and vice versa.

<br>

## Installation
```bash
% yarn add emotes.js
```

## Usage

```ts
import EmotesJS from '../src';

const api = new EmotesJS();

console.log(api.find(e => e.shortcodes.includes('joy')));
// Output:
/*

Emoji {
  category: 'people',
  shortcodes: [ 'joy' ],
  unicode: '😂',
  src: 'https://twemoji.maxcdn.com/v/latest/svg/1f602.svg'
}

*/
```

## Credits
[Twemoji](https://twemoji.twitter.com) & [twemoji-parser](https://github.com/twitter/twemoji-parser) for the unicode to svg conversion.
