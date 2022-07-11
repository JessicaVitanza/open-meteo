import { UnitPipe } from './unit.pipe';

describe('UnitPipe', () => {

  it('create an instance', () => {
    const pipe = new UnitPipe();
    expect(pipe).toBeTruthy();
  });

  it('mi aspetto che la funzione transform invocata con due argomenti come il numero 23 e la stringa m/s dia come risultato 23.00 m/s', ()=> {
    const pipe = new UnitPipe();
    expect(pipe.transform(23, 'm/s')).toBe('23.00 m/s')
  });

  it('mi aspetto che la funzione transform invocata con due argomenti come il numero 0 e la stringa l dia come risultato diverso da 0.0001 l', ()=> {
    const pipe = new UnitPipe();
    expect(pipe.transform(0, 'l')).not.toBe('0.0001')
  });

});
