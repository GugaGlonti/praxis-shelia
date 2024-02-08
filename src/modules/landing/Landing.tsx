import temp from '../../assets/temp.jpg';
import Link from '../../components/Link';

export default function Landing() {
  return (
    <>
      <main>
        <img
          src={temp}
          className='
          h-30vh md:h-40vh lg:h-50vh
          w-full object-cover -z-10'
        />

        <article
          className='container m-auto 
          px-8
          xl:px-32
          my-12'>
          <h1 className='text-5xl'>
            Wilkommen bei Physio & <span className='text-teal-500'>Sport</span> Shelia
          </h1>

          <br />

          <p>Unsere Praxis steht für Wohlfühlatmosphäre und höchste Kompetenz. Wenn Sie unter Schmerzen leiden und nach effektiver Linderung suchen, Ihr Wohlbefinden im eigenen Körper steigern möchten oder eine sportliche Routine entwickeln und Ihre Leistungsfähigkeit verbessern wollen, sind Sie bei uns genau richtig. Unsere Leistungen passen wir individuell an jeden Patienten an, unabhängig davon, ob es sich um einen Beschwerdefall, präventive Maßnahmen oder Personal Training handelt. Dabei spielt es keine Rolle, ob Sie Kassenpatient oder privatversichert sind.</p>

          <br />

          <p>In unserem neuen Standort im Herzen von Düsseldorf Oberkassel erwartet Sie unsere neu eröffnete Praxis mit für hochqualifizierte Therapie in zweit neu eingerichteten Therapieräumen und einem Trainingsraum. Wählen Sie aus unserem breit gefächerten Leistungsangebot. Die ansprechende und zentrale Lage unserer Praxis, verbunden mit einer ausgezeichneten Anbindung an das öffentliche Verkehrsnetz, macht Ihren Besuch bei uns nicht nur effektiv, sondern auch angenehm und unkompliziert. Setzen Sie auf Physio und Sport Shelia für professionelle Betreuung, und erleben Sie, wie Ihre Gesundheit und Ihr Wohlbefinden bei uns im Mittelpunkt stehen. Wir freuen uns darauf, Sie persönlich in unserer Praxis begrüßen zu dürfen.</p>

          <br />

          <div className='flex justify-center'>
            <Link
              label='Unsere Leistungen'
              to='leistungen'
            />
          </div>
        </article>
      </main>
    </>
  );
}
