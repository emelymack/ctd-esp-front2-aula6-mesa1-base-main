/*

3.3.1 - Identificación de errores [A]

Cada vez que se muestra un mensaje de error,
debe identificarse claramente el elemento
que generó el error de forma visual y sonora (ejemplo:
cambio de color en el elemento + un icono de alerta +
un mensaje de texto).

*/

import "./style.css";

const Email = () => {
  return (
    // Se debe verificar si el campo de
    // el correo electrónico contiene algo escrito. Si no, debe
    // marcar un error en el input.
    // Para esto se puede utilizar en el input de correo electrónico el atributo "required".
    <form>
      <input type="email" placeholder="Ingresá tu email aquí" aria-label="Ingresá tu email aquí" required />
      <button type="submit" aria-label="botón Enviar">Enviar</button>
    </form>
  );
};

export default Email;
