function Header({ busca, setBusca }) {
  return (
    <header className="bg-gray-800 p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="">
          <h1 className="text-3xl font-bold text-yellow-400">🎞️ FIEC Filmes</h1>
          <p className="text-gray-400 text-sm">O seu catalogo do TMDB</p>
        </div>

        {/* Input controlado via Props */}
        <div className="">
          <input
            className="w-full px-4 bg-gray-800 py-2 border border-gray-700 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors"
            type="text"
            value={busca} // Lê o estado qe veio do App.jsx
            onChange={(e) => setBusca(e.target.value)} // Atualiza o estado
            placeholder="Digite o nome do filme"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
