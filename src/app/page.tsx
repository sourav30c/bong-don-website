import HeroSection from "@/components/landing/HeroSection";
import AboutSection from '@/components/landing/AboutSection';
import ServicesSection from '@/components/landing/ServicesSection';
import StatisticsSection from '@/components/landing/StatisticsSection';
import ClinicsSection from '@/components/landing/ClinicsSection';
import WhyChooseSection from '@/components/landing/WhyChooseSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import AppointmentCtaSection from '@/components/landing/AppointmentCtaSection';
import ScrollReveal from "@/components/ui/ScrollReveal";
import MediaPreviewSection from "@/components/landing/MediaPreviewSection";

export default function LandingPage() {
  return (
    <div>
      <HeroSection />
      {/* <AboutSection />
      <ServicesSection />
      <StatisticsSection />
      <WhyChooseSection />
      <ClinicsSection />
      <TestimonialsSection />
      <AppointmentCtaSection /> */}

      <ScrollReveal>
        <AboutSection />
      </ScrollReveal>

      <ScrollReveal>
        <ServicesSection />
      </ScrollReveal>

      <ScrollReveal>
        <StatisticsSection />
      </ScrollReveal>

      <ScrollReveal>
        <WhyChooseSection />
      </ScrollReveal>

      <ScrollReveal>
        <ClinicsSection />
      </ScrollReveal>

      <ScrollReveal>
        <MediaPreviewSection />
      </ScrollReveal>
      <ScrollReveal>
        <TestimonialsSection />
      </ScrollReveal>

      <ScrollReveal>
        <AppointmentCtaSection />
      </ScrollReveal>
    </div>
  );
}
