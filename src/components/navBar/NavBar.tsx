import { Link } from "react-router-dom";

function Navbar() {
 
  

    return (
      <>
       <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
            <div className="container flex justify-around text-lg">
              <Link to="/" className="text-1xl font-bold">Blog Pessoal</Link>
  
              <div className='flex gap-7'>
                <div className='hover:underline'>Postagens</div>
                <div className='hover:underline'>Temas</div>
                <div className='hover:underline'>Cadastrar Tema</div>
                <div className='hover:underline'>Perfil</div>
                <Link to="/login" className="hover:underline">Sair</Link>
              </div>
            </div>
          </div>
      </>
    )
  }
  
  export default Navbar