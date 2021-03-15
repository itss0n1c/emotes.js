import { readFileSync } from 'fs';
import { join } from 'path';
import BaseStore from './BaseStore';
import { Emoji } from './Emojis';

interface Exported {
	[category: string]: {
		names: string[]
		surrogates: string
		unicodeVersion: number
	}[]
}

export default class EmotesJS extends BaseStore<string, Emoji> {
	constructor() {
		super();
		this.init();
	}

	init(): void {
		const data: Exported = JSON.parse(readFileSync(join(__dirname, '..', 'data.json'), { encoding: 'utf-8' }));

		for (const category of Object.keys(data)) {
			for (const emoji of data[category]) {
				const emote = new Emoji({
					category,
					shortcodes: emoji.names,
					unicode: emoji.surrogates
				});
				this.set(emoji.surrogates, emote);
			}
		}
	}
}
