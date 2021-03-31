// Aquí van las importaciones
import sum from '../utils/sum.js';
import hello from '@images/hello.svg';

const Template = async () => {
  const res = sum(1, 4);

  const view = /**html */`
    <div class="container text-center">
      <h1>Hola</h1>
      <p>Este es solo texto de prueba</p>
      <p>La suma de 1 + 4 es igual a ${res}</p>
      <p>Y aquí va una imagen</p>
      <img class="img-hello" src="${hello}" alt="hello"/>
    </div>
  `;
  return view;
};

export default Template;