/**
 * Set multiple items
 *
 * @param items An object which gives each key/value pair to update storage with
 */
export function set(items: Object): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.local.set(items, () => resolve());
    } catch (e) {
      reject(e);
    }
  });
}

/**
 * Removes one or more items from storage
 *
 * @param keys A single key or a list of keys for items to remove
 */
export function remove(keys: string | string[]): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.local.remove(keys, () => resolve());
    } catch (e) {
      reject(e);
    }
  });
}

/**
 * Gets the amount of space (in bytes) being used by one or more items
 *
 * @param keys A single key or list of keys to get the total usage for. An empty list will return 0
 * @returns Amount of space being used in storage, in bytes
 */
export function getBytesInUse(): Promise<number> {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.local.getBytesInUse((bytesInUse) => resolve(bytesInUse));
    } catch (e) {
      reject(e);
    }
  });
}

/**
 * Gets one or more items from storage
 *
 * @param keys A single key to get, list of keys to get, or a dictionary specifying default values
 * @returns Object with items in their key-value mappings.
 */
export function get(keys: string | string[] | Object): Promise<Object> {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.local.get(keys, (items) => resolve(items));
    } catch (e) {
      reject(e);
    }
  });
}

/**
 * Removes all items from storage.
 */
export function clear(): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.local.clear(() => resolve());
    } catch (e) {
      reject(e);
    }
  });
}
