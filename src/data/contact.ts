export interface SocialMedia {
  facebook: string;
  twitter: string;
  instagram: string;
  youtube: string;
  linkedin?: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: string;
  socialMedia: SocialMedia;
}

export const contactInfo: ContactInfo = {
  address: "Wanderworld Holidays, S-12-73, Haware Centurion, Nerul East, Sector 19A, Nerul, Navi Mumbai, Maharashtra 400706",
  phone: "+91 93241 02323, +91 77808 33317",
  email: "wanderworldandco@gmail.com",
  hours: "Monday - Saturday: 9:00 AM - 8:00 PM\nSunday: 10:00 AM - 4:00 PM",
  socialMedia: {
    facebook: "https://www.facebook.com/wanderworldadventure",
    twitter: "https://twitter.com/wonderlandholidays",
    instagram: "https://www.instagram.com/wanderworldholidays/",
    youtube: "https://www.youtube.com/wonderlandholidays",
    linkedin: "https://www.linkedin.com/company/wanderworld-holidays/"
  }
};
