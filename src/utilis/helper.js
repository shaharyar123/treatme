import { LOCAL_STORAGE_KEYS } from "./constants";
import history from '../history/history';

export const logout = () => {
    removeLocalStorageItem(LOCAL_STORAGE_KEYS.TOKEN);
    removeLocalStorageItem(LOCAL_STORAGE_KEYS.ACCOUNT);
    history.replace('/login');
}

export const setLocalStorageItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
};

export const getLocalStorageItem = (key) => {
    const value = localStorage.getItem(key);
    if (value) {
        return JSON.parse(value)
    }
    return null;
};

export const removeLocalStorageItem = (key) => {
    localStorage.removeItem(key);
    return true;
};

export const getAccountID = () => {
    const account = getLocalStorageItem(LOCAL_STORAGE_KEYS.ACCOUNT) || {};
    const accountID = account.id || '';
    return accountID;
};