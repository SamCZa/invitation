import Image from "next/image";
import Link from "next/link";
// import { StyleSheet, StyleSheetServer, css } from 'aphrodite';
// import ReactDOMServer from 'react-dom/server';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* navbar navbar */}
      <nav className="navbar">
        <a href="#about_us" className="navbar-text">
          O nás
        </a>
        <a
          href="#plan"
          className="navbar-text hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          Harmonogram
        </a>
        <a
          href="#map"
          className="navbar-text hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          Kde
        </a>
        <a href="#colors" className="navbar-text">
          Barvy
        </a>
        <a href="#form" className="navbar-text">
          Formulář
        </a>
      </nav>
      <div className="flex  flex-col items-center justify-between">
        <h2 className="name">Ivča & Honza</h2>
        <div className="relative place-items-center main-image">
          <img
            src="https://samcza.github.io/invitation/us.jpeg"
            alt="Thats us"
            // sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: "top",
              height: "100%",
              width: "100%",
            }}
          />
        </div>
      </div>
      <div id="about_us" className="mb-32 text-left container-section-2 ">
        
        <h2>Bylo nebylo</h2>
         
        
        <img
          className="relative "
          src="/divider.svg"
          alt="ivy"
          width={300}
          height={500}
          
        />
        <p>
          za patero hlavami, sedmero lavičkami a devatero prázdnými kelímky byla
          v zajetí nudy opilá princezna. Když v tom se náhle objevil <Link
            style={{
              textDecoration: "underline",
            }}
            href="https://youtube.com/clip/UgkxRlmhBEZqDuobYiH7_D7_UuF0g2zZMjaZ?si=DqVDt4DkLeEYPbBj"
          >
             Splašený William
          </Link>{" "}
          se svými{" "}
          <Link
            style={{
              textDecoration: "underline",
            }}
            href="https://youtube.com/clip/UgkxJgSKGa1dxdC0_jsMJifRDglgp9Dmhrkq?si=2P253yw70zcsO6J7"
          >
            osmačtyřiceti Okouny.
          </Link>
          To přilákalo pozornost našeho hlavního hrdiny a jeho nohsleda. Po pár
          obratných manévrech se princezně podařilo získat pozornost a zájem
          našeho hrdiny, který měl zrovna náladu někomu zkomplikovat život.
          Odvlekl jí do svého oblíbeného stánku (toho s tou dobrou hopsinkovou
          šťávou) a pomocí několika správně vybraných lektvarů a dobře volených
          slovních obratů jí ukázal, že on je tou správnou volbou. Dřív než si
          stihla uvědomit, co se vlastně děje, vyměnili si čísla svých
          poštovních holubů. Naštěstí pro našeho hrdinu, princezna má takový nešvar -
          považuje za neslušné neodpovědět na zprávu - a tak to všechno začalo.
        </p>
        <br/>
        Tahle pohádka není o nás, my jsme do sebe vrazili na Majálesu a dali se
        do řeči... pak už to šlo samo.
        {/* <Image
          className="relative "
          src="https://samcza.github.io/invitation/coincidence-i-think-not.gif"
          alt="ivy"
          width={500}
          height={500}
          priority
        /> */}
        <br/>
        <br/>
        <div className="tldr-container">
        TLDR:
        <img
          className="relative "
          src="https://samcza.github.io/invitation/tldr2.svg"
          alt="tldr"
        />
        </div>
      </div>
      <div id="plan" className="flex  flex-col items-center justify-between">
        <h2>Plán</h2>
        <img
          className="relative "
          src="https://samcza.github.io/invitation/divider.svg"
          alt="tldr"
        />
        <div className="mb-32 text-center container-section-1 ">
          <div className="container-section-1-left">
            <div className="section-1-left-line">Úterý 25.6.2024</div>
            <br />
            <br />
            <div className="section-1-left-line">Středa 26.6.2024</div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="section-1-left-line">Čtvrtek 27.6.2024</div>
          </div>
          <div className="container-section-1-right">
            <div className="section-1-right-line">16:00 Příjezd</div>
            <div className="section-1-right-line">
              18:00 Grilování a warmup na den D
            </div>
            <br />
            <div className="section-1-right-line">8:00 Snídaně</div>
            <div className="section-1-right-line">11:00 Obřad</div>
            <div className="section-1-right-line">11:30 Focení</div>
            <div className="section-1-right-line">12:30 Oběd</div>
            <div className="section-1-right-line">15:00 Hod kyticí</div>
            <div className="section-1-right-line">15:30 První tanec</div>
            <div className="section-1-right-line">16:00 Volná zábava</div>
            <div className="section-1-right-line">20:00 Večerní raut</div>
            <div className="section-1-right-line">20:00 Focení novomanželů</div>
            <div className="section-1-right-line">21:30 Prskavky</div>
            <div className="section-1-right-line">21:45 Párty</div>
            <br />
            <div className="section-1-right-line">11:00 Opuštění pokojů</div>
            <div className="section-1-right-line">14:00 Odjezd</div>
          </div>
        </div>
      </div>
      <div>
        <div id="map" className="flex  flex-col items-center justify-between">
          <h2>Kdepa to bude</h2>
          <iframe
            width="100%"
            height="450"
            loading="lazy"
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ-8RddWzUCkcRrbrw-VkaitE&key=AIzaSyDcGyXB3E5WYzIzDbHAAzcBv96WucQPBNU"
          ></iframe>
        </div>
      </div>
      <div
        id="colors"
        className="flex  flex-col items-center justify-between mb-16"
      >
        <h2>Barvy</h2>
        Svatební výzdoba bude laděna do těchto barev
        <div className="text-center container-section-3 gap-8 ">
          <div className="color-circle color-1"></div>
          <div className="color-circle color-2"></div>
          <div className="color-circle color-3"></div>
          <div className="color-circle color-4"></div>
          <div className="color-circle color-5"></div>
        </div>
        Nikoho nebude nutit, ALE nevěsta bude ráda, když se budete držet těchto
        barev
      </div>
      <div
        id="form"
        className="flex  flex-col items-center justify-between  mb-16"
      >
        <h2>Formulář</h2>
        Pokud se chystáš přijet na naší svatbu, vyplň prosím následující
        formulář
        <Link
          style={{
            textDecoration: "underline",
            color: "blue",
            fontSize: 30,
          }}
          href="https://forms.gle/s26dvhcrHsRYmfqe9"
        >
          ZDE
        </Link>
      </div>
    </main>
  );
}
