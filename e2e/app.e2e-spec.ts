import { CocktailSearchAppPage } from './app.po';

describe('cocktail-search-app App', function() {
  let page: CocktailSearchAppPage;

  beforeEach(() => {
    page = new CocktailSearchAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
