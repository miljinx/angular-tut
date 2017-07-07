import { AngularTutPage } from './app.po';

describe('angular-tut App', () => {
  let page: AngularTutPage;

  beforeEach(() => {
    page = new AngularTutPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
