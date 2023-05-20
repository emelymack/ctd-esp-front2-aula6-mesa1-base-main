/*
1.4.8 - Representación visual [AAA]

Estabecer controles específicos para la presentación
de información en pantalla sin comprometer su legibilidad.

*/

import "./style.css";

const About = () => {
  return (
    <div>
      <div className="blockText">
        <p>Rick and Morty es una serie de animación.</p>
        <p>
          La serie se estrenó el 2 de diciembre de 2013 y muestra las peligrosas
          aventuras del científico alcohólico Rick y su nieto Morty, quien
          divide su tiempo entre la vida familiar y los viajes
          interdimensionales.
        </p>

        <a
          href="https://es.wikipedia.org/wiki/Rick_and_Morty"
          className="buttonAbout"
          aria-label="Leer más"
        >
          <img src="download.png" alt="icono de descarga" />
          <p>Leer más</p>
        </a>
      </div>

      <div>
        <img src="cite.png" alt="Imagen de Rick y Morty. Frase: 'A veces la ciencia es mucho más arte que ciencia, Morty. Mucha gente no entiende eso - Rick'" className="imageCite" />
      </div>
    </div>
  );
};

export default About;
