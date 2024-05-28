import { GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

  const data = new Date().getFullYear()
 
    return (
      <>
          <div className="flex justify-center bg-indigo-950 text-white">
            <div className="container flex flex-col items-center py-3">
              <p className='text-1xl font-semibold'>Blog Pessoal - Generation Brasil | Copyright: Mariah Garcia &copy; {data}</p>
              <p className='text-lg'>Acesse nossas redes sociais:</p>
              <div className='flex gap-4'>
                <LinkedinLogo size={35} weight='bold' />
                <InstagramLogo size={35} weight='bold' />
                <GithubLogo size={35} weight='bold' />
              </div>
            </div>
          </div>
        </>
    )
  }
  
  export default Footer