export function ItWokrs() {
    return ( 
        <section className="">
            <div className="mt-32 pb-40">
                <h2 className="font-sora text-blue-dark text-5xl text-center max-md:text-2xl">
                    Como funciona
                </h2>
                <div className="mx-auto max-w-7xl p-10 mt-24 flex items-center justify-around max-md:flex-col max-md:gap-20 max-md:mt-12">
                    <div className="w-52 text-center flex items-center justify-center flex-col">
                        <img 
                        src="/src/assets/Conexão.svg" 
                        alt="" />
                        <p className="font-sora font-semibold text-xl mt-6">Crie Conexões</p>
                        <span className="mt-6 font-inter text-gray">
                        Lorem ipsum dolor sit amet, consecteteu.
                        </span>
                    </div>
                    <div className="w-52 text-center flex items-center justify-center flex-col">
                        <img 
                        src="/src/assets/carbon_security.svg" 
                        alt="" />
                        <p className="font-sora font-semibold text-xl mt-6">100% gratuito</p>
                        <span className="mt-6 font-inter text-gray">
                        Lorem ipsum dolor sit amet, consecteteu.
                        </span>
                    </div>
                    <div className="w-52 text-center flex items-center justify-center flex-col">
                        <img 
                        src="/src/assets/heroicons-outline_emoji-happy.svg" 
                        alt="" />
                        <p className="font-sora font-semibold text-xl mt-6">Compartilhamento</p>
                        <span className="mt-6 font-inter text-gray">
                        Lorem ipsum dolor sit amet, consecteteu.
                        </span>
                    </div>
                </div>
            </div>
        </section>
     );
}

