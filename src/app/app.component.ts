import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//El código de arriba se conoce como un decorador. Es propio de typescript.
//Le agrega funcionalidades a la clase de forma externa.

export class AppComponent {
  
  palabra = 'ANGULAR';
  palabraOculta = '';

  intentos = 0;

  gano = false;
  perdio = false;

  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
            'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
  constructor () {

    this.palabraOculta = '_ '.repeat(this.palabra.length);

    console.log('Se acaba de crear el App Component');
  }

  comprobar( letra: any ) {

    this.existeLetra(letra);

    const palabraOcultaArr = this.palabraOculta.split(' ');

    for ( let i = 0; i < this.palabra.length; i++ ) {

      if (this.palabra[i] === letra) {
        palabraOcultaArr[i] = letra;
      }

    }

    this.palabraOculta = palabraOcultaArr.join(' ');

    this.verificaGane();

      const palabraArr = this.palabraOculta.split(' ');
      const palabraEvaluar = palabraArr.join('');

      if (palabraEvaluar === this.palabra) {
        this.gano = true;
        console.log('Usuario GANO');
      }

      if (this.intentos >= 9) {
        this.perdio = true;
        console.log('Usuario perdio');
      }
    
    // console.log(palabraOcultaArr);
    // console.log('Letra: ' + letra);
  }

  verificaGane() {
    console.log(this.palabraOculta);
  }

  existeLetra (letra: any) {

    if(this.palabra.indexOf(letra) >= 0) {
      // console.log('Letra existe ' + letra);
    } else {
      // console.log('Letra NO existe ' + letra);
      this.intentos ++;
    }
  }

}
//Export es para poder utilizar este archivo en otros lugares.
// El constructor es la función que se ejecuta cuando se crea una nueva instancia de mi clase.
