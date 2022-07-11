import { CodeIconPipe } from './code-icon.pipe';

describe('CodeIconPipe', () => {
  
  let pipe = new CodeIconPipe();

  it('create an instance', () => {
    // const pipe = new CodeIconPipe();
    expect(pipe).toBeTruthy();
  });

  it('passando alla funzione transform ilnumero 65 mi aspetto che il risultato contenga la parola "rain"', ()=> {
    // const pipe = new CodeIconPipe();
    expect(pipe.transform(65)).toContain('rain');
  });

  it('passando alla funzione transform ilnumero 2000 mi aspetto che il risultato contenga la parola "clear"', ()=> {
    // const pipe = new CodeIconPipe();
    expect(pipe.transform(2000)).toContain('clear');
  });

});
