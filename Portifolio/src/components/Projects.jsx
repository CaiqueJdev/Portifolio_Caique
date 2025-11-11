import { CardProjects } from "./CardsButtons";
import { CardTecnologias } from "./CardsButtons";
// import {Foto} from "../assets/foto.jpg";


const Projects = () => {
    const habilidadesProjects = []
    const cardProjectsArray = [
        {
            image: "https://www.extwebtech.com/wp-content/uploads/2023/03/frontend-vs-bancend.webp",
            title: "Title",
            text: "Text",
            card: ["react", "css", "js"]
        },
        {
            image: "https://miro.medium.com/v2/resize:fit:1400/1*WjQdDCRWq609T-krfFL6gA.png",
            title: "Title",
            text: "Text",
            card: ["react", "css", "js"]
        },
        {
            image: "https://bs-uploads.toptal.io/blackfish-uploads/components/open_graph_image/10233694/og_image/optimized/op-Ten-Front-End-Design-Rules-For-Developers_Luke-Social-33a3a7c9b759fdaa22973906070f8065.png",
            title: "Title",
            text: "Text",
            card: ["react", "css", "js"]
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNQG345Q5FPPCnusBJXxgd1ZEtk1b47-cq3A&s",
            title: "Title",
            text: "Text",
            card: ["react", "css", "js"]
        },
    ]
    return ( 
        <section id="projects" className="w-full bg-m1">
            <div 
            className="flex md:justify-between max-w-[1280px] m-auto flex-col p-4"
            >
                <h2 className="text-[40px] text-center text-g0">
                    Projetos
                </h2>
                <hr className="m-auto w-[100px] border-g0 ring-1 ring-g0"/>
                <div className="flex flex-wrap gap-2 py-6">
                    {
                        cardProjectsArray.map(item => (
                            <CardProjects
                                image={item.image}
                                title={item.title}
                                text={item.text}
                                card={item.card}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
     );
}
 
export default Projects;