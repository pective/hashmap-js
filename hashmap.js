export default class HashMap {
	constructor() {
		this.load_factor = 0.75;
		this.capacity = 16;
		this.length = 0;
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

		if (this.length / this.capacity > this.load_factor) this.#increaseCapacity();

		bucket.push({ key, value });
		this.length++;

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

	#increaseCapacity() {
		const oldBuckets = this.buckets;
		this.capacity *= 2;
		this.buckets = [];

		for (let i = 0; i < this.capacity; i++) {
			this.buckets[i] = [];
		}

		for (const bucket of oldBuckets) {
			for (const entry of bucket) {
				const newHash = this.#hash(entry.key);
				this.buckets[newHash].push(entry);
			}
		}
	}
}
