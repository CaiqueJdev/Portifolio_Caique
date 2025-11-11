import { CardContacts } from "./CardsButtons";
const Contacts = () => {
    return ( 
        <section 
          id="contacts"
          className="bg-b2"
        >
            <div 
              className="max-w-[1280px] m-auto"
            >
                <h2 className="text-[40px] text-center text-g0">Entre em Contato</h2>
                <hr className="m-auto w-[100px] border-g0 ring-1 ring-g0"/>
                <p 
                  className="text-center mt-5 text-sm text">
                    Venha conversar comigo
                </p>
                <div className="p-8 flex md:flex-row flex-col items-center justify-center gap-8">
                    <CardContacts
                      title={"Email"}
                      icon={"pi pi-envelope"}
                      text={"caiquejesus019@gmail.com"}
                    />
                    <CardContacts
                      title={"Email"}
                      icon={"pi pi-envelope"}
                      text={"caiquejesus019@gmail.com"}
                    />
                    <CardContacts
                      title={"Email"}
                      icon={"pi pi-envelope"}
                      text={"caiquejesus019@gmail.com"}
                    />
                </div>
            </div>
        </section>

     );
}
 
export default Contacts;