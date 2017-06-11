import { MyMonsterPage } from './app.po';

describe('my-monster App', () => {
  let page: MyMonsterPage;

  beforeEach(() => {
    page = new MyMonsterPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
