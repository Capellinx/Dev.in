export function Contract() {
    return ( 
        <section className="mt-12 ">
            <div className="bg-contract-bg bg-center bg-cover bg-no-repeat   h-[450px]">
                <div className="text-center">
                    <h2 className="text-white text-5xl font-sora pt-12 max-md:text-2xl">Contato</h2>
                    <p className="pt-8 text-white text-[18px] w-[528px] mx-auto max-md:text-sm max-md:w-[324px]">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error culpa voluptatum ipsam voluptatem alias
                    </p>
                    <div className="mt-24">
                        <input 
                        type="email" 
                        placeholder="Seu melhor e-mail" 
                        className="border-b-2 border-white bg-transparent ring-0 text-white p-2 focus:outline-none placeholder-white"
                        required
                        />
                        <button type="submit" className="bg-light-blue p-3 rounded-xl w-28 ml-10 text-white hover:bg-dark-blue transition-all ease-in-out duration-300">Enviar</button>
                    </div>
                </div>
            </div>
        </section>
     );
}
