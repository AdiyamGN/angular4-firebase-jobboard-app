import { AddisjobPage } from './app.po';

describe('addisjob App', () => {
  let page: AddisjobPage;

  beforeEach(() => {
    page = new AddisjobPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
