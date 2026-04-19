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
