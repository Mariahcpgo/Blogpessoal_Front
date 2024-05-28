import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { useContext } from "react"

function Navbar() {

    const navigate = useNavigate()

    const { handleLogout } = useContext(AuthContext)

    function logout(){
        handleLogout()
        alert('O usuário foi desconectado com sucesso!')
        navigate('/')
    }

    

    return (
        <>
            <div className='w-full flex justify-center py-3 
            			   bg-indigo-950 text-white'>
            
                <div className="container flex justify-between pl-6 pr-20 text-lg">
                    <Link to="/" className="text-2 font-poppins font-semibold">Blog Pessoal</Link>

                    <div className='flex gap-10'>
                        <Link to='/postagens' className='hover:underline'>Postagens</Link>
                        <Link to='/temas' className='hover:underline'>Temas</Link>
                        <Link to='/cadastrartema' className='hover:underline'>Cadastrar Tema</Link>
                        Perfil
                        <Link to="" onClick={logout} className="hover:underline">Sair</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar