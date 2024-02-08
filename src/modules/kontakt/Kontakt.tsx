import Map from '../../components/Map';

export default function Kontakt() {
  return (
    <>
      <main className='my-32 m-auto container flex flex-col gap-16'>
        <div className='flex justify-center gap-16'>
          <div>
            <h4 className='text-teal-500 font-bold'>Physio & Sport Shelia</h4>
            <p>Oberkasselerstraße 69</p>
            <p>40545 Düsseldorf</p>
          </div>

          <div>
            <h4 className='text-teal-500 font-bold'>Kontakt</h4>
            <p>
              Telefon: <a href='tel:021199915415'>0211 99915415</a>
            </p>
            <p>
              Email: <a href='mailto:Info@Praxis-Shelia.de'>Info@Praxis-Shelia.de</a>
            </p>
            <p></p>
          </div>

          <div>
            <h4 className='text-teal-500 font-bold'>Öffnungszeiten</h4>
            <p>Mo - Fr 8-16 Uhr</p>
          </div>
        </div>
        <Map />
      </main>
    </>
  );
}
