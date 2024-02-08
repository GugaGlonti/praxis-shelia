import team_main from '../../assets/team_main.webp';

export default function Team() {
  return (
    <>
      <main className='container m-auto'>
        <div className='flex w-full justify-center'>
          <img
            className='
            my-16
            rounded-full
            w-1/3'
            src={team_main}
          />
        </div>
        <div className='text-center'>
          <div
            className='flex flex-col
              gap-8 px-16
              xl:gap-12 xl:px-32
              '>
            <div>
              <h1 className='text-3xl font-bold'>ELZA SHELIA</h1>
              <h2 className='tex-xl text-gray-400'>Ihre Expertin für Gesundheit und Wohlbefinden</h2>
            </div>

            <p>Herzlich willkommen bei Physio & Sport Shelia! Mein Name ist Elza Shelia, und ich freue mich darauf, Ihnen meine Praxis vorzustellen – Ihre Anlaufstelle für umfassende physiotherapeutische Betreuung. Seit meinem Abschluss im Jahr 2007 habe ich meine Leidenschaft für die Physiotherapie kontinuierlich vertieft und weiterentwickelt. Mein Umgang mit Patienten ist geprägt von Einfühlsamkeit, und ich lege großen Wert darauf, auf die individuellen Bedürfnisse eines jeden Einzelnen einzugehen, um eine maßgeschneiderte Betreuung zu gewährleisten.</p>

            <p>Als Mutter von zwei Söhnen und liebevolle Ehefrau verstehe ich die Bedeutung von Familie und Wohlbefinden. Diese Werte fließen in meine Arbeit ein, indem ich einen ganzheitlichen Ansatz verfolge und das Wohlergehen meiner Patienten in den Mittelpunkt stelle.</p>
            <p>Im Januar 2024 erfüllte ich mir meinen Traum und eröffnete meine eigene Praxis – Physio & Sport Shelia. Hier kombiniere ich meine fundierte Ausbildung mit modernen Therapieansätzen, um meinen Patienten die bestmögliche Versorgung zu bieten.</p>

            <p>Nicht nur sprachlich bin ich vielseitig aufgestellt, da ich Deutsch, Russisch und Georgisch beherrsche, sondern ich halte mich auch stets auf dem aktuellen Stand der Weiter- und Fortbildungen. Diese kontinuierliche Bildung sichert, dass meine Patienten von den neuesten Erkenntnissen und fortschrittlichsten Therapiemethoden profitieren.</p>

            <p>Bei Physio & Sport Shelia sind Sie in den besten Händen. Vertrauen Sie auf mich und mein erfahrenes Team, um gemeinsam an Ihrer Gesundheit und Ihrem Wohlbefinden zu arbeiten. Ich freue mich darauf, Sie in meiner modernen Praxis willkommen zu heißen.</p>
          </div>
        </div>
      </main>
    </>
  );
}
