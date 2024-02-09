import kontinuierliche from '../../assets/kontinuierliche.webp';
import behandlung from '../../assets/behandlung.webp';
import beurteilung from '../../assets/beurteilung.webp';
import asidePic from '../../assets/aside.webp';

export default function Leistungen() {
  return (
    <>
      <header className='hidden lg:flex'>
        <div className='relative w-1/3'>
          <img src={kontinuierliche} />
          <div className='absolute top-0 left-0 w-full h-full flex flex-col gap-4 justify-center items-center font-bold'>
            <h2 className='text-3xl px-2 text-white'>Kontinuierliche Betreuung</h2>
            <h6 className='text-lg px-2 text-white '>Bei uns stehen Sie an erster Stelle</h6>
          </div>
        </div>

        <div className='relative w-1/3'>
          <img src={behandlung} />
          <div className='absolute top-0 left-0 w-full h-full flex flex-col gap-4 justify-center items-center font-bold'>
            <h2 className='text-3xl px-2 text-white'> Behandlung und Therapie</h2>
            <h6 className='text-lg px-2 text-white '>Patientenzentrierte Behandlung</h6>
          </div>
        </div>

        <div className='relative w-1/3'>
          <img src={beurteilung} />
          <div className='absolute top-0 left-0 w-full h-full flex flex-col gap-4 justify-center items-center font-bold'>
            <h2 className='text-3xl px-2 text-white'> Beurteilung und Diagnose</h2>
            <h6 className='text-lg px-2 text-white '>Die Techniken, die Sie benötigen</h6>
          </div>
        </div>
      </header>

      <main className='flex'>
        <aside className='w-1/3 hidden xl:block'>
          <img
            src={asidePic}
            className='w-full'
          />
        </aside>

        <article className='w-full xl:w-2/3'>
          <div
            className='w-2/3 m-auto mt-32
            grid
            xl:grid-cols-2  xl:gap-16   xl:items-center
            grid-cols-1     gap-y-8     justify-center items-start 
            '>
            <div className='xl:col-span-2'>
              <h1 className='text-5xl mb-4'>Unsere Leistungen</h1>

              <p>Willkommen bei Physio & Sport Shelia, wo wir Ihnen eine umfassende Palette von erstklassigen therapeutischen Dienstleistungen anbieten, um Ihr Wohlbefinden zu fördern und Ihre Gesundheit zu verbessern. Hier sind einige der spezialisierten Leistungen, die wir für Sie bereithalten:</p>
            </div>

            <div>
              <h3 className='text-3xl mb-4 text-teal-500'>CMD Behandlung</h3>
              <p>Kiefergelenkstherapie Als erfahrene Therapeutin biete ich eine gezielte Behandlung für craniomandibuläre Dysfunktionen (CMD) an. Durch eine individuelle Therapie lindern wir Schmerzen und verbessern die Funktionalität des Kiefergelenks.</p>
            </div>

            <div>
              <h3 className='text-3xl mb-4 text-teal-500'>Krankengymnastik</h3>
              <p>Unter Einsatz gezielter Übungen fördern wir die Beweglichkeit, Kräftigung und Koordination des gesamten Körpers. Unser Team entwickelt maßgeschneiderte Trainingspläne, um Ihre spezifischen Bedürfnisse zu adressieren.</p>
            </div>

            <div>
              <h3 className='text-3xl mb-4 text-teal-500'>Manuelle Therapie</h3>
              <p>Die manuelle Therapie konzentriert sich auf die gezielte Mobilisation und Manipulation von Gelenken, um Bewegungseinschränkungen zu lösen. Wir setzen bewährte Techniken ein, um Ihre Bewegungsfreiheit zu verbessern.</p>
            </div>

            <div>
              <h3 className='text-3xl mb-4 text-teal-500'>Wärmetherapie</h3>
              <p>Mit Wärmetherapie fördern wir die Durchblutung, lockern Verspannungen und reduzieren Schmerzen. Diese Methode kann bei verschiedenen muskulären Beschwerden und rheumatischen Erkrankungen äußerst effektiv sein.</p>
            </div>

            <div>
              <h3 className='text-3xl mb-4 text-teal-500'>Manuelle Lympgdrainage</h3>
              <p>Die sanfte, rhythmische Massage der Lymphwege dient der Entschlackung und Entstauung des Gewebes. Diese Methode ist besonders effektiv bei Ödemen und unterstützt den natürlichen Abfluss der Lymphflüssigkeit.</p>
            </div>

            <div>
              <h3 className='text-3xl mb-4 text-teal-500'>Massage</h3>
              <p>Unsere qualifizierten Masseure bieten eine Vielzahl von Massagetechniken an, um Verspannungen zu lösen, die Durchblutung zu verbessern und das allgemeine Wohlbefinden zu steigern.</p>
            </div>

            <div>
              <h3 className='text-3xl mb-4 text-teal-500'>Kryotherapie</h3>
              <p>Die Kryotherapie nutzt Kälte zur gezielten Schmerzlinderung und zur Reduktion von Entzündungen. Dies kann insbesondere bei Sportverletzungen und rheumatischen Beschwerden eine wohltuende Wirkung entfalten.</p>
            </div>

            <div>
              <h3 className='text-3xl mb-4 text-teal-500'>Kinesio Taping</h3>
              <p>Durch das Anlegen von elastischen Tapes unterstützen wir die natürliche Heilung von Verletzungen und stabilisieren Gelenke. Kinesio Taping kann Schmerzen reduzieren und die Beweglichkeit fördern.</p>
            </div>

            <div>
              <h3 className='text-3xl mb-4 text-teal-500'>Personal Training</h3>
              <p>Unser Personal Training bietet individuelle Betreuung und maßgeschneiderte Trainingspläne. Wir unterstützen Sie dabei, Ihre Fitnessziele zu erreichen und Ihren Körper optimal zu stärken.</p>
            </div>

            <div>
              <h3 className='text-3xl mb-4 text-teal-500'>Hausbesuche</h3>
              <p>Für Patienten, die nicht zu uns kommen können, bieten wir einen umfassenden Hausbesuchsservice an. Unsere Therapeuten kommen zu Ihnen, um die bestmögliche Versorgung in Ihrer gewohnten Umgebung zu gewährleisten</p>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
