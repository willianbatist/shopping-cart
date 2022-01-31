require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
   const url = `https://api.mercadolibre.com/sites/MLB/search?q=computador`;
  it('Teste se fetchProducts é uma função',() => {
    const actual = typeof fetchProducts;
    const expected = 'function'
    expect(actual).toBe(expected)
  });
  it('Execute a função fetchProducts com o argumento "computador" e teste se fetch foi chamada;', async () =>{
    await fetchProducts('computador')
    expect(fetch).toHaveBeenCalled();
  });
  it('Teste se, ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador"', async () => {
    await fetchProducts('computador')
    expect(fetch).toHaveBeenCalledWith(url);
  });
  it('Teste se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo.', async () => {

    const actual = await fetchProducts('computador');
    expect(actual).toEqual(computadorSearch);
  });
  it('Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url.', async () => {
    const actual = await fetchProducts();
    const error = new Error('You must provide an url');
    expect(actual).toEqual(error);
  });
});