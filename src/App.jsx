import { api } from "./services/api_tempo";

function App() {
  async function handleGetWeather() {
    const response = await api.get("Sorocaba");
    console.log(response);
  }

  return (
    <main className="flex flex-col items-center container mx-auto min-h-screen bg-sky-50">
      <div className="bg-sky-500 w-full p-10">
        <h1 className="text-center font-bold text-white text-2xl">
          Clima Tempo
        </h1>
      </div>
      <div className="max-w-screen-sm mt-10">
        <button
          className="bg-sky-500 rounded-md py-1 px-2 text-white font-semibold"
          onClick={handleGetWeather}
        >
          Enviar
        </button>
      </div>
    </main>
  );
}

export default App;
