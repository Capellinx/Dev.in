import { Button } from "../Button";
import { Link } from 'react'

export function OurPlans() {
    return ( 
        <section>
            <div className="text-center mt-24">
                <h2 className="text-blue-dark font-sora text-5xl max-md:text-[24px]">Nossos Planos</h2>
                <p className="text-gray w-96 text-center mx-auto mt-8 max-md:text-[14px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing. Donec lacinia mi quis euismod ultrices.
                </p>
            </div>
            <div className="flex items-center justify-center gap-16 mt-24 max-md:flex-col ">
                <div className="w-96 h-128 bg-ranchi text-center rounded-xl">
                    <h3 className="text-2xl text-blue-dark font-sora pt-12">Bronze</h3>
                    <p className="text-blue-dark font-sora text-xl pt-12">
                        R$<span className="text-5xl">28</span>/mês
                    </p>
                    <p className="pt-12 w-60 mx-auto ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.
                    </p>
                    <div className="pt-12">
                        <Button nome="Assinar" className=""/>
                    </div>
                </div>
                <div className="w-96 h-128 bg-blue-dark text-center rounded-xl">
                    <h3 className="text-5xl text-white font-sora pt-8">Prata</h3>
                    <div className="pt-4">
                        <button className="bg-light-blue text-white w-48 cursor-default uppercase rounded-xl">
                            Preferido
                        </button>
                    </div>
                    <p className="text-white font-sora text-xl pt-4 ">
                        R$<span className="text-5xl">57</span>/mês
                    </p>
                    <p className="w-60 mx-auto pt-8 text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.
                    </p>
                    <div className="pt-12">
                        <Button nome="Assinar" className=""/>
                    </div>
                </div>
                <div className="w-96 h-128 bg-ranchi text-center rounded-xl">
                    <h3 className="text-2xl text-blue-dark font-sora pt-12">Ouro</h3>
                    <p className="text-blue-dark font-sora text-xl pt-12">
                        R$<span className="text-5xl">94</span>/mês
                    </p>
                    <p className="pt-12 w-60 mx-auto ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.
                    </p>
                    <div className="pt-12">
                        <Button nome="Assinar" className=""/>
                    </div>
                </div>
            </div>
        </section>
     );
}
