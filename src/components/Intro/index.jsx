import { Button } from "../Button";

export function Intro() {
    return ( 
      <section className='bg-ranchi '>
        <div className="mx-auto max-w-7xl p-10 flex items-center justify-between max-md:flex-col max-md:h-[387px] max-md:mt-16">
            <div>
              <h1 className="text-5xl font-sora font-semibold text-blue-dark max-md:text-[24px]">
                Dev.in, <br />
                é tudo que você <br />
                precisa em um só lugar.
              </h1>
              <button className="bg-light-blue p-4 text-white font-inter font-medium mt-10 rounded-full w-52 hover:bg-dark-blue transition-all ease-in-out duration-300 shadow-[0px_5px_8px_2px_#00000024 max-md:p-1 max-md:w-36"> 
              Cadastre-se
              </button>
            </div>
            <figure>
              <img src="/src/assets/Working from anywhere-rafiki 1anywherer.svg" alt="" className="max-md:w-[210px] max-md:h-[183px] " />
            </figure>
          </div>
      </section>
     );
}

