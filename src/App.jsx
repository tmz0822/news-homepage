import logo from './assets/images/logo.svg';
import menuButton from './assets/images/icon-menu.svg';
import menuCloseButton from './assets/images/icon-menu-close.svg';
import contentImage from './assets/images/image-web-3-mobile.jpg';
import contentImageDesktop from './assets/images/image-web-3-desktop.jpg';
import cardImageOne from './assets/images/image-retro-pcs.jpg';
import cardImageTwo from './assets/images/image-top-laptops.jpg';
import cardImageThree from './assets/images/image-gaming-growth.jpg';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // close menu on larger screens
  useEffect(() => {
    console.log('run');
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    if (windowWidth > 640) {
      setIsMenuOpen(false);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);

  return (
    <>
      {isMenuOpen && (
        <div className="fixed h-full w-full bg-black bg-opacity-60 sm:hidden z-[999]"></div>
      )}

      <div className="font-inter px-4 max-w-[1440px] h-full mx-auto">
        {/* sidebar menu */}

        {isMenuOpen && (
          <div className="fixed h-full w-60 right-0 bg-white sm:hidden z-[999]">
            <nav className="relative">
              <ul className="flex flex-col gap-5 pl-5 mt-28">
                <li>
                  <a className="hover:text-primary-red" href="">
                    Home
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary-red" href="">
                    New
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary-red" href="">
                    Popular
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary-red" href="">
                    Trending
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary-red" href="">
                    Categories
                  </a>
                </li>
              </ul>
            </nav>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-5 right-5"
            >
              <img src={menuCloseButton} alt="" />
            </button>
          </div>
        )}

        <header className="py-10 flex justify-between sm:mt-12">
          <div>
            <img src={logo} alt="Logo" />
          </div>

          <div>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="h-10 sm:hidden"
            >
              <img src={menuButton} alt="menu button" />
            </button>

            {/* normal navbar */}
            <nav>
              <ul className="hidden gap-9 sm:flex">
                <li>
                  <a className="hover:text-primary-red" href="">
                    Home
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary-red" href="">
                    New
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary-red" href="">
                    Popular
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary-red" href="">
                    Trending
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary-red" href="">
                    Categories
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main>
          <div className="lg:flex lg:gap-8">
            <div>
              <div>
                <picture>
                  <source
                    media="(min-width:640px)"
                    srcSet={contentImageDesktop}
                  />
                  <img src={contentImage} alt="" />
                </picture>
              </div>
              <div className="mb-20 gap-8 lg:flex lg:mb-0">
                <h1 className="flex-1 font-extrabold text-5xl w-4/5 mt-6">
                  The Bright Future of Web 3.0?
                </h1>
                <div className="flex-1 mt-6">
                  <p className="mb-6 text-[15px]">
                    We dive into the next evolution of the web that claims to
                    put the power of the platforms back into the hands of the
                    people. But is it really fulfilling its promise?
                  </p>
                  <button className="bg-primary-red uppercase text-white px-10 py-4 text-sm font-semibold tracking-[.3em] hover:bg-black">
                    Read more
                  </button>
                </div>
              </div>
            </div>
            <div className="text-white bg-neutral-darkerblue px-8 pt-8">
              <h1 className="text-primary-orange font-bold text-5xl">New</h1>

              <ul>
                <li className="h-40 border-b border-neutral-blue border-opacity-80 flex flex-col justify-center">
                  <a className="font-semibold text-lg mb-1 hover:text-primary-orange cursor-pointer">
                    Hydrogen VS Electric Cars
                  </a>
                  <p className="text-neutral-blue text-sm opacity-80 leading-relaxed">
                    Will hydrogen-fueled cars ever catch up to EVs?
                  </p>
                </li>
                <li className="h-40 border-b border-neutral-blue border-opacity-80 flex flex-col justify-center">
                  <a className="font-semibold text-lg mb-1 hover:text-primary-orange cursor-pointer">
                    The Downsides of AI Artistry
                  </a>
                  <p className="text-neutral-blue text-sm opacity-80 leading-relaxed">
                    What are the possible adverse effects of on-demand AI image
                    generation?
                  </p>
                </li>
                <li className="h-36 border-opacity-80 flex flex-col justify-center">
                  <a className="font-semibold text-lg mb-1 hover:text-primary-orange cursor-pointer">
                    Is VC Funding Drying Up?
                  </a>
                  <p className="text-neutral-blue text-sm opacity-80 leading-relaxed">
                    Private funding by VC firms is down 50% YOY. We take a look
                    at what that means.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="my-20">
            <ul className="flex flex-col gap-8 lg:flex-row">
              <li className="flex gap-6">
                <div className>
                  <img
                    className="w-full object-cover h-full"
                    src={cardImageOne}
                    alt=""
                  />
                </div>
                <div className="flex flex-col basis-4/5">
                  <div className="text-4xl text-neutral-blue font-bold">01</div>
                  <a className="text-base font-bold my-2 cursor-pointer hover:text-primary-orange">
                    Reviving Retro PCs
                  </a>
                  <p className="text-neutral-darkblue text-sm leading-7">
                    What happens when old PCs are given modern upgrades?
                  </p>
                </div>
              </li>

              <li className="flex  gap-6">
                <div>
                  <img
                    className="w-full object-cover h-full "
                    src={cardImageTwo}
                    alt=""
                  />
                </div>
                <div className="flex flex-col basis-4/5">
                  <div className="text-4xl text-neutral-blue font-bold">02</div>
                  <a className="text-base font-bold my-2 cursor-pointer hover:text-primary-orange">
                    Top 10 Laptops of 2022
                  </a>
                  <p className="text-neutral-darkblue text-sm leading-7">
                    Our best picks for various needs and budgets
                  </p>
                </div>
              </li>

              <li className="flex gap-6">
                <div>
                  <img
                    className="w-full object-cover h-full"
                    src={cardImageThree}
                    alt=""
                  />
                </div>
                <div className="flex flex-col basis-4/5">
                  <div className="text-4xl text-neutral-blue font-bold">03</div>
                  <a className="text-base font-bold my-2 cursor-pointer hover:text-primary-orange">
                    The Growth of Gaming
                  </a>
                  <p className="text-neutral-darkblue text-sm leading-7">
                    How the pandemic has sparked fresh opportunities
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;

