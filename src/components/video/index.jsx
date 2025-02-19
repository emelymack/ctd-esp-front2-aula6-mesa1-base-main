/* 1.4.2 - Control de audio [A]

Una forma sencilla de pausar, silenciar
o ajustar el volumen de cualquier audio que se reproduzca
automáticamente durante más de 3 segundos en la interfaz.
*/

import "./style.css";

const Video = () => {
  return (
    <div className="container-video">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/vkXfKMhgLQ8?controls=1" //?controls=0 es el responsable de los controles de video.
        title="Rick y Morty - Temporada 1, Episodio 6"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Video;
