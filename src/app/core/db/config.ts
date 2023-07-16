import { DBConfig } from 'ngx-indexed-db';

export const dbConfig: DBConfig = {
	name: 'showcase',
	version: 1,
	objectStoresMeta: [
		{
			store: 'products',
			storeConfig: { keyPath: 'id', autoIncrement: true },
			storeSchema: [
				{ name: 'name', keypath: 'name', options: { unique: false } },
				{ name: 'price', keypath: 'price', options: { unique: false } },
			],
		},
	],
};
