import { IconBuildingSvg, IconCalendarSvg, IconFilterSlidersSvg, IconMapFoldedSvg, IconSofaPropertySvg } from "@/assets";

/** Keys must match `FEATURE_ICON_MAP` (asset components) in `realEstateCardComponent/index.js`. */
export const realEstateCardFeatureOptions = [
    { id: "area", iconKey: "ruler", text: "432 m² area" },
    { id: "bedrooms", iconKey: "bed", text: "5 bedrooms" },
    { id: "bathrooms", iconKey: "bath", text: "2 bathrooms" },
    { id: "livingRooms", iconKey: "sofa", text: "1 living room" },
    { id: "amenities", iconKey: "car", text: "Parking · Elevator · Security" },
];

/** Default field values for a single `RealEstateCardComponent` when `listing` is partial or empty. */
export const realEstateCardDefaultListing = {
    tags: [
        { label: "For Rent", variant: "brand" },
        { label: "Apartment", variant: "muted" },
        { label: "Luxury", variant: "blue" },
    ],
    priceAnnual: "SAR 65,000",
    priceSub: "/annually · SAR 5,417/mo",
    title: "Apartment for Rent in Riyadh Al Arid",
    location: "Al-Arid District · Riyadh, Saudi Arabia",
    features: realEstateCardFeatureOptions,
    description:
        "Luxury apartment for annual rent in Al-Arid district, ref a1005. Spacious layout with premium finishes. Immediate response upon contact.",
    agentInitials: "AR",
    agentName: "Ahmed Real Estate",
    agentPhone: "+91 98765 43210",
    agencyName: "NESTWAY PROPERTIES",
    listedAgo: "Listed 2 days ago",
    photoLabel: "1/6 photos",
};

/** Five demo listings for the landing tab (map each to a card). */
export const realEstateCardDemoListings = [
    {
        id: "demo-1",
        title: "Apartment for Rent in Riyadh Al Arid",
        location: "Al-Arid District · Riyadh, Saudi Arabia",
        priceAnnual: "SAR 65,000",
        priceSub: "/annually · SAR 5,417/mo",
        photoLabel: "1/6 photos",
        listedAgo: "Listed 2 days ago",
    },
    {
        id: "demo-2",
        title: "Villa for Rent in Al Nakheel",
        location: "Al Nakheel · Riyadh, Saudi Arabia",
        priceAnnual: "SAR 120,000",
        priceSub: "/annually · SAR 10,000/mo",
        photoLabel: "1/8 photos",
        listedAgo: "Listed 5 days ago",
        tags: [
            { label: "For Rent", variant: "brand" },
            { label: "Villa", variant: "muted" },
            { label: "Luxury", variant: "blue" },
        ],
    },
    {
        id: "demo-3",
        title: "Modern Apartment in Al Yasmin",
        location: "Al Yasmin · Riyadh, Saudi Arabia",
        priceAnnual: "SAR 48,000",
        priceSub: "/annually · SAR 4,000/mo",
        photoLabel: "1/4 photos",
        listedAgo: "Listed 1 week ago",
        tags: [
            { label: "For Sale", variant: "brand" },
            { label: "Apartment", variant: "muted" },
        ],
    },
    {
        id: "demo-4",
        title: "Spacious Duplex in Al Malqa",
        location: "Al Malqa · Riyadh, Saudi Arabia",
        priceAnnual: "SAR 95,000",
        priceSub: "/annually · SAR 7,917/mo",
        photoLabel: "1/12 photos",
        listedAgo: "Listed 3 days ago",
        description:
            "Duplex with private entrance, two parking spots, and close to schools. Ref m2044.",
        agentName: "Saudi Homes",
        agentInitials: "SH",
    },
    {
        id: "demo-5",
        title: "Penthouse with City View — Al Olaya",
        location: "Al Olaya · Riyadh, Saudi Arabia",
        priceAnnual: "SAR 180,000",
        priceSub: "/annually · SAR 15,000/mo",
        photoLabel: "1/10 photos",
        listedAgo: "Listed today",
        tags: [
            { label: "For Rent", variant: "brand" },
            { label: "Penthouse", variant: "muted" },
            { label: "Luxury", variant: "blue" },
        ],
        agentName: "Urban Key Realty",
        agentInitials: "UK",
    },
].map((item) => ({
    ...realEstateCardDefaultListing,
    ...item,
}));

/** Default field values for `ProjectTabCardComponent` (vertical grid cards). */
export const projectCardDefaultListing = {
    id: "project-default",
    tags: [
        { label: "For sale", variant: "brand" },
        { label: "Project", variant: "muted" },
    ],
    title: "Al Bahria Development",
    location: "Hay Al Baria, Al Jolaan · Riyadh",
    priceMain: "SAR 1.4M",
    priceSub: "starts from",
    features: [
        { id: "beds", iconKey: "bed", text: "3 beds" },
        { id: "baths", iconKey: "bath", text: "2 baths" },
        { id: "area", iconKey: "ruler", text: "2,400 m²" },
    ],
    description:
        "Prime units with flexible payment plans and handover Q4 2026. Register interest early.",
    agentInitials: "MB",
    agentName: "Metro Builders Co.",
    listedAgo: "Listed 3 days ago",
    photoLabel: "6 photos",
};

export const projectCardDemoListings = [
    {
        id: "proj-1",
        title: "Al Bahria Development",
        location: "Hay Al Baria, Al Jolaan · Riyadh",
        tags: [
            { label: "Warehouses", variant: "muted" },
            { label: "Available", variant: "blue" },
        ],
        priceMain: "SAR 1.4M",
        photoLabel: "6 photos",
    },
    {
        id: "proj-2",
        title: "Al Yasmin Residences",
        location: "Al Yasmin · Riyadh",
        tags: [
            { label: "Apartments", variant: "brand" },
            { label: "Ready", variant: "muted" },
        ],
        priceMain: "SAR 890K",
        priceSub: "starts from",
        features: [
            { id: "beds", iconKey: "bed", text: "2 beds" },
            { id: "baths", iconKey: "bath", text: "2 baths" },
            { id: "area", iconKey: "ruler", text: "120 m²" },
        ],
        photoLabel: "12 photos",
        listedAgo: "Listed 1 week ago",
        agentInitials: "YR",
        agentName: "Yumni Realty",
        description:
            "Family-focused community with parks, retail, and schools within walking distance.",
    },
    {
        id: "proj-3",
        title: "Olaya Business Tower",
        location: "Al Olaya · Riyadh",
        tags: [
            { label: "Commercial", variant: "brand" },
            { label: "Off-plan", variant: "muted" },
        ],
        priceMain: "SAR 2.1M",
        priceSub: "from",
        photoLabel: "8 photos",
        listedAgo: "Listed today",
        agentInitials: "OK",
        agentName: "Olaya Key Development",
        description:
            "Grade-A office floors with dedicated parking and direct highway access.",
    },
].map((item) => ({
    ...projectCardDefaultListing,
    ...item,
}));

// realEstate filter options
export const listingOptionsFilter = ["All", "Rent", "Sale"];
export const propertyOptionsFilter = [
    "All Type",
    "Apartments ",
    "Lands",
    "Villas ",
    "Floors ",
    "Commercial Offices ",
    "Farms ",
    "Rest Houses ",
];

/** Demo listing counts per city (replace with API data when available). */
export const cityFilterOptions = [
    { id: "riyadh", count: 82910 },
    { id: "jeddah", count: 33414 },
    { id: "dammam", count: 7180 },
    { id: "khobar", count: 6655 },
    { id: "medina", count: 4634 },
    { id: "mecca", count: 3918 },
];



//Daily rent 
export const dailyRentFilterOptions = [
    { id: "date", label: "20 - 22 Apr · 2 nights", icon: IconCalendarSvg },
    { id: "city", label: "Choose city", icon: IconMapFoldedSvg },
    { id: "filters", label: "Filters", icon: IconFilterSlidersSvg },
];

export const dailyRentCardDemoListings = [
    {
        id: "daily-1",
        badge: "Furnished",
        title: "Furnished Apartment for Booking",
        location: "Al Marwah, Jeddah",
        details: "99m² · 3 beds · 2 baths · 1 living",
        price: "1,296 ريال",
        nights: "Two nights",
        icon: IconBuildingSvg,
    },
    {
        id: "daily-2",
        badge: "Luxury",
        title: "Furnished Apartment for Booking",
        location: "An Narjis, Riyadh",
        details: "60m² · 1 bed · 1 bath · 1 living",
        price: "528 ريال",
        nights: "Two nights",
        icon: IconSofaPropertySvg,
    },
    {
        id: "daily-3",
        badge: "Family",
        title: "Family Apartment for Booking",
        location: "Al Zahra, Jeddah",
        details: "84m² · 2 beds · 2 baths · 1 living",
        price: "860 ريال",
        nights: "Two nights",
        icon: IconBuildingSvg,
    },
    {
        id: "daily-4",
        badge: "Family",
        title: "Family Apartment for Booking",
        location: "Al Zahra, Jeddah",
        details: "84m² · 2 beds · 2 baths · 1 living",
        price: "860 ريال",
        nights: "Two nights",
        icon: IconBuildingSvg,
    },
    {
        id: "daily-5",
        badge: "Family",
        title: "Family Apartment for Booking",
        location: "Al Zahra, Jeddah",
        details: "84m² · 2 beds · 2 baths · 1 living",
        price: "860 ريال",
        nights: "Two nights",
        icon: IconBuildingSvg,
    },
    {
        id: "daily-6",
        badge: "Family",
        title: "Family Apartment for Booking",
        location: "Al Zahra, Jeddah",
        details: "84m² · 2 beds · 2 baths · 1 living",
        price: "860 ريال",
        nights: "Two nights",
        icon: IconBuildingSvg,
    },
    {
        id: "daily-7",
        badge: "Family",
        title: "Family Apartment for Booking",
        location: "Al Zahra, Jeddah",
        details: "84m² · 2 beds · 2 baths · 1 living",
        price: "860 ريال",
        nights: "Two nights",
        icon: IconBuildingSvg,
    },

];