 
 export function GetIn() {
    return ( 
        <section className="bg-ranchi  h-max">
            <div className="mx-auto max-w-7xl p-10">
                <div className="mt-32 flex max-md:mt-8 ">
                    <div className="">
                        <h2 className="font-sora text-blue-dark text-3xl max-md:text-[24px] max-md:text-center ">
                            Baixe nosso app para desfrutar mais!
                        </h2>
                        <p className="w-1/2 text-start mt-12 max-md:text-center max-md:mx-auto max-md:w-[312px] max-md:text-sm">
                            Amet in elementum nulla scelerisque dui, egestas at. Elit consectetur turpis elementum amet vitae et etiam nec. Varius volutpat hac adipiscing tincidunt pretium.
                        </p>
                        <div className="flex items-center gap-5 mt-10">
                            <button className="bg-blue-dark rounded-md  p-2 gap-4 items-center cursor-pointer">
                                <img src="/src/assets/google.svg" alt="" />
                            </button>
                            <button className="bg-blue-dark rounded-md flex p-2 gap-4 items-center cursor-pointer">
                                <img src="/src/assets/maca.svg" alt="" />
                                <img src="/src/assets/storeapple.svg" alt="" />
                            </button>
                        </div>
                    </div>
                    <figure className="mx-md:hidden">
                        <img 
                        src="/src/assets/notifications.svg" 
                        alt="" 
                        className="max-md:hidden"/>
                    </figure>
                </div>
            </div>
        </section>
     );
}

