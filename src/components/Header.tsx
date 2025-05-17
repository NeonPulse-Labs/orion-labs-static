import logo from '../assets/Orion-Labs-Modern-Design.svg';

const Header = () => {
    return (
        <header className="py-6 text-left bg-gray-900">
            <div className="w-32 mx-auto opacity-90">
                <img src={logo} alt="Orion Labs Logo" className='h-32vh w-12vw' />
            </div>
            <h1 className="text-4xl font-bold mt-2 text-white">Orion Labs</h1>
        </header>
    );
};

export default Header;