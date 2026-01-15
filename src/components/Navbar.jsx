import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-violet-500 rounded-lg text-white px-6 py-4 flex flex-col md:flex-row items-center mb-8">
            {/* Título: El md:mr-auto empuja los links a la derecha en pantallas grandes */}
            <h1 className="text-2xl font-georgia md:mr-auto">
                Assassin's Creed
            </h1>

            {/* Lista de enlaces: flex permite que estén uno al lado del otro */}
            <ul className="flex gap-6 mt-4 md:mt-0">
                <li>
                    <Link to="/" className="hover:text-violet-200 transition-colors">
                        Cards
                    </Link>
                </li>
                <li>
                    <Link to="/books" className="hover:text-violet-200 transition-colors">
                        Libros
                    </Link>
                </li>
                <li>
                    <a
                        href="https://es.wikipedia.org/wiki/Assassin%27s_Creed_(pel%C3%ADcula)"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-violet-200 transition-colors"
                    >
                        Películas
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;