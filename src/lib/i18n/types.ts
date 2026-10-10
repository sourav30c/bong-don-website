export type Locale = 'en' | 'bn' | 'hi';

export interface Dictionary {
  locale: Locale;
  localeName: string;
  brand: {
    name: string;
    degrees: string;
    tagline: string;
  };
  nav: {
    home: string;
    about: string;
    services: string;
    clinics: string;
    media: string;
    testimonials: string;
    contacts: string;
    bookAppointment: string;
  };
  hero: {
    badge: string;
    bookConsultation: string;
    viewProfile: string;
    yearsExp: string;
    yearsExpLabel: string;
    patientsTreated: string;
    patientsTreatedLabel: string;
    followers: string;
    followersLabel: string;
    slides: Array<{
      tag: string;
      titlePre: string;
      titleHighlight: string;
      description: string;
    }>;
  };
  about: {
    badge: string;
    title: string;
    subtitle: string;
    bioTitle: string;
    bioP1: string;
    bioP2: string;
    talksTitle: string;
    talksDesc: string;
    fellowshipTitle: string;
    fellowshipDesc: string;
    languagesTitle: string;
    languagesList: string;
    educationTitle: string;
    experienceTitle: string;
    education: Array<{
      degree: string;
      institution: string;
    }>;
    experience: Array<{
      role: string;
      hospital: string;
    }>;
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    learnMore: string;
    items: Array<{
      title: string;
      description: string;
      image: string;
    }>;
  };
  statistics: {
    title: string;
    subtitle: string;
    items: Array<{
      value: number;
      suffix: string;
      label: string;
      subtext: string;
    }>;
  };
  whyChoose: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  clinics: {
    badge: string;
    title: string;
    subtitle: string;
    viewAllButton: string;
    daysLabel: string;
    timingsLabel: string;
    bookSlot: string;
    mapLabel: string;
    items: Array<{
      name: string;
      location: string;
      type: string;
      days: string;
      timings: string;
      mapUrl: string;
      mapEmbed: string;
    }>;
  };
  media: {
    badge: string;
    title: string;
    subtitle: string;
    youtubeButton: string;
    items: Array<{
      id: string;
      category: string;
      title: string;
      description: string;
    }>;
  };
  testimonials: {
    badge: string;
    title: string;
    subtitle: string;
    viewAll: string;
    items: Array<{
      quote: string;
      name: string;
      location: string;
    }>;
  };
  appointmentCta: {
    title: string;
    subtitle: string;
    bannerTitle: string;
    bannerSubtitle: string;
    receivedTitle: string;
    receivedSubtitle: string;
    submitAnother: string;
    form: {
      firstName: string;
      firstNamePlaceholder: string;
      lastName: string;
      lastNamePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      gender: string;
      genderOptions: {
        placeholder: string;
        male: string;
        female: string;
        other: string;
      };
      preferredDate: string;
      consultationType: string;
      consultationOptions: {
        placeholder: string;
        general: string;
        ckd: string;
        dialysis: string;
        transplant: string;
        hypertension: string;
        followup: string;
      };
      location: string;
      locationPlaceholder: string;
      concern: string;
      concernPlaceholder: string;
      submitButton: string;
    };
  };
  trustStrip: {
    badge: string;
    affiliations: string[];
  };
  footer: {
    bio: string;
    findUsOn: string;
    quickLinks: string;
    chamberLocationTitle: string;
    servingLocations: string;
    viewOnMaps: string;
    chambersContactTitle: string;
    keyChambersLabel: string;
    keyChambersList: string;
    phoneLabel: string;
    emailLabel: string;
    bookConsultationButton: string;
    disclaimerTitle: string;
    disclaimerText: string;
    copyright: string;
    digitalOutreach: string;
  };
  floatingActions: {
    bookNow: string;
    whatsapp: string;
    callNow: string;
  };
}
