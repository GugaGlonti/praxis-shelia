export default function Impressum() {
  return (
    <>
      <main className='container px-32 m-auto mt-16'>
        <div className='text-center'>
          <h1 className='text-5xl'>Impressum</h1>
          <h3 className='text-md '>Angaben gemäß § 5 TMG</h3>
        </div>

        <article>
          <Paragraph
            title='Physio & Sport Shelia'
            content={['Oberkasselerstraße 69', '40545 Düsseldorf']}
          />

          <Paragraph
            title='Kontakt'
            content={['Telefon: 0211 99915415', 'E-Mail: Info@Praxis-Shelia.de']}
          />

          <Paragraph
            title='Aufsichtsbehörde'
            content={['Gesundheitsamt Düsseldorf', 'Kölner Str. 180, 40227 Düsseldorf', 'https://www.duesseldorf.de/gesundheitsamt.html']}
          />

          <Paragraph
            title='Berufsbezeichnung und berufsrechtliche Regelungen'
            content={['Berufsbezeichnung: Physiotherapeut', 'Zuständige Kammer: nicht verkammert', 'Verliehen in: Deutschland', '', 'Es gelten folgende berufsrechtliche Regelungen: MPhG', 'https://www.gesetze-im-internet.de/mphg/BJNR108400994.html']}
          />

          <Paragraph
            title='Angaben zur Berufshaftpflichtversicherung'
            content={['Name und Sitz des Versicherers: TBD']}
          />

          <Paragraph
            title='Geltungsraum der Versicherung'
            content={['Weltweit']}
          />

          <Paragraph
            title='Redaktionell verantwortlich'
            content={['Elza Shelia', 'Oberkasselerstraße 69', '40545 Düsseldorf']}
          />

          <Paragraph
            title='EU-Streitschlichtung'
            content={['Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: ', 'https://ec.europa.eu/consumers/odr.', 'Unsere E-Mail-Adresse finden Sie oben im Impressum.']}
          />

          <Paragraph
            title='Quelle:'
            content={['https://www.e-recht24.de']}
          />

          <h1>Website erstellt von Guga Glonti</h1>
        </article>
      </main>
    </>
  );
}

interface ParagraphProps {
  title: string;
  content: string[];
}

function Paragraph({ title, content, ...props }: ParagraphProps) {
  return (
    <article
      className='my-8'
      {...props}>
      <strong>{title}</strong>
      <br />
      {content.map(line => {
        if (line.startsWith('http') || line.startsWith('www')) {
          return (
            <a
              className='text-teal-500'
              key={line}
              href={line}
              target='_blank'
              rel='noreferrer'>
              {line}
            </a>
          );
        }
        return <p key={line}>{line}</p>;
      })}
    </article>
  );
}
