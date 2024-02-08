import LinkWrapper from '../../components/LinkWrapper';

export default function RootFooter() {
  return (
    <>
      <footer className='mt-16 z-40'>
        <div
          className='h-2 flex gap-8 justify-center items-center
          bg-gradient-to-r from-teal-600 to-teal-400
          text-white
          '
        />

        <div
          className='flex shadow-inner bg-white
          md:flex-row md:h-64 md:gap-32 md:justify-center md:items-center
          flex-col gap-8 p-16 items-baseline
          '>
          <div>
            <p>Physio & Sport Shelia</p>
            <p>Oberkasselerstraße 69</p>
            <p>40545 Düsseldorf</p>
          </div>

          <div className=''>
            <p>Kontakt</p>
            <p>
              Telefon: <a href='tel:021199915415'>0211 99915415</a>
            </p>
            <p>
              Email: <a href='mailto:Info@Praxis-Shelia.de'>Info@Praxis-Shelia.de</a>
            </p>
            <p></p>
          </div>

          <div>
            <p>Öffnungszeiten</p>
            <p>Mo - Fr 8-16 Uhr</p>
          </div>
        </div>

        <div
          className='h-20 flex gap-4 sm:gap-8 justify-center items-center
          bg-gradient-to-r from-teal-600 to-teal-400
          text-white'>
          <LinkWrapper to=''>
            <p>© 2024 Physio & Sport Shelia</p>
          </LinkWrapper>
          <p>|</p>
          <LinkWrapper to='impressum'>
            <p>Impressum</p>
          </LinkWrapper>
        </div>
      </footer>
    </>
  );
}
