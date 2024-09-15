import lzString from 'lz-string';

export enum MobileOS {
  ANDROID = 'android',
  IOS = 'ios',
  OTHER = 'other',
}

export function getUuid(): string {
  let dt = new Date().getTime();
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = ((dt + Math.random() * 16) % 16) | 0;
    dt = Math.floor(dt / 16);
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid.replace(/-/gi, '').toLowerCase();
}

export const getMobileOS = (): MobileOS => {
  const ua = navigator.userAgent;
  if (/android/i.test(ua)) {
    return MobileOS.ANDROID;
  } else if (/iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
    return MobileOS.IOS;
  }
  return MobileOS.OTHER;
};

export function saveLocalData(key: string, val: string): void {
  if (typeof window === 'undefined') return;
  const storage = window.localStorage;
  if (storage) {
    try {
      storage.setItem(key, lzString.compressToUTF16(val));
    } catch (e) {
      console.error('Storage Full ... clean old data...');
      for (const k in storage) {
        if (k.indexOf('DATA_MESSAGE_DETAIL_') > -1) {
          storage.removeItem(k);
        }
      }
      storage.setItem(key, lzString.compressToUTF16(val));
    }
  }
}

export function loadLocalData(key: string): string | null {
  if (typeof window === 'undefined') return null;
  const storage = window.localStorage;
  if (storage) {
    const keyValue = storage.getItem(key);
    if (keyValue) return lzString.decompressFromUTF16(keyValue);
  }
  return null;
}

export function removeLocalData(key: string): void {
  if (typeof window === 'undefined') return;
  const storage = window.localStorage;
  if (storage) {
    storage.removeItem(key);
  }
}

/**
 * targetEntity 에 포함된 key에 value 적용
 * @param targetEntity
 * @param obj
 */
export const setEntityParameters = (targetEntity: any, obj: any) => {
  const keyList = Object.keys(targetEntity);
  for (const key of keyList) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      targetEntity[key] = obj[key];
    }
  }
};

/**
 * 웹앱 대응 라우터 이동
 * @param url
 * @param isExternal
 */
export function pushView(url: string, isExternal?: boolean, query?: string): void {
  if (typeof url === 'undefined' || ('' + url).trim() === '') {
    window.alert('주소를 찾을 수 없습니다.');
    return;
  }
  if (!isExternal && url.indexOf('http') < 0) {
    const getUrl = window.location;
    const baseUrl = getUrl.protocol + '//' + getUrl.host + getUrl.pathname;
    url = baseUrl + '#' + url;
    if (query) url = url + '?' + query;
  }
  // @ts-ignore
  if (window.apocApp && window.apocApp.pushView) {
    // @ts-ignore
    window.apocApp.pushView(url);
    // @ts-ignore
  } else if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.pushView) {
    // @ts-ignore
    window.webkit.messageHandlers.pushView.postMessage(url);
  } else {
    window.location.href = url;
  }
}
