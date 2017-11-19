'use strict';

/**
 * The class to use for managing values that are stored between page visits.
 */
class Persistence {
  constructor() {
  }

  /**
   * Gets the stored boolean value.
   * @param {string} key - The key to look up.
   * @param {boolean} fallback - The value to use if the stored value cannot be retrieved.
   * @param {boolean} - The stored value, or fallback if there is no stored value.
   */
  getBoolean(key, fallback) {
    var storedValue = this.getValue(key, fallback);
    return storedValue == 'true';
  }

  /**
   * Stores a boolean value.
   * @param {string} key - The key where value should be stored.
   * @param {boolean} value - The value to store.
   */
  setBoolean(key, value) {
    return this.setValue(key, value);
  }

  /**
   * Gets the stored number.
   * @param {string} key - The key to look up.
   * @param {number} fallback - The value to use if the stored value cannot be retrieved.
   * @param {number} - The stored value, or fallback if there is no stored value.
   */
  getNumber(key, fallback) {
    var storedValue = this.getValue(key, fallback);
    var convertedValue = Number(storedValue);
    if (convertedValue === NaN) {
      return fallback;
    }
    return convertedValue;
  }

  /**
   * Stores a number.
   * @param {string} key - The key where number should be stored.
   * @param {number} value - The number to store.
   */
  setNumber(key, value) {
    return this.setValue(key,value);
  }

  /**
   * Gets the stored value.
   * @param {string} key - The key to look up.
   * @param {*} fallback - The value to use if the stored value cannot be retrieved.
   * @param {*} - The stored value, or fallback if there is no stored value.
   */
  getValue(key, fallback) {
    // Can't use window.localStorage on file:/// on Google Chrome
    try {
      var storedValue = window.localStorage.getItem(key);
      return storedValue;
    }
    catch(e) {
      return fallback;
    }
  }

  /**
   * Stores the given key/value pair.
   * @param {string} key - The key where value should be stored.
   * @param {*} value - The value to store.
   */
  setValue(key, value) {
    try {
      window.localStorage.setItem(key, value);
      return true;
    }
    catch(e) {
      return false;
    }
  }
}
