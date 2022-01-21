import { useState } from "react";
import { api } from "./services/api_tempo";

function App() {
  const [weather, setWeather] = useState(null);
  const city = "sorocaba";

  async function handleGetWeather() {
    const response = await api.get(city);
    setWeather(response.data);
  }

  return (
    <div className="flex flex-col items-center container mx-auto min-h-screen bg-sky-50">
      <div className="bg-sky-500 w-full p-10">
        <h1 className="text-center font-bold text-white text-2xl">
          Clima Tempo
        </h1>
      </div>
      <header className="max-w-screen-sm mt-10">
        <button
          className="bg-sky-500 rounded-md py-1 px-2 text-white font-semibold"
          onClick={handleGetWeather}
        >
          Buscar
        </button>
      </header>

      {weather && (
        <main className="mt-5">
          <h1 className="text-blue-900 font-semibold capitalize text-2xl">
            {city}
          </h1>

          <article className="mt-2 text-center bg-slate-200">
            <h2 className="">Clima agora</h2>
            <p className="text-pink-700 font-bold">{weather.temperature}</p>
            <p>{weather.description}</p>
          </article>
        </main>
      )}
    </div>
  );
}

export default App;
