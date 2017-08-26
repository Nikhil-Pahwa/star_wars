import { MockAppPage } from './app.po';

describe('mock-app App', () => {
  let page: MockAppPage;

  beforeEach(() => {
    page = new MockAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
