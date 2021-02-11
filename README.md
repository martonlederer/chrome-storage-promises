# chrome-storage-promises

This tiny module provides Promise based functions for extensions using chrome.storage

## Installation

```sh
yarn add chrome-storage-promises
```

or

```sh
npm i chrome-storage-promises
```

You will also need the `storage` permission in your manifest file:

```json
{
  "name": "My extension",
  ...
  "permissions": [
    "storage"
  ],
  ...
}
```

## Usage

Before using this module, check out the [official documentation](https://developer.chrome.com/docs/extensions/reference/storage) of `chrome.storage`.

First import the desired storage method:

```ts
import { local } from "chrome-storage-promises";
```

Than, you can use it, like normal async/await promises:

```ts
await local.set({ test: "an-example-value" });

const testValue = await local.get("an-example-value");
```
