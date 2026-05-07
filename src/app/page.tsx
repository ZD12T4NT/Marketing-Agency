"use client";

import HeroVideo from '@/components/FullWidthVideo';
import Hero from '../components/Hero';
import useLenisScroll from '../hooks/useLenisScroll';
import CurvedSection from '@/components/CurvedSection';
import Circles from '@/components/Circles';
import ShowCase from '@/components/ShowCase';
import CaseStudies from '@/components/CaseStudies';
import Articles from '@/components/Articles';
import HoverParallaxList from '@/components/HoverParallaxList';
import Testimonial from '@/components/Testimonial';
import CTA from '@/components/CTA';
import Alien from '@/components/Alien';

export default function LandingPage() {
  const { progress } = useLenisScroll();

  return (
     
      <main className="min-h-screen">
      <Hero title="Feel alive in every footstep" />

      <CurvedSection />

      <HeroVideo src="/spaceVideo.mp4">
       
      </HeroVideo>

      <Circles />

      <ShowCase />

      <CaseStudies />

      <Articles
        pretitle="Latest In"
        title={
          <>
            <span className='font-light font-serif italic'>Digital</span> <br/> Advertising

          </>
        }
        buttonText="View Case Studies"
        boxes={[
          {
            media: "/articleOne.jpg",
            smallText: "Ecommerce Growth",
            title: "Scaling Conversion Systems",
          },
          {
            media: "/articleTwo.jpg",
            smallText: "Paid Media",
            title: "Performance Creative Testing",
          },
        ]}
      />


      <HoverParallaxList />

      <Testimonial
        heading="What our clients are"
        highlight="saying."
        company="GE VENTURES"
        quote="These guys are the real deal. Effective, efficient, and a pleasure to work with. Dan quickly understood and was able to help us better articulate the nuances of our business."
        name="Jordan Feder"
        role="VC at GE Ventures"
        avatar="/avatar.jpg"
      />

      <CTA
        title={
          <>
            Let us help your company <br />
            accelerate{" "}
            <span className="italic font-serif font-light">
              years ahead.
            </span>
          </>
        }
      />

      <Alien />
    
      </main>
  );
}
