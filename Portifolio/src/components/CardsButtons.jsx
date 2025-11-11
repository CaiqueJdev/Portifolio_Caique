import { div } from "framer-motion/client";

export const ButtonHero = ({text, link}) => {
    return ( 
        <div className="">
            <a href={link}>
                <button className="sm: w-full w-[200px] h-[50px]  ring-2 ring-g0 rounded hover:bg-g2 transition-colors duration-300 px-5">
                    {text}
                </button>
            </a>
        </div>
     );
}

export const CardHabilidades = ({icon, text, title}) => {
    return (
        <div className="flex text-center flex-col ring-1 ring-m3 grow-1 text-m4 w-full p-4 rounded-md shrink-1 basis-[350px] bg-m2 hover:bg-m4 transition hover:text-m2">
            <div className="text-[25px]">
                <div class={icon}></div>
            </div>
            <h2 className="text-m6">
                {title}
            </h2>
            <p className="text-m6">
                {text}
            </p>
        </div>
    )
}

// CARDS DO COMPONENT PROJETOS

export const CardProjects = ({text,title,image,card}) => {
    return (
        <div className="flex text-center flex-col ring-1 ring-m3 grow-1 text-m4 w-full p-4 rounded-md shrink-1 basis-[500px] bg-s7 border border-gray-800  hover:border-g0 hover:border-1 transition duration-300 max-lg:basis-[350px]">
            <div>
                <img src={image} alt="" className="h-[150px] m-auto"/>
            </div>
            <div>
                <h2 className="text-left">
                    {title}
                </h2>
                <p className="text-left">
                    {text}
                </p>
                <div className="flex flex-wrap gap-1">
                    {card.map(a => <CardTecnologias text={a}/>)}    
                </div>
            </div>
        </div>
    )
}

export const CardTecnologias = ({text}) => {
    return (
        
            <div className="text-g5 border-1 rounded-xl px-[10px] bg-g2 hover:bg-g1">
                {text}
            </div>
    )
}

export const CardContacts = ({icon,text,title}) => {
    return(
            <div 
              className="flex items-center justify-center flex-col gap-3 bg-s7 border border-gray-800 hover:border-g0 hover:border rounded-lg transition duration-200 p-5 text-g0 mt-5 w-full md:max-w-[300px]"
              >
                <div>
                    <i className={icon}>
                    </i>
                        </div>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
    )
    }