import { Ng2BlogSamplePage } from './app.po';

describe('ng2-blog-sample App', function() {
  let page: Ng2BlogSamplePage;

  beforeEach(() => {
    page = new Ng2BlogSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
