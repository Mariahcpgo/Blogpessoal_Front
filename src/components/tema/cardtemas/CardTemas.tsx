import { Link } from 'react-router-dom'
import Tema from '../../../models/Tema'

interface CardTemasProps{
    tema: Tema
}

function CardTemas({ tema }: CardTemasProps) {
    return (
        <div className='border border-indigo-950 flex flex-col rounded-3xl overflow-hidden justify-between font-poppins text-center'>
            <header className='py-2 px-6 bg-indigo-950 text-white text-xl '>
                Tema
            </header>
            <p className='p-8 text-3xl bg-slate-200 h-full font-semibold'>{tema.descricao}</p>

            <div className="flex">
                <Link to={`/editartema/${tema.id}`}
                    className='w-full text-slate-100 bg-indigo-300 hover:bg-indigo-950
                        flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                <Link to={`/deletartema/${tema.id}`}
                    className='text-slate-100 bg-red-400 hover:bg-red-600 w-full 
		                        flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>

        </div>
    )
}

export default CardTemas