import React, {useState} from "react";
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navItems = [
    { label: 'Início', href: '#home' },
    { label: 'Sobre', href: '#about' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Entre em  Contato', href: '#contact' },
  ];


    return ( 
        <>
            <header 
               className="flex justify-between bg-s7 p-5  w-full fixed border-b border-g2"
            >
                <div className="max-w-[1280px] m-auto flex align-center justify-between w-full relative">
                    {/* Logo */}
                    <div className="">
                        <h1 className="text-[20px]"><span className="text-g0">C</span>AIQUE <span className="text-g0">J</span>ESUS</h1>
                    </div>
                    {/* Navegation Desktop*/}
                    <nav className="">
                        <div className="hidden md:flex items-center gap-8 ">
                            {navItems.map((item)=>  (
                                <a 
                                key={item.label}
                                href={item.href}
                                className="text-s2 hover:text-g0 transition-colors duration-300"
                                >
                                  {item.label}       
                                </a>
                            ))}
                        </div>
                    { /* Navigation Mobile */}
                        <div 
                           className={`md:hidden ${isMenuOpen ? "block" : "hidden"} flex justify-center items-center fixed bg-s7 absolute left-0 top-[57px] w-full h-[94vh]`}
                           >
                            <div 
                              className="flex flex-col gap-6 p-1 w-full h-full items-center justify-center text-[20px] active:bg-b2">
                                {navItems.map((item)=>  (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-g0  w-full text-center rounded p-5 ring-1 ring-0 active:bg-g2 "
                                    >
                                      {item.label}
                                    </a>
                            ))}
                            </div>
                        </div>
                    </nav>
                    <button 
                       className="md:hidden"
                       onClick={() => setIsMenuOpen(!isMenuOpen)}
                       >
                        {isMenuOpen ?(
                            <i className="pi pi-times "></i>
                        ) : (
                            <i className="pi pi-bars"></i>
                        )}
                    </button>
                </div>
            </header>
        </>
     );
}
 
export default Header;