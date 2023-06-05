const JSDOM = require('jsdom').JSDOM;
const fs = require('fs');
const path = require('path');

describe('API request', () => {
  it('Should make POST request using `fetch` on submit', async () => {
    const htmlString = fs.readFileSync(
      path.join(__dirname, '../index.html'),
      'utf8'
    );
    const dom = new JSDOM(htmlString);
    global.document = dom.window.document;
    global.window = dom.window;
    let requestOptions;
    //mock fetch function
    global.fetch = jest.fn((url, options) => {
      requestOptions = options;
      return Promise.resolve({
        json: () => {
          return Promise.resolve({
            status: 200,
            data: {
              message: 'data test',
            },
          });
        },
      });
    });
    global.alert = jest.fn();
    global.console.log = jest.fn();
    const scriptRewire = require('../index');
    document.getElementById('submit-form').submit();
    expect(global.fetch).toHaveBeenCalled();
    expect(requestOptions).toEqual(
      expect.objectContaining({ method: expect.stringMatching(/post/i) })
    );
  });
});
describe('Syntax', () => {
  it('`async/await` syntax should be used', () => {
    const scriptString = fs.readFileSync(
      path.join(__dirname, '../index.js'),
      'utf8'
    );
    expect(scriptString).toContain('async' && 'await');
  });
});

describe('Console', () => {
  it('Should print response JSON to the console', () => {
    document.getElementById('submit-form').submit();
    expect(console.log).toHaveBeenCalledWith({
      status: 200,
      data: {
        message: 'data test',
      },
    });
  });
});
describe('Alert', () => {
  it('Alert should be displayed after fetching the data', () => {
    document.getElementById('submit-form').submit();
    expect(alert).toHaveBeenCalled();
  });
});
