import currencyFormatter from './';

describe('Currency Formatter', () => {
  it('Given 20, returns $20', () => {
    expect(currencyFormatter(20)).toEqual('$20');
  });
  it('Given 20000, returns $20,000', () => {
    expect(currencyFormatter(20000)).toEqual('$20,000');
  });
  it('Given 2312.45, returns $2,312.45', () => {
    expect(currencyFormatter(2312.45)).toEqual('$2,312.45');
  });
  it("Given undefined, returns '0'", () => {
    expect(currencyFormatter(undefined)).toEqual('0');
  });
});
