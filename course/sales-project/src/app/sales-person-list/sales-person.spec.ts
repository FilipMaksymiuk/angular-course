import { SalesPerson } from './sales-person';

// describe('SalesPerson', () => {
//   it('should create an instance', () => {
//     expect(new SalesPerson()).toBeTruthy();
//   });
// });


describe('SalesPerson', () => {
  it('should create an instance', () => {
    const person = new SalesPerson('John', 'Doe', 'john@example.com', 1000);
    expect(person).toBeTruthy();
  });
});
