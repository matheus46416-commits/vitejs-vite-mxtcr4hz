function CardFilme({ filme }) {
    return (
        <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col h-full">
            <img
                src={filme.imagem}
                alt={`Pôster do filme ${filme.title}`}
                className="w-full h-80 object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-xl font-bold truncate mb-2">{filme.title}</h2>
                <div className="flex justify-between items-center mt-auto">
                    <span className="text-sm text-gray-400">Lançamento: {filme.ano}</span>
                    <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-bold rounded">
                        ★ {filme.nota}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default CardFilme;