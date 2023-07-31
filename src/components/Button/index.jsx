export function Button(props) {
    return ( 
        <button className="bg-light-blue p-4 text-white font-inter font-medium mt-10 rounded-full w-52 hover:bg-dark-blue transition-all ease-in-out duration-300 shadow-[0px_5px_8px_2px_#00000024] ">
            {props.nome}
        </button>
     );
}
