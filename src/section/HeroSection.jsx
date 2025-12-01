import { useGSAP } from '@gsap/react';
import './hero.css';
import { ScrollTrigger } from 'gsap/all';
import { SplitText } from 'gsap/all';
import gsap from 'gsap';
import { useMediaQuery } from 'react-responsive';

const HeroSection = () => {

   const isMobile = useMediaQuery({
        query: "(max-width:768px)",
    })
    
     const isTablet = useMediaQuery({
        query: "(max-width:1024px)",
    })


  gsap.registerPlugin(SplitText, ScrollTrigger);
 

  useGSAP(() => {
    const titleSplit = SplitText.create(".hero-title", {
      type: "chars"
    });

    const tl = gsap.timeline({
      delay: 1,
    });

    tl.to(".hero-content", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
    },"animate").to(".hero-text-scroll", {
      duration:0.5,
      clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease:"circ.out"
    }, "animate")
    
    .from(titleSplit.chars, {
      yPercent: 100,
      opacity:0,
      stagger:0.05,
      ease:"power2.out"
    },"-=0.5");

   
    const HeroTl= gsap.timeline({
      scrollTrigger: {
        trigger:".hero-container",
        start: "1% top",
        end:"bottom top",
        scrub: true,
       
      }
    })
    HeroTl.to(".hero-container",{
      rotate:7,
      scale:0.9,
      yPercent:30,
      ease:"power1.inOut"
    })
  });

  return (
    <section className="bg-main-bg">
      <div className="hero-container">
        {
          isTablet ? (
            <>
            {isMobile && <img src='/images/hero-bg.png' className='absolute bottom-40 size-full object-cover'/>}
            <img src="/images/hero-img.png" alt="" className='absolute bottom-0 left-1/2 -translate-x-1/2 object-auto'/>
            </>

          ) : (
            <video src="/videos/hero-bg.mp4"
            autoPlay muted playsInline
            className='absolute inset-0 w-full h-full object-cover'></video>
          )
        }
       
        
        <div className="hero-content">
          <div className="overflow-hidden">
            <h1 className="hero-title opacity-100">Freaking Delicious</h1>
          </div>
          
          <div className="mixed">
            <div
              style={{
                clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
              }}
              className="hero-text-scroll"
            >
              <div className="hero-subtitle">
                <h1>Protein + Caffeine</h1>
              </div>
            </div>
            
            <h2 className='translate-x-50'>
              Live the life to the fullest with our delicious protein coffee blends designed to fuel your body and mind.
            </h2>

            <div className="hero-button">
              <p>CHUG A SPYLT</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
