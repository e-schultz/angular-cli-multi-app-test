import { MultiAppTestPage } from './app.po';

describe('multi-app-test App', () => {
  let page: MultiAppTestPage;

  beforeEach(() => {
    page = new MultiAppTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
