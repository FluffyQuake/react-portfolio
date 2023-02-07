import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 '>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Minust</p>
                </div>
                <div></div>
                </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Tere. Olen Kaspar, meeldiv kohtuda. Palun vaata ringi.</p>
                </div>
                <div>
                    <p>
                    Ma olen 17 aastane õpilane Kuressaare Ametikoolis ning see on minu portfoolio.   
                    Ma õpin hetkel nooremaks tarkvara arendajaks.
                    Mulle meeldib trenni teha, arvutis mängida ja programmeerida.
                    Minu lemmikud mängud on fps ja ellujäämis mängud.
                    Tahan leida endale tulevikus hea töökoha, et kindlustada oma tulevik hea palga ja elukohaga.
                    Ma olen pärit Tallinnast.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About