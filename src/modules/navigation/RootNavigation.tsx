import { CiMail } from 'react-icons/ci';
import { CiPhone } from 'react-icons/ci';
import { CiLocationOn } from 'react-icons/ci';
import { CiCalendar } from 'react-icons/ci';
import { CiMenuBurger } from 'react-icons/ci';
import { AiOutlineClose } from 'react-icons/ai';

import LinkWrapper from '../../components/LinkWrapper';
import { useState } from 'react';

export default function RootNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu(e: React.MouseEvent<HTMLDivElement>) {
    e.preventDefault();

    setIsMenuOpen(prev => !prev);
  }

  return (
    <>
      <div className='sticky top-0'>
        <nav
          className={`
          ${!isMenuOpen && 'transform -translate-x-full'}
          absolute left-0 w-full h-screen bg-white md:hidden
          transition-transform duration-300 ease-in-out
          `}>
          <div
            onClick={toggleMenu}
            className='absolute top-0 right-0 py-8 px-16'>
            <AiOutlineClose size={32} />
          </div>
          <div
            onClick={toggleMenu}
            className='flex flex-col items-center justify-center h-full
            gap-8 text-4xl
            '>
            <LinkWrapper to='leistungen'>
              <div>Leistungen</div>
            </LinkWrapper>
            <LinkWrapper to='team'>
              <div>Team</div>
            </LinkWrapper>
            <LinkWrapper to='kontakt'>
              <div>Kontakt</div>
            </LinkWrapper>
          </div>
        </nav>

        <nav className='h-20 z-40 bg-white flex justify-between'>
          <div className='flex justify-between items-center shadow-2xl flex-grow px-16'>
            <LinkWrapper to=''>
              <h1 className='text-2xl'>
                Physio & <span className='text-teal-500'>Sport</span> Shelia
              </h1>
            </LinkWrapper>

            <div className='hidden md:flex items-center gap-4 lg:gap-8'>
              <LinkWrapper to='leistungen'>
                <div>Leistungen</div>
              </LinkWrapper>
              <LinkWrapper to='team'>
                <div>Team</div>
              </LinkWrapper>
              <LinkWrapper to='kontakt'>
                <div>Kontakt</div>
              </LinkWrapper>
            </div>

            <div className='hidden lg:flex gap-4 items-center'>
              <a href='mailto:Info@Praxis-Shelia.de'>
                <CiMail size={32} />
              </a>
              <a href='tel:021199915415'>
                <CiPhone size={32} />
              </a>
              <a href='https://www.google.com/maps/dir/?api=1&destination=Oberkasseler%20Str.%2069,%2040545%20D%C3%BCsseldorf,%20Deutschland'>
                <CiLocationOn size={32} />
              </a>
            </div>

            <div
              onClick={toggleMenu}
              className='md:hidden flex items-center justify-center bg-white'>
              <CiMenuBurger size={32} />
            </div>
          </div>

          <div
            className='w-48 px-4 h-full
              bg-gradient-to-r from-teal-600 to-teal-400 text-white
              hidden md:flex items-center justify-center gap-2'>
            <CiCalendar size={32} />
            <p>online</p>
            <p>buchen</p>
          </div>
        </nav>
      </div>
    </>
  );
}
