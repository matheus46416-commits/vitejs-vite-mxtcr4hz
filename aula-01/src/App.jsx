import { useState } from "react";
import { useEffect } from "react";
import Header from "./components/Header";
import CardFilme from "./components/CardFilme";
//import Footer from './components/Footer';

const BASE_URL = "https://api.themoviedb.org/3";

const API_KET = "1cd195d425209db234690ffacec75877";

// Mock de dados (Simulando a resposta da API do TMDB)
const mockFilmes = [
  {
    id: 1,
    title: "Inception",
    ano: "2010",
    nota: 8.8,
    imagem: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
  },
  {
    id: 2,
    title: "Interstellar",
    ano: "2014",
    nota: 8.6,
    imagem: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },
  {
    id: 3,
    title: "Dune: Part Two",
    ano: "2024",
    nota: 8.9,
    imagem: "https://image.tmdb.org/t/p/w1280/8LJJjLjAzAwXS40S5mx79PJ2jSs.jpg",
  },
  {
    id: 4,
    title: "The Matrix",
    ano: "1999",
    nota: 8.7,
    imagem: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
  },
];

function App() {
  // 1 - Armazenar lista de filmes
  const [filmes, setFilmes] = useState(mockFilmes);
  const [busca, setBusca] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2 - O Efeito colateral
  useEffect(() => {
    const fetchPopularFilmes = async() => {
      try{
        setIsLoading(true);
        const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`);
        // Verifica se a internet caiu ou a rota não existe
        if(!response.ok){
          throw new Error("Falha ao buscar os filmes no TMDB");
        }
        
        const data = await response.json();

        setFilmes(data.results);
      } catch (error){
        setError(error.message);// Mostra o erro capturado.
      } finally {
        setLoading(false);
      }
    };

    // Chamamos a função que acabamos de criar
    fetchPopularFilmes();
  },[]); // <---- O ARRAY VAZIO: Roda apenas 1 vez quando a tela abrir.

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Header busca={busca} setBusca={setBusca} />

      {/* Container Principal */}
      <main className="flex-grow max-w-7xl mx-auto px-6 w-full">
        {/* Renderização Condicional */}
        {filtroDeFilmes.length === 0 && !isLoading && (
          <div className="">
            <h2>Nenhum filme encontrado! Filme procurado: {busca}</h2>
            <button
              className="px-6 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600 transition"
              onClick={() => setBusca("")}
            >
              Limpar busca
            </button>
          </div>
        )}

        {/* Renderização da Lista */}
        {filtroDeFilmes.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {mockFilmes.map((filme) => (
              <CardFilme key={filme.id} filme={filme} />
            ))}
          </div>
        )}

        {/* */}
        <h2 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">
          Em Destaque
        </h2>

        {/* Renderização da Lista utilizando .map */}
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
