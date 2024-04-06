"use client";
import { Imperial_Script } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
// import { StyleSheet, StyleSheetServer, css } from 'aphrodite';
// import ReactDOMServer from 'react-dom/server';

const headerFont = Imperial_Script({ weight: "400", subsets: ["latin"] });

// create two dimensional array of image sections
const imageSections: { [key: string]: { src: string; title: string }[] } = {
  paw: [
    {
      src: "benjamin.jpg",
      title: "To se narodil Benjík, který k nám neodmyslitelně patří.",
    },
    { src: "benjamin2.jpeg", title: "Mezi jeho záliby patří jídlo..." },
    { src: "benjamin3.jpeg", title: "...spánek..." },
    { src: "benjamin4.jpeg", title: "...a proto si tak skvěle rozumíme" },
  ],
  majales: [
    { src: "majales1.jpeg", title: "Oba jsme se tam vydali" },
    {
      src: "majales2.jpeg",
      title: "při vzniku této fotky jsme se poprvé uviděli",
    },
    { src: "majales3.jpeg", title: "a od té doby držíme majálesovou tradici" },
    { src: "majales4.jpeg", title: "letos to nebude naše první svatba" },
  ],
  dating: [
    { src: "dating1.jpg", title: "30.7. Benjík slavil narozeniny" },
    {
      src: "dating2.jpg",
      title: "tu nejlepší maminku už měl",
    },
    {
      src: "dating3.jpg",
      title: "a přál si ještě někoho do zálohy",
    },
    {
      src: "dating4.jpg",
      title: "a tak jsme to dali dohromady",
    },
  ],
  life: [
    { src: "life1.jpg", title: "30.7. Benjík slavil narozeniny" },
    {
      src: "life2.jpg",
      title: "tu nejlepší maminku už měl",
    },
    {
      src: "life3.jpg",
      title: "a přál si ještě někoho do zálohy",
    },
    {
      src: "life4.jpg",
      title: "a tak jsme to dali dohromady",
    },
    {
      src: "life5.jpg",
      title: "a tak jsme to dali dohromady",
    },
    {
      src: "life6.jpg",
      title: "a tak jsme to dali dohromady",
    },
  ],
  engagement: [
    { src: "engagement1.jpg", title: "Tuhle tváf fi nelfe nefamilovat," },
    {
      src: "engagement2.jpg",
      title: "tak jsem jí požádal o ruku a ona nejdřív řekla ne,",
    },
    {
      src: "engagement3.jpg",
      title: "ale viděla ten krásný miniaturní pěstní klín a rozmyslela si to.",
    },
    {
      src: "engagement4.jpg",
      title:
        "Po roce jsme se vrátili na místo činu a udělali bordel na plotě u našeho majáku.",
    },
  ],
  house: [
    { src: "house1.jpg", title: "5.4. Jsme převzali klíče od 30 leté hypotéky a plní elánu jsme se pustili do rekonstrukce." },
    {
      src: "house2.jpg",
      title: "Makali jsme ve dne v noci.",
    },
    {
      src: "house3.jpg",
      title: "Naštěstí na se to na psychice nepodepsalo.",
    },
    {
      src: "house4.jpg",
      title:
        "A užili jsme si první Vánoce ve svém vlastním baráčku.",
    },
  ],
  wedding: [
    { src: "wedding1.jpg", title: "Svá poslední svoboná slova vyslovíme na zámku v Jindřichovicích 26.6.2024" },
  ],
};

// const imageSections:

export default function Home() {
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  const [imagesToShow, setImagesToShow] = useState(imageSections["paw"]);
  const [currentImage, setCurrentImage] = useState("");
  const [currentTitle, setCurrentTitle] = useState("");
  const handleKeyDown = (e: any) => {
    if (e.key !== "Escape") return;
    setLightBoxDisplay(false);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  const showImageSection = (e: any, section: string) => {
    e.preventDefault();

    // alert("");
    //set imageToShow to be the one that's been clicked on
    setImagesToShow(imageSections[section]);

    setCurrentImage(imageSections[section][0].src);
    setCurrentTitle(imageSections[section][0].title);
    //set lightbox visibility to true
    setLightBoxDisplay(true);
  };

  const changeImage = (index: number) => {
    setCurrentImage(imagesToShow[index].src);
    setCurrentTitle(imagesToShow[index].title);
  };

  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };
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
        <h2 className={"name " + headerFont.className}>Ivča & Honza</h2>
        <div className="relative place-items-center main-image">
          {/* <img
            src="https://samcza.github.io/invitation/us2.jpeg"
            alt="Thats us"
            // sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: "top",
              height: "100%",
              width: "100%",
            }}
          /> */}
          {lightboxDisplay ? (
            <div className="modal">
              <div className="lightbox">
                <Image
                  className="lightbox-img"
                  width={1000}
                  height={500}
                  alt="main-image"
                  src={"/" + currentImage}
                  style={{
                    objectFit: "scale-down",
                    objectPosition: "center",
                  }}
                />
                <div className="lightbox-title">{currentTitle}</div>
                <div className="lightbox-gallery">
                  {imagesToShow.map((image, index) => {
                    return (
                      <div style={{ width: "25%", position: "relative" }}>
                        <Image
                          className="lightbox-img"
                          fill
                          onClick={() => changeImage(index)}
                          alt="main-image"
                          src={"/" + image.src}
                          style={{
                            objectFit: "scale-down",
                            objectPosition: "center",
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          <Image
            src="/us5.jpg"
            alt="Thats us"
            fill
            // sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
      </div>
      <div id="about_us" className="text-left container-section-2 ">
        <h2 className={headerFont.className}>Bylo nebylo</h2>
        <img
          className="relative divider"
          src="https://samcza.github.io/invitation/divider.svg"
          alt="divider"
        />
        <div className="tldr-container-horizontal">
          <Image
            className="relative"
            src="/tldr-horizontal.svg"
            alt="tldr"
            width={1000}
            height={1000}
            useMap="#tldr-horizontal"
            style={{
              minWidth: "1000px",
            }}
          />
          <map className="img-mapper-map" name={"tldr-horizontal"}>
            <area
              className="paw"
              shape="circle"
              coords="50,100,50"
              href="https://samcza.github.io/invitation/tldr.svg"
              alt="packa"
              onClick={(e) => {
                showImageSection(e, "paw");
              }}
            />
            <area
              className="paw"
              shape="circle"
              coords="200,95,50"
              href="https://samcza.github.io/invitation/tldr.svg"
              alt="packa"
              onClick={(e) => {
                showImageSection(e, "majales");
              }}
            />
            <area
              className="paw"
              shape="circle"
              coords="350,95,50"
              href="https://samcza.github.io/invitation/tldr.svg"
              alt="packa"
              onClick={(e) => {
                showImageSection(e, "dating");
              }}
            />
            <area
              className="paw"
              shape="rect"
              coords="410,0,580,140"
              href="https://samcza.github.io/invitation/tldr.svg"
              alt="packa"
              onClick={(e) => {
                showImageSection(e, "life");
              }}
            />
            <area
              className="paw"
              shape="circle"
              coords="650,95,50"
              href="https://samcza.github.io/invitation/tldr.svg"
              alt="packa"
              onClick={(e) => {
                showImageSection(e, "engagement");
              }}
            />
            <area
              className="paw"
              shape="circle"
              coords="800,95,50"
              href="https://samcza.github.io/invitation/tldr.svg"
              alt="packa"
              onClick={(e) => {
                showImageSection(e, "house");
              }}
            />
            <area
              className="paw"
              shape="circle"
              coords="950,95,50"
              href="https://samcza.github.io/invitation/tldr.svg"
              alt="packa"
              onClick={(e) => {
                showImageSection(e, "wedding");
              }}
            />
          </map>
        </div>
        <div className="tldr-container-vertical">
          <Image
            className="relative"
            src="/tldr-vertical.svg"
            alt="tldr"
            width={200}
            height={1000}
            useMap="#tldr-vertical"
            style={{
              minHeight: "1000px",
              maxHeight: "1000px",
            }}
          />
          <map className="img-mapper-map" name={"tldr-vertical"}>
            <area
              className="paw"
              shape="circle"
              coords="80,80,50"
              href="https://samcza.github.io/invitation/tldr.svg"
              alt="packa"
              onClick={(e) => {
                showImageSection(e, "paw");
              }}
            />
            <area
              className="paw"
              shape="circle"
              coords="80,225,50"
              href="https://samcza.github.io/invitation/tldr.svg"
              alt="packa"
              onClick={(e) => {
                showImageSection(e, "majales");
              }}
            />
            <area
              className="paw"
              shape="circle"
              coords="80,370,50"
              href="https://samcza.github.io/invitation/tldr.svg"
              alt="packa"
              onClick={(e) => {
                showImageSection(e, "dating");
              }}
            />
            <area
              className="paw"
              shape="rect"
              coords="60,430,180,600"
              href="https://samcza.github.io/invitation/tldr.svg"
              alt="packa"
              onClick={(e) => {
                showImageSection(e, "life");
              }}
            />
            <area
              className="paw"
              shape="circle"
              coords="80,655,50"
              href="https://samcza.github.io/invitation/tldr.svg"
              alt="packa"
              onClick={(e) => {
                showImageSection(e, "engagement");
              }}
            />
            <area
              className="paw"
              shape="circle"
              coords="80,800,50"
              href="https://samcza.github.io/invitation/tldr.svg"
              alt="packa"
              onClick={(e) => {
                showImageSection(e, "house");
              }}
            />
            <area
              className="paw"
              shape="circle"
              coords="80,945,50"
              href="https://samcza.github.io/invitation/tldr.svg"
              alt="packa"
              onClick={(e) => {
                showImageSection(e, "wedding");
              }}
            />
          </map>
        </div>
        {/* <p> */}
        {/* za patero hlavami, sedmero lavičkami a devatero prázdnými kelímky byla
          v zajetí nudy opilá princezna. Když v tom se náhle objevil{" "}
          <Link
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
          poštovních holubů. Naštěstí pro našeho hrdinu, princezna má takový
          nešvar - považuje za neslušné neodpovědět na zprávu - a tak to všechno
          začalo.
        </p>
        <br />
        Tahle pohádka není o nás, my jsme do sebe vrazili na Majálesu a dali se
        do řeči... pak už to šlo samo. */}
      </div>
      <div id="plan" className="flex  flex-col items-center justify-between">
        <h2 className={headerFont.className}>Plán</h2>
        <img
          className="relative divider"
          src="https://samcza.github.io/invitation/divider.svg"
          alt="tldr"
        />
        <div className="text-center container-section-1 ">
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

      <div id="map" className="flex  flex-col items-center justify-between">
        <h2 className={headerFont.className}>Kdepa to bude</h2>

        <img
          className="relative divider"
          src="https://samcza.github.io/invitation/divider.svg"
          alt="divider"
        />
        <iframe
          width="100%"
          height="450"
          loading="lazy"
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ-8RddWzUCkcRrbrw-VkaitE&key=AIzaSyDcGyXB3E5WYzIzDbHAAzcBv96WucQPBNU"
        ></iframe>
      </div>
      <div
        id="colors"
        className="flex  flex-col items-center justify-between container-section-2"
      >
        <h2 className={headerFont.className}>Barvy</h2>
        <img
          className="relative divider"
          src="https://samcza.github.io/invitation/divider.svg"
          alt="tldr"
        />
        Svatební výzdoba bude laděna do těchto barev
        <div className="text-center container-section-3 gap-8">
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
        className="flex  flex-col items-center justify-between  mb-32 container-section-2"
      >
        <h2 className={headerFont.className}>Formulář</h2>
        <img
          className="relative divider"
          src="https://samcza.github.io/invitation/divider.svg"
          alt="tldr"
        />
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
