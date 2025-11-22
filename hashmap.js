export default class HashMap {
	constructor() {
		this.load_factor = 0.75;
		this.capacity = 16;
		this.buckets = [];

		for (let i = 0; i < this.capacity; i++) {
			this.buckets[i] = [];
		}
	}

	#hash(key) {
		let hashCode = 0;

		const primeNumber = 31;
		for (let i = 0; i < key.length; i++) {
			hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
		}

		return hashCode;
	}

	set(key, value) {
		let key_hash = this.#hash(key);
		let bucket = this.buckets[key_hash];

		bucket.push({ key, value });

		console.log(
			`{ ${key} : ${value} } was added to the hashmap at index ${key_hash}`
		);
	}

	get(key) {
		let key_hash = this.#hash(key);
		let bucket = this.buckets[key_hash];

		for (const entry of bucket) {
			if (entry.key == key) {
				console.log(`{ ${entry.key} : ${entry.value}}`);
				return entry.value;
			}
		}

		console.log(`No value found for key ${key}`);
	}

	
}
