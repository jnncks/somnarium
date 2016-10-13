import { SomnariumPage } from './app.po';

describe('somnarium App', function() {
  let page: SomnariumPage;

  beforeEach(() => {
    page = new SomnariumPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
