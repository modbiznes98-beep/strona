import { useState, useEffect } from 'react';
import { ChevronDown, CheckCircle2, Award, TrendingUp, Shield, Wrench, Phone, Mail, MapPin, Star, MessageCircle, X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CircularProgress } from './components/CircularProgress';
import { MapWithRadius } from './components/MapWithRadius';
import logo from "../imports/image-0.png";
import slide1 from "../imports/image-1.png";
import slide2 from "../imports/image-2.png";
import slide3 from "../imports/image-0.png";
import mycieDachow from "../imports/image-1.png";
import malowanieDachow from "../imports/image-2.png";
import mycieBrukowej from "../imports/image-0.png";
import mycieElewacji from "../imports/image-1.png";
import malowanieOgrodzen from "../imports/image-2.png";
import przemysl from "../imports/image-0.png";
import dlaczegoMy from "../imports/image-1.png";

export default function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentReviewSet, setCurrentReviewSet] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatStep, setChatStep] = useState<'main' | 'services' | 'contact' | 'pricing'>('main');

  const slides = [
    {
      image: slide2,
      title: 'Zadbamy o twoją wizytówkę',
      subtitle: 'Profesjonalne usługi czyszczenia i malowania'
    },
    {
      image: slide3,
      title: 'IMPREGNACJE – DEZYNFEKCJE',
      subtitle: 'Ochrona Twojej nieruchomości'
    },
    {
      image: slide1,
      title: 'MYCIE – MALOWANIE',
      subtitle: 'Kompleksowe odświeżenie budynku'
    }
  ];

  const reviews = [
    {
      text: 'Dziękujemy za satysfakcjonujące nas w pełnej mierze doczyszczenie elewacji i dachu wieżowca u nas w Krakowie na Tuchowskiej',
      author: 'Małgorzata Kowal',
      date: '2 miesiące temu',
      initials: 'MK'
    },
    {
      text: 'Dzięki Renowalux z naszego nowo kupionego mieszkania udało się pozbyć wrednego zapachu, w dużej mierze był to zapach dymu papierosowego. Polecam ozonowanie.',
      author: 'Dominik Muras',
      date: '3 miesiące temu',
      initials: 'DM'
    },
    {
      text: 'Nie wierzyliśmy do końca w ich możliwości. Nasza elewacja wygląda teraz jak nowa. Teraz wiemy, że dobrze wybraliśmy. Polecamy ich!',
      author: 'Anna i Tomek',
      date: '1 miesiąc temu',
      initials: 'AT'
    },
    {
      text: 'Profesjonalne podejście do klienta. Dach jak nowy po myciu i malowaniu. Bardzo solidna ekipa, polecam każdemu.',
      author: 'Marek Kowalski',
      date: '4 miesiące temu',
      initials: 'MK'
    },
    {
      text: 'Rewelacyjna robota! Kostka brukowa odzyskała swój pierwotny kolor. Sąsiedzi pytają gdzie znaleźliśmy tak dobrą firmę.',
      author: 'Zofia Nowak',
      date: '2 tygodnie temu',
      initials: 'ZN'
    },
    {
      text: 'Wykonali u nas mycie i malowanie ogrodzenia. Efekt przeszedł nasze oczekiwania. Terminowość na najwyższym poziomie.',
      author: 'Piotr i Ania',
      date: '5 miesięcy temu',
      initials: 'PA'
    },
    {
      text: 'Polecili nas znajomi i nie żałujemy. Elewacja kamienicy wygląda wspaniale. Firma godna polecenia!',
      author: 'Barbara Wiśniewska',
      date: '3 tygodnie temu',
      initials: 'BW'
    },
    {
      text: 'Najlepsza firma jaką mieliśmy okazję poznać. Dach naszego domu został umyty i pomalowany perfekcyjnie.',
      author: 'Janusz Lewandowski',
      date: '6 miesięcy temu',
      initials: 'JL'
    },
    {
      text: 'Dzięki ich pracy nasz budynek odzyskał dawny blask. Ceny uczciwe, praca wykonana z pasją. Gorąco polecamy!',
      author: 'Krystyna i Józef',
      date: '1 miesiąc temu',
      initials: 'KJ'
    },
    {
      text: 'Mycie elewacji w naszym bloku - efekt wow! Wszyscy mieszkańcy są zachwyceni. Profesjonalizm na najwyższym poziomie.',
      author: 'Agnieszka Tomczyk',
      date: '2 miesiące temu',
      initials: 'AT'
    },
    {
      text: 'Szybko, sprawnie, profesjonalnie. Nasza kostka brukowa wygląda jak nowa. Bardzo dziękujemy za świetną robotę!',
      author: 'Robert Kamiński',
      date: '4 tygodnie temu',
      initials: 'RK'
    },
    {
      text: 'Współpraca na medal! Dach pomalowany, elewacja umyta - wszystko zgodnie z ustaleniami. Firma godna zaufania.',
      author: 'Ewa Zielińska',
      date: '7 miesięcy temu',
      initials: 'EZ'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReviewSet((prev) => (prev + 1) % Math.ceil(reviews.length / 3));
    }, 5000);

    return () => clearInterval(timer);
  }, [reviews.length]);

  const offerItems = [
    'Mycie dachów',
    'Mycie elewacji',
    'Mycie kostki',
    'Malowanie dachów',
    'Przemysł - mycie i malowanie',
    'Malowanie i mycie ogrodzenia'
  ];

  return (
    <div className="size-full bg-gray-50">
      <nav className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white shadow-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img src={logo} alt="Logo" className="h-12 w-auto" />
            </div>

            <div className="flex items-center space-x-8">
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                  onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
                >
                  <span className="font-medium">NASZA OFERTA</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                    <div className="py-2">
                      {offerItems.map((item, index) => (
                        <a
                          key={index}
                          href="#"
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <a
                href="#blog"
                className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Blog
              </a>

              <a
                href="#kontakt"
                className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Kontakt
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer dla fixed navbar */}
      <div className="h-16"></div>

      <div className="relative h-[600px] overflow-hidden bg-gray-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut"
            }}
            className="absolute inset-0"
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <motion.h2
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.5,
                    duration: 1,
                    ease: "easeOut"
                  }}
                  className="text-6xl mb-6 drop-shadow-2xl"
                >
                  {slides[currentSlide].title}
                </motion.h2>
                <motion.p
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.8,
                    duration: 1,
                    ease: "easeOut"
                  }}
                  className="text-2xl drop-shadow-lg"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 rounded-full transition-all ${
                currentSlide === index ? 'bg-white w-10' : 'bg-white/50 w-3'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Przejdź do slajdu ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Ruchomy pasek z usługami */}
      <div className="relative overflow-hidden bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 py-6 shadow-xl">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: [0, -1920]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear"
            }
          }}
        >
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center text-white">
              <span className="mx-6 text-xl tracking-wide">Profesjonalne Mycie dachów</span>
              <span className="text-blue-400 mx-2">•</span>
              <span className="mx-6 text-xl tracking-wide">Malowanie dachów</span>
              <span className="text-blue-400 mx-2">•</span>
              <span className="mx-6 text-xl tracking-wide">Mycie elewacji</span>
              <span className="text-blue-400 mx-2">•</span>
              <span className="mx-6 text-xl tracking-wide">Mycie kostki brukowej</span>
              <span className="text-blue-400 mx-2">•</span>
              <span className="mx-6 text-xl tracking-wide">Malowanie i mycie ogrodzenia</span>
              <span className="text-blue-400 mx-2">•</span>
              <span className="mx-6 text-xl tracking-wide">Przemysł - mycie i malowanie</span>
              <span className="text-blue-400 mx-2">•</span>
            </div>
          ))}
        </motion.div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl mb-8 text-gray-900 leading-relaxed">
            Liczy się jakość i Twoje zadowolenie jako klienta stąd większość naszych zleceń pochodzi z polecenia.
            Naszą ekipę łączy pasja oraz ponad 10 letnie doświadczenie, dlatego każde zlecenie wykonujemy jak dla siebie dbając o każdy szczegół.
          </h1>
        </div>

        <div className="mb-16">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-24"></div>
              <div className="mx-4 w-3 h-3 bg-blue-500 rotate-45"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-24"></div>
            </div>
            <h2 className="text-5xl text-gray-900 mb-4">Nasze usługi</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Oferujemy kompleksowe usługi czyszczenia i malowania. Każde zlecenie wykonujemy 
              z najwyższą starannością, wykorzystując profesjonalny sprzęt i sprawdzone technologie.
            </p>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-24"></div>
              <div className="mx-4 w-3 h-3 bg-blue-500 rotate-45"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-24"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={mycieDachow}
                  alt="Mycie dachów"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-3xl mb-2 drop-shadow-lg">Mycie dachów</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Profesjonalne czyszczenie dachów z wykorzystaniem nowoczesnych technologii. Usuwamy mchy, glony i zabrudzenia.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={malowanieDachow}
                  alt="Malowanie dachów"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-3xl mb-2 drop-shadow-lg">Malowanie dachów</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Kompleksowe malowanie dachów z najwyższej jakości materiałami. Odnawiamy i zabezpieczamy pokrycia dachowe.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={mycieBrukowej}
                  alt="Mycie kostki brukowej"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-3xl mb-2 drop-shadow-lg">Mycie kostki brukowej</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Skuteczne mycie kostki brukowej metodą ciśnieniową. Przywracamy pierwotny wygląd nawierzchni i podjazdów.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={mycieElewacji}
                  alt="Mycie elewacji"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-3xl mb-2 drop-shadow-lg">Mycie elewacji</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Profesjonalne czyszczenie fasad budynków. Usuwamy zabrudzenia, graffiti i naloty biologiczne z elewacji.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={malowanieOgrodzen}
                  alt="Malowanie ogrodzeń"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-3xl mb-2 drop-shadow-lg">Malowanie ogrodzeń</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Kompleksowe malowanie i mycie ogrodzeń. Zabezpieczamy i odnawiamy konstrukcje metalowe oraz drewniane.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={przemysl}
                  alt="Przemysł - mycie i malowanie"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-3xl mb-2 drop-shadow-lg">Przemysł</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Specjalistyczne usługi dla przemysłu. Mycie i malowanie hal magazynowych, obiektów produkcyjnych.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Sekcja Dlaczego my? */}
        <div className="mb-16 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-8 lg:p-12 flex flex-col justify-center"
            >
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <div className="h-1 w-12 bg-blue-500 mr-4"></div>
                  <h2 className="text-4xl text-gray-900">Dlaczego my?</h2>
                </div>
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Czystość to nie tylko wizytówka nieruchomości, która cieszy oko. Powierzchnia nie myta co 3-5 lat szczególnie od strony północnej i zachodniej gromadzi w szczelinach i porach zabrudzenia najczęściej algi które pod wpływem niedoschnięcia i zastania są dobrym środowiskiem do pojawienia się korozji w przypadku dachu lub mikro organizmów w postaci alg, glonów na elewacji, które potrafią być niebezpieczne dla mieszkańców i ich płuc, ale także dla samej powierzchni, która jeśli zwlekamy ulega popękaniu szczególnie podczas mrozów czy też odbarwieniu koloru elewacji co wiąże się z kosztami dodatkowymi żeby wybawić plamy zielone po algach gdy same mycie nie wystarczyło, stąd zalecana dezynfekcja po myciu, która zabija mikroorganizmy do końca, przywraca pierwotny kolor i daje spokój na dłuższe lata.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <p className="text-gray-800 text-lg">
                  <span className="font-semibold text-blue-600">Zachęcamy do współpracy i bezpłatnej wyceny.</span>
                </p>
              </div>

              {/* Statystyki */}
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
                  <div className="text-gray-600 text-sm">Lat doświadczenia</div>
                </div>
                <div className="text-center border-l border-r border-gray-300">
                  <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600 text-sm">Zadowolonych klientów</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
                  <div className="text-gray-600 text-sm">Zrealizowanych projektów</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] lg:h-auto"
            >
              <img
                src={dlaczegoMy}
                alt="Profesjonalne mycie elewacji"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
            </motion.div>
          </div>
        </div>

        {/* Sekcja Co nas wyróżnia? */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-24"></div>
              <div className="mx-4 w-3 h-3 bg-blue-500 rotate-45"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-24"></div>
            </div>
            <h2 className="text-5xl text-gray-900 mb-4">Co nas wyróżnia?</h2>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="space-y-6 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 mt-1">
                  <Wrench className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  <span className="font-semibold text-gray-900">Włoski sprzęt spalinowy</span> – od początku dysponujemy włoskim sprzętem spalinowym który, zapewnia nawet o 30% lepszą i szybszą dokładność czyszczenia w porównaniu do maszyn łatwo dostępnych na prąd
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  <span className="font-semibold text-gray-900">Wykonanie "jak dla siebie"</span> – chęć wykonania zlecenia "jak sobie" żeby móc zostać poleconym
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 mt-1">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  <span className="font-semibold text-gray-900">Długoletnie doświadczenie</span> – które wyrobiło nam różne techniki
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 mt-1">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  <span className="font-semibold text-gray-900">Możliwość negocjacji</span> – na oględzinach
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 mt-1">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  <span className="font-semibold text-gray-900">Przetestowane środki</span> – najlepsze środki chemiczne do mycia, dezynfekcji i farby, dzięki którym praca jest wykonana w wyższym standardzie i daje spokojną głowę na dłużej. Stosowana przez nas chemia jest najwyższej klasy, dlatego nie znajduje się w markecie a często poprawiamy prace po kilku miesiącach od wykonania przez amatorów z chemią marketową.
                </p>
              </motion.div>
            </div>

            {/* Wskaźniki 100% */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <CircularProgress percentage={100} label="Profesjonalizmu" delay={0} />
              <CircularProgress percentage={100} label="Zadowolonych klientów" delay={200} />
              <CircularProgress percentage={100} label="Uczciwych cen" delay={400} />
              <CircularProgress percentage={100} label="Gwarancji satysfakcji" delay={600} />
            </div>
          </div>
        </div>

        {/* Sekcja Kontakt */}
        <section id="kontakt" className="mb-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-24"></div>
              <div className="mx-4 w-3 h-3 bg-blue-500 rotate-45"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-24"></div>
            </div>
            <h2 className="text-5xl text-gray-900 mb-4">Kontakt</h2>
            <p className="text-xl text-gray-600">Skontaktuj się z nami - odpowiemy na wszystkie pytania</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Lewa strona - informacje kontaktowe */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h3 className="text-3xl text-gray-900 mb-8">Dane kontaktowe</h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Telefon</div>
                    <a href="tel:790320653" className="text-xl text-gray-900 hover:text-blue-600 transition-colors">
                      790 320 653
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">E-mail</div>
                    <a href="mailto:rafwlo@o2.pl" className="text-xl text-gray-900 hover:text-blue-600 transition-colors">
                      rafwlo@o2.pl
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white mb-8">
                <h4 className="text-2xl mb-2">Darmowy dojazd do 200km</h4>
                <p className="text-blue-100">Obsługujemy szeroki obszar Polski - sprawdź zasięg na mapie!</p>
              </div>

              <div className="mb-8">
                <h4 className="text-xl text-gray-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  Województwa
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Śląsk',
                    'Łódzkie',
                    'Małopolska',
                    'Dolnośląskie',
                    'Mazowieckie',
                    'Świętokrzyskie',
                    'Opolskie',
                    'Wielkopolskie'
                  ].map((woj) => (
                    <div key={woj} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">{woj}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl text-gray-900 mb-4">Miasta, w których najczęściej jesteśmy</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Częstochowa', 'Katowice', 'Łódź', 'Będzin', 'Poznań', 'Wieluń',
                    'Gliwice', 'Opole', 'Radomsko', 'Kłobuck', 'Kraków', 'Wrocław',
                    'Legnica', 'Ostrawa', 'Piotrków Trybunalski', 'Radom', 'Kielce',
                    'Zakopane', 'Bielsko-Biała', 'Warszawa'
                  ].map((miasto) => (
                    <span
                      key={miasto}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                    >
                      {miasto}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Prawa strona - mapa */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <MapWithRadius />
            </motion.div>
          </div>
        </section>

        {/* Sekcja Opinie Klientów */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-24"></div>
              <div className="mx-4 w-3 h-3 bg-blue-500 rotate-45"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-24"></div>
            </div>
            <h2 className="text-5xl text-gray-900 mb-4">Opinie Klientów</h2>
            <p className="text-xl text-gray-600">Zobacz co mówią o nas nasi zadowoleni klienci</p>
          </div>

          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentReviewSet}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {reviews.slice(currentReviewSet * 3, currentReviewSet * 3 + 3).map((review, index) => (
                  <motion.div
                    key={currentReviewSet * 3 + index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col"
                  >
                    {/* Header z avatar i imieniem */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold text-lg">
                        {review.initials}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{review.author}</div>
                        <div className="text-sm text-gray-500">{review.date}</div>
                      </div>
                    </div>

                    {/* Gwiazdki */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Treść opinii */}
                    <p className="text-gray-700 leading-relaxed flex-1">
                      {review.text}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Nawigacja - kropki */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: Math.ceil(reviews.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReviewSet(index)}
                  className={`h-3 rounded-full transition-all ${
                    currentReviewSet === index ? 'bg-blue-600 w-8' : 'bg-gray-300 w-3'
                  }`}
                  aria-label={`Przejdź do zestawu opinii ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Kolumna 1 - Logo i opis */}
            <div>
              <img src={logo} alt="Renowalux Logo" className="h-12 w-auto mb-4 brightness-0 invert" />
              <p className="text-gray-400 text-sm leading-relaxed">
                Profesjonalne mycie i malowanie dachów, elewacji, kostki brukowej i ogrodzeń. Ponad 10 lat doświadczenia.
              </p>
            </div>

            {/* Kolumna 2 - Usługi */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Nasze Usługi</h3>
              <ul className="space-y-2">
                {offerItems.map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kolumna 3 - Kontakt */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <a href="tel:790320653" className="text-gray-400 hover:text-white transition-colors">
                    790 320 653
                  </a>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <a href="mailto:rafwlo@o2.pl" className="text-gray-400 hover:text-white transition-colors">
                    rafwlo@o2.pl
                  </a>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span className="text-gray-400">Częstochowa i okolice</span>
                </li>
              </ul>
            </div>

            {/* Kolumna 4 - Linki */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Informacje</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://www.google.com/search?sca_esv=11b517be6cd30da4&sxsrf=ANbL-n6XWV-SFJ7grTEfaY9ty0UXtrwxDw:1775563569362&q=Renowalux+malowanie+i+mycie+dach%C3%B3w,+elewacji,+kostki+brukowej+Opinie&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2NDc2NDEys7QwMjQ0MTSyNDQz2cDI-IrRNSg1L788Mae0QiE3MQfIystMVchUyK1MBtIpickZhzeX6yik5qSWJyZnZeooZOcXl2RnKiQVlWbnl6dmKfgXZAJ1LGKljjkAkT4s_aoAAAA&rldimm=1731426982114129164&tbm=lcl&hl=pl-PL&sa=X&ved=2ahUKEwiQwM_e2duTAxWeSvEDHdqdPAUQ9fQKegQIMBAG&biw=1536&bih=826&dpr=1.25#lkt=LocalPoiReviews"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"
                  >
                    Zostaw opinię na Google
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Regulamin
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Polityka prywatności
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Polityka cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Separator */}
          <div className="border-t border-gray-800 pt-8">
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                © 2026 Renowalux - Profesjonalne Mycie i Malowanie. Wszelkie prawa zastrzeżone.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-6 right-6 z-[9998] w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Otwórz chat"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-[9998] w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Asystent Renowalux</h3>
                  <p className="text-blue-100 text-xs">Czym możemy pomóc?</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setIsChatOpen(false);
                  setChatStep('main');
                }}
                className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
                aria-label="Zamknij chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Content */}
            <div className="p-4 max-h-[500px] overflow-y-auto bg-gray-50">
              {/* Main Menu */}
              {chatStep === 'main' && (
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <p className="text-gray-600 text-sm mb-3">Wybierz temat, którym jesteś zainteresowany:</p>
                  </div>
                  
                  <button
                    onClick={() => setChatStep('services')}
                    className="w-full bg-white hover:bg-blue-50 p-4 rounded-lg shadow-sm text-left transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900 group-hover:text-blue-600">🏠 Nasze usługi</span>
                      <ChevronDown className="w-5 h-5 text-gray-400 -rotate-90" />
                    </div>
                  </button>

                  <button
                    onClick={() => setChatStep('pricing')}
                    className="w-full bg-white hover:bg-blue-50 p-4 rounded-lg shadow-sm text-left transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900 group-hover:text-blue-600">💰 Wycena i ceny</span>
                      <ChevronDown className="w-5 h-5 text-gray-400 -rotate-90" />
                    </div>
                  </button>

                  <button
                    onClick={() => setChatStep('contact')}
                    className="w-full bg-white hover:bg-blue-50 p-4 rounded-lg shadow-sm text-left transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900 group-hover:text-blue-600">📞 Kontakt i oględziny</span>
                      <ChevronDown className="w-5 h-5 text-gray-400 -rotate-90" />
                    </div>
                  </button>

                  <a
                    href="https://www.google.com/search?sca_esv=11b517be6cd30da4&sxsrf=ANbL-n6XWV-SFJ7grTEfaY9ty0UXtrwxDw:1775563569362&q=Renowalux+malowanie+i+mycie+dach%C3%B3w,+elewacji,+kostki+brukowej+Opinie&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2NDc2NDEys7QwMjQ0MTSyNDQz2cDI-IrRNSg1L788Mae0QiE3MQfIystMVchUyK1MBtIpickZhzeX6yik5qSWJyZnZeooZOcXl2RnKiQVlWbnl6dmKfgXZAJ1LGKljjkAkT4s_aoAAAA&rldimm=1731426982114129164&tbm=lcl&hl=pl-PL&sa=X&ved=2ahUKEwiQwM_e2duTAxWeSvEDHdqdPAUQ9fQKegQIMBAG&biw=1536&bih=826&dpr=1.25#lkt=LocalPoiReviews"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-white hover:bg-blue-50 p-4 rounded-lg shadow-sm text-left transition-colors group block"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900 group-hover:text-blue-600">⭐ Opinie klientów</span>
                      <ExternalLink className="w-5 h-5 text-gray-400" />
                    </div>
                  </a>
                </div>
              )}

              {/* Services Menu */}
              {chatStep === 'services' && (
                <div className="space-y-3">
                  <button
                    onClick={() => setChatStep('main')}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium mb-2 flex items-center gap-1"
                  >
                    <ChevronDown className="w-4 h-4 rotate-90" />
                    Powrót
                  </button>

                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <p className="text-gray-600 text-sm mb-3">Wybierz usługę, która Cię interesuje:</p>
                  </div>

                  {offerItems.map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                      <p className="font-medium text-gray-900 mb-2">{item}</p>
                      <p className="text-sm text-gray-600 mb-3">
                        {item.includes('Mycie dachów') && 'Profesjonalne czyszczenie dachów z usuwaniem mchów i glonów.'}
                        {item.includes('Malowanie dachów') && 'Kompleksowe malowanie dachów najwyższej jakości farbami.'}
                        {item.includes('kostki') && 'Skuteczne mycie kostki brukowej metodą ciśnieniową.'}
                        {item.includes('elewacji') && 'Profesjonalne czyszczenie fasad budynków.'}
                        {item.includes('ogrodzenia') && 'Mycie i malowanie ogrodzeń metalowych i drewnianych.'}
                        {item.includes('Przemysł') && 'Specjalistyczne usługi dla obiektów przemysłowych.'}
                      </p>
                      <a
                        href="tel:790320653"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
                      >
                        <Phone className="w-4 h-4" />
                        Zadzwoń: 790 320 653
                      </a>
                    </div>
                  ))}
                </div>
              )}

              {/* Pricing Menu */}
              {chatStep === 'pricing' && (
                <div className="space-y-3">
                  <button
                    onClick={() => setChatStep('main')}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium mb-2 flex items-center gap-1"
                  >
                    <ChevronDown className="w-4 h-4 rotate-90" />
                    Powrót
                  </button>

                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Bezpłatna wycena</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Oferujemy darmową wycenę i oględziny w promieniu 200km od Częstochowy. Ceny ustalamy indywidualnie po oględzinach.
                    </p>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                    <p className="text-sm text-blue-900 font-medium mb-2">🎯 Co wpływa na cenę?</p>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Powierzchnia do umycia/malowania</li>
                      <li>• Stan powierzchni</li>
                      <li>• Rodzaj materiału</li>
                      <li>• Dostępność miejsca</li>
                      <li>• Zakres dodatkowych usług</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-sm text-gray-600 mb-3">
                      Skontaktuj się z nami, aby umówić bezpłatne oględziny i otrzymać szczegółową wycenę:
                    </p>
                    <div className="space-y-2">
                      <a
                        href="tel:790320653"
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                      >
                        <Phone className="w-5 h-5" />
                        790 320 653
                      </a>
                      <a
                        href="mailto:rafwlo@o2.pl"
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                      >
                        <Mail className="w-5 h-5" />
                        rafwlo@o2.pl
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* Contact Menu */}
              {chatStep === 'contact' && (
                <div className="space-y-3">
                  <button
                    onClick={() => setChatStep('main')}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium mb-2 flex items-center gap-1"
                  >
                    <ChevronDown className="w-4 h-4 rotate-90" />
                    Powrót
                  </button>

                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-3">Dane kontaktowe</h4>
                    <div className="space-y-3">
                      <a
                        href="tel:790320653"
                        className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                      >
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                          <Phone className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-xs text-gray-600">Telefon</div>
                          <div className="font-medium text-gray-900">790 320 653</div>
                        </div>
                      </a>

                      <a
                        href="mailto:rafwlo@o2.pl"
                        className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                      >
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                          <Mail className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-xs text-gray-600">E-mail</div>
                          <div className="font-medium text-gray-900">rafwlo@o2.pl</div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-4 rounded-lg text-white">
                    <h4 className="font-semibold mb-2">✅ Darmowy dojazd do 200km</h4>
                    <p className="text-sm text-blue-100">
                      Obsługujemy województwa: Śląsk, Łódzkie, Małopolska, Dolnośląskie, Mazowieckie, Świętokrzyskie, Opolskie, Wielkopolskie
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Umów bezpłatne oględziny</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Przyjedziemy, ocenimy stan powierzchni i przedstawimy szczegółową wycenę. Bez żadnych zobowiązań!
                    </p>
                    <a
                      href="tel:790320653"
                      className="inline-flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      Zadzwoń teraz
                    </a>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}