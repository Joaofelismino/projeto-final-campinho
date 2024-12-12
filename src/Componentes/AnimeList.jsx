import { useEffect, useState } from "react";
import { fetchAnimes } from "../Services/animeService";

const AnimeList = () => {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    const getAnimes = async () => {
      const response = await fetchAnimes(); // chamar o service de chamada a api
      setAnimes(response.data);
    };
    getAnimes();
  }, []);

  return (
    <div>
      <h1>Lista de Animes</h1>
      <ul>
        {animes.map((anime) => (
          <li key={anime.id}>
            <h2>{anime.attributes.title}</h2> {/* Adicionar .attributes para fazer a chamada correta */}
            <img src={anime.attributes.coverImage} alt="CapaAnime" />
            <p className="informativo"><span>Sinopse:</span> {anime.attributes.synopsis}</p>
            <p className="informativo"><span>Gênero:</span> {anime.attributes.genre}</p>
            <p className="informativo"><span>Data de lançamento:</span> {anime.attributes.releaseDate}</p>
            <p className="informativo"><span>Episódios:</span> {anime.attributes.episodes}</p>
            <p className="informativo"><span>Avaliação:</span> {anime.attributes.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimeList;
