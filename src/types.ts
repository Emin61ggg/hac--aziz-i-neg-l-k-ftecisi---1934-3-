export type Language = 'tr' | 'en';

export interface MenuItem {
  id: string;
  name: {
    tr: string;
    en: string;
  };
  description: {
    tr: string;
    en: string;
  };
  price: number;
  badge?: {
    tr: string;
    en: string;
  };
  category: 'popular' | 'salads' | 'sauces_mezeler';
  image: string;
}

export interface Review {
  id: string;
  author: string;
  stars: number;
  date: {
    tr: string;
    en: string;
  };
  text: {
    tr: string;
    en: string;
  };
  badge?: string; // e.g. "Local Guide"
  reviewCount?: number;
  photoCount?: number;
}

export interface BusynessHour {
  hour: string;
  busyness: number; // 0-100 percentage
}

export interface TranslationDictionary {
  brandName: string;
  brandTagline: string;
  heritageSince: string;
  ratingBadge: string;
  viewMenu: string;
  getDirections: string;
  findATable: string;
  yearsOfHistory: string;
  ourStoryTitle: string;
  ourStorySubtitle: string;
  ourStoryText1: string;
  ourStoryText2: string;
  ourStoryText3: string;
  womenOwnedBadge: string;
  kofteSecretTitle: string;
  kofteSecretText: string;
  menuTitle: string;
  menuSubtitle: string;
  menuPriceIndicator: string;
  categoryPopular: string;
  categorySalads: string;
  categorySaucesMezeler: string;
  galleryTitle: string;
  gallerySubtitle: string;
  reviewsTitle: string;
  reviewsSubtitle: string;
  reviewsCredibility: string;
  busynessTitle: string;
  busynessSubtitle: string;
  busynessFridayNote: string;
  servicesTitle: string;
  servicesSubtitle: string;
  serviceDineIn: string;
  serviceDineInDesc: string;
  serviceDriveThrough: string;
  serviceDriveThroughDesc: string;
  serviceNoContact: string;
  serviceNoContactDesc: string;
  contactTitle: string;
  contactSubtitle: string;
  addressLabel: string;
  phoneLabel: string;
  hoursLabel: string;
  hoursValue: string;
  instagramLabel: string;
  websiteLabel: string;
  footerRights: string;
  footerHeritageBadge: string;
  callNow: string;
  closedLabel: string;
  closesLabel: string;
  liveNow: string;
  busynessLabel: string;
}
