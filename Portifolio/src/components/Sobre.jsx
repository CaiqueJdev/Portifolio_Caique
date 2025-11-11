import { CardHabilidades } from "./CardsButtons";
const Sobre = () => {
  const Cards = [
      {
        icon: "pi pi-list-check",
        title: "Organizado",
        text: "Codigo e Arquivos organizados com maestria"
      },
      {
        icon: "pi pi-code",
        title: "Codigo Limpo",
        text: "Estrutura de Codigo e boas Praticas"
      },
      {
        icon: "pi pi-sparkles",
        title: "Criativo",
        text: "UI/UX criativos e dinamicos"
      },
      {
        icon: "pi pi-user-plus",
        title: "Protivo",
        text: "Boas Relações em equipe"
      },
    ];
    return ( 
        <section 
          id="sobremim" 
          className="w-full bg-m1"
        >
          <div className="flex md:justify-between max-w-[1280px] m-auto flex-col p-4 ">
              <div className="grow-1 w-full">
                <h2 className="text-[40px] text-center text-g0">Sobre Mim</h2>
                <hr className="m-auto w-[100px] border-g0 ring-1 ring-g0"/>
                <p className="text-base my-6">
                  Olá! Sou Caique Jesus(CJ), um desenvolvedor frontend com energia de sobra e uma boa dose de curiosidade por tudo que envolve tecnologia.
                  Desde que comecei a programar, transformei o aprendizado em um jogo diário — cada linha de código é um novo “level” conquistado.
                  <br/>
                  <br/>
                  Tenho foco em React e no desenvolvimento web moderno, sempre buscando criar interfaces leves, acessíveis e cheias de vida. Gosto de unir design inteligente e funcionalidade real, entregando experiências que façam sentido e despertem aquele “uau” no usuário.
                  <br />
                  <br />
                  Sou o tipo de pessoa que adora trabalhar em equipe, trocar ideias e transformar um simples brainstorm em algo incrível (e, claro, dar umas boas risadas no caminho).
                  Curioso por natureza, estou sempre mergulhando em novas tecnologias e explorando áreas como back-end e mobile, porque acredito que aprender nunca é demais — especialmente quando o aprendizado vem com café e bons projetos.
                </p>
              </div>
                <div id="skills" className="mt-5 grow-1 w-full bg-b1">
                    <h3 className="text-[30px] text-g0 text-center">Habilidades</h3>
                    <hr className="m-auto mb-8 w-[100px] border-g0 ring-1 ring-g0"/>
                    <div className="flex gap-2 flex-wrap">
                      {Cards.map(item => (
                        <CardHabilidades
                          icon={item.icon}
                          title={item.title}
                          text={item.text}
                        />
                      ))}

                    </div>
                </div>
          </div>
        </section>
        
     );
}
 
export default Sobre;