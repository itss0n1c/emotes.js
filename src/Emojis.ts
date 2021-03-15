import { parse } from 'twemoji-parser';

interface EmojiData {
	shortcodes: string[]
	category: string
	unicode: string
}

export class Emoji implements EmojiData {
	shortcodes: string[]
	src: string
	category: string
	unicode: string
	constructor(data: EmojiData) {
		for (const k of Object.keys(data)) {
			this[k] = data[k];
		}
		this.init();
	}

	init(): void {
		const images = parse(this.unicode);
		this.src = images[0].url;
	}
}
