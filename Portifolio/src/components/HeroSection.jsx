
import FotoPerfil from "../assets/foto.jpg"
import { ButtonHero } from "./CardsButtons";
const HeroSection = () => {
    const arrayButtos = ["Ver Projetos", "Entre em Contatdo"];
    return ( 
        <>
            <section id="home" className="flex max-w-[1280px] m-auto px-4 bg-s8 py-20 h-[100vh] max-md:h-auto">
                    <div className="text-base  flex flex-col md:flex-row justify-between">
                        {/* Hero Information */}
                        <div className="flex justify-center flex-col grow-1 md:max-w-[900px] w-full">
                            <div className="flex justify-center flex-col text-wrap gap-5 text[18px]">
                                <h2 className="text-[40px] max-md:text-center">
                                   Desenvolvedor <span className="text-g0"><br />Front-End</span>
                                </h2>
                                <p className="text-[30px]">
                                    Olá, me chamo Caique <span className="text-g0">Jesus</span>
                                </p>
                                <p className="text-wrap">
                                    Sou desenvolvedor front-end iniciante, aprendendo e criando com <strong className="text-g0">React</strong>, <strong className="text-g0">Tailwind CSS</strong> e <strong className="text-g0">Bootstrap</strong>. Busco evoluir constantemente e construir experiências web modernas e responsivas.
                                </p>
                                <div id="divicons"
                                 className="flex gap-10 pt-4 pb-4"
                                 >
                                    <a href="linkedin.com">
                                        <i className="pi pi-linkedin hover:text-g0 text-s3"></i>
                                    </a>
                                    <a href="linkedin.com">
                                        <i className="pi pi-envelope text-s3 hover:text-g0"></i>
                                    </a>
                                    <a href="instagram.com">
                                        <i className="pi pi-github hover:text-g0 text-s3"></i>
                                    </a>
                                    
                                </div>
                            <div className="flex gap-3 md:flex-row flex-col sm:w-full text-center flex-wrap">
                                {arrayButtos.map(a => 
                                    <ButtonHero
                                        text={a}
                                    />
                                )}
                                
                            </div>
                            <div id="divicons">
                            </div>
                            </div>
                        </div>
                        {/* Perfil Image */}
                        <div className="flex grow-1 justify-center items-center w-full">
                            <img 
                                src={FotoPerfil} alt="caique" className="w-[300px] h-[300px] ring ring-4 ring-g0 rounded"
                            />
                        </div>
                    </div>
                        {/* <ImageCaroucel /> */}
            </section>
        </>
     );
 }   
     export default HeroSection;