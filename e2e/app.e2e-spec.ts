import { BlongsPage } from './app.po';

describe('blongs App', function() {
  let page: BlongsPage;

  beforeEach(() => {
    page = new BlongsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
