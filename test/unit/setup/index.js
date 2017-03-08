import 'babel-polyfill';
import jsdom from 'jsdom';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;

global.API_HOST = 'http://test-api-host';
global.API_PATH = '/f3platform/api/v2';
global.TIMEZONE_NAME = 'America/Vancouver';
global.DEBUG = false;

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});

// this is so that we can stub these methods with sinon in tests
class MockLocalStorage {
  setItem() {}
  getItem() {}
};

global.localStorage = new MockLocalStorage();