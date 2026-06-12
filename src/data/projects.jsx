export const projects = [
  {
    title: "Stays",
    brandName: "Stays",
    logo: (
      <svg className="app-icon" viewBox="0 0 24 24" fill="none">
        <path d="M3 11.5L12 4L21 11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.5 10.5V20H18.5V10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.5 20V14H14.5V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    logoColor: "#FF385C",
    accent: "#FF385C",
    tagline: "A calm way to discover and book beautiful stays.",
    palette: ["#FF385C", "#F7F7F7", "#222222", "#A48A6A", "#D8C3A5"],
    description: "A full Swift iOS travel concept for discovering stays, reading property details, selecting dates, and reviewing a complete booking.",
    mainText: "Stays is a Swift iOS booking concept designed around a calm, visual, and premium travel experience. The concept is built for users who want to discover short stays quickly but still feel confident before they book. The interface uses large property photography, minimal navigation, clear listing cards, and a direct reservation path.",
    ideaText: "The main idea was to make travel discovery feel emotional instead of purely transactional. A lot of booking flows can feel crowded because they show too many filters, prices, rules, and options at once. This concept keeps the first experience visual, then reveals details step by step as the user moves closer to booking.",
    experienceText: "The user begins on an explore screen with category tabs and stay cards. They can open a cabin detail page, review the location, rating, host, amenities, and price, then continue into date selection. The final review screen summarizes the full booking so the user understands what they are paying for before confirming.",
    designText: "The design language uses a coral booking accent, white surfaces, dark typography, soft gray backgrounds, warm photography tones, and rounded cards. The layout is intentionally spacious so the stay imagery feels important and the booking actions are easy to find.",
    buildText: "This concept was planned for Swift and SwiftUI using reusable listing cards, image containers, date selector components, sticky bottom action bars, and checkout summary sections. The design took around 3\u20134 days.",
    flowText: "The flow is designed to be simple: explore places, open a stay, choose dates, review the trip, and continue to payment.",
    problem: "Booking apps often feel busy because discovery, filters, pricing, and checkout compete for attention on small screens.",
    solution: "The solution is a focused travel flow that starts with visual discovery and only introduces detailed booking information when the user needs it.",
    audience: "Travelers looking for cabins, weekend stays, short trips, and visually clear booking decisions.",
    features: ["Explore categories", "Stay cards", "Cabin details", "Date picker", "Booking review", "Payment summary"],
    flowSteps: [
      ["Explore", "Browse stay categories and listing cards."],
      ["Details", "Open a stay and review photos, host, rating, and price."],
      ["Dates", "Select trip dates with a clean calendar view."],
      ["Review", "Confirm booking details before payment."],
    ],
    architecture: [
      ["Home", "Categories, search, listings"],
      ["Listing Detail", "Gallery, host, features, price"],
      ["Booking", "Dates, guests, cost"],
      ["Checkout", "Review, payment, confirmation"],
    ],
    uiSystem: [
      ["Cards", "Rounded stay cards with image-first hierarchy"],
      ["Actions", "Coral primary buttons for booking decisions"],
      ["Typography", "Dark text, clean labels, readable spacing"],
      ["Navigation", "Simple top categories and bottom actions"],
    ],
    screens: "Explore listing, cabin details, booking dates, review and payment.",
    designFocus: "Large imagery, calm spacing, clear price hierarchy, category browsing, and a simple reservation flow.",
    feeling: "Warm, calm, premium, travel-focused, and easy to understand.",
    nextText: "Next, view Scoffly for a faster, warmer, and more colorful food ordering flow.",
    images: [
      "https://i.ibb.co/zhfQYrJp/01-explore-listing-mockup.png",
      "https://i.ibb.co/xK1bbKj0/02-cabin-details-mockup.png",
      "https://i.ibb.co/FqXwBmR4/03-booking-dates-mockup.png",
      "https://i.ibb.co/F4ghKmRm/04-review-pay-mockup.png",
    ],
  },
  {
    title: "Scoffly",
    brandName: "Scoffly",
    logo: (
      <svg className="app-icon" viewBox="0 0 24 24" fill="none">
        <path d="M7 3V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M5 3V8C5 9.66 5.9 11 7 11C8.1 11 9 9.66 9 8V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M7 11V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 3C18.2 4.8 19 7.2 19 10V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 3V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    logoColor: "#FF5A3D",
    accent: "#FF5A3D",
    tagline: "Food, groceries, and restaurants in one friendly app.",
    palette: ["#FF5A3D", "#FFF1E8", "#FDD35D", "#B8DCC2", "#2B2B2B"],
    description: "A Swift iOS food ordering concept for browsing restaurants, viewing menus, and customizing meals.",
    mainText: "Scoffly is a food delivery concept built around quick browsing, warm visuals, and a friendly ordering experience. The app combines restaurant discovery, grocery-style categories, promotional areas, restaurant detail pages, and item customization into one simple mobile flow.",
    ideaText: "The concept is based on the idea that food apps should feel fast but still enjoyable. The home screen gives users several ways to start: categories, deals, favorite restaurants, and popular food sections. This makes the app feel useful for both planned meals and quick cravings.",
    experienceText: "The user can open the home screen, browse categories, pick a restaurant, view restaurant information, look through menu items, and customize a dish before adding it to the order. The customization screen focuses on clear add-ons, removals, quantity changes, and a fixed action button.",
    designText: "The design uses a warm orange-red primary color, cream backgrounds, yellow highlights, soft green category tiles, rounded food cards, and bold food imagery. The interface is made to feel playful and appetizing while still being structured and readable.",
    buildText: "This concept was planned for Swift and SwiftUI using reusable category cards, restaurant cards, menu item components, customization chips, quantity controls, and fixed checkout actions. The design took around 2\u20133 days.",
    flowText: "The flow is designed to be fast: open the home screen, choose a restaurant, view menu details, customize a meal, and prepare the order.",
    problem: "Food ordering apps can become cluttered when categories, offers, restaurants, and item options are all shown without clear hierarchy.",
    solution: "The solution is a friendly home layout with strong sections and a short ordering path that keeps the main action visible.",
    audience: "Users who want fast food delivery, restaurant browsing, meal customization, and simple add-to-cart actions.",
    features: ["Food categories", "Offer cards", "Restaurant details", "Menu browsing", "Item customization", "Add to order"],
    flowSteps: [
      ["Home", "Browse categories, deals, and restaurants."],
      ["Restaurant", "Open restaurant details and menu sections."],
      ["Customize", "Choose add-ons, removals, and quantity."],
      ["Order", "Add item and prepare checkout."],
    ],
    architecture: [
      ["Home", "Categories, promotions, popular restaurants"],
      ["Restaurant", "Rating, menu, delivery info"],
      ["Item", "Ingredients, extras, quantity"],
      ["Cart", "Order summary and checkout"],
    ],
    uiSystem: [
      ["Cards", "Rounded cards for food, restaurants, and promos"],
      ["Color", "Orange-red actions with warm cream surfaces"],
      ["Controls", "Chips for add-ons and item changes"],
      ["Layout", "Scrollable sections with strong food imagery"],
    ],
    screens: "Food home, restaurant detail, item customization.",
    designFocus: "Food photography, fast choices, warm colors, simple customization, and clear order actions.",
    feeling: "Colorful, fast, friendly, warm, playful, and easy.",
    nextText: "Next, view FitZone for a cleaner data dashboard and a calmer health interface.",
    images: [
      "https://i.ibb.co/nNM0NSZb/01-food-home-mockup.png",
      "https://i.ibb.co/Nd8mxpFr/02-restaurant-detail-mockup.png",
      "https://i.ibb.co/KjcRwS3c/03-item-customization-mockup.png",
    ],
  },
  {
    title: "FitZone",
    brandName: "FitZone",
    logo: (
      <svg className="app-icon" viewBox="0 0 24 24" fill="none">
        <path d="M12 20S4 15.4 4 9.5C4 6.8 6.1 5 8.4 5C10 5 11.2 5.9 12 7C12.8 5.9 14 5 15.6 5C17.9 5 20 6.8 20 9.5C20 15.4 12 20 12 20Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
    logoColor: "#EF405D",
    accent: "#EF405D",
    tagline: "Activity, sleep, and workouts in a clean daily dashboard.",
    palette: ["#EF405D", "#5FC857", "#4AB0E4", "#8B5CF6", "#F4F4F4"],
    description: "A Swift iOS fitness concept for activity rings, health metrics, sleep tracking, and workout discovery.",
    mainText: "FitZone is a fitness dashboard concept designed to make health data feel readable, organized, and motivating. The app focuses on daily activity, movement, exercise, standing progress, sleep, recent workouts, and workout browsing without making the user feel overloaded.",
    ideaText: "The idea was to create a dashboard that gives quick feedback first, then lets users go deeper only when they want more detail. Instead of putting every metric on one screen, the concept separates dashboard, sleep, activity, and workouts into clear sections.",
    experienceText: "The user starts on a home dashboard with rings, step count, distance, calories, and heart rate. They can move into a sleep and workouts screen, review weekly activity metrics, or browse workout types. Each screen has one main purpose so the app feels easy to scan.",
    designText: "The design is based on colorful activity data: red for movement, green for exercise, blue for standing, purple for sleep, and soft gray cards for structure. The UI stays light and minimal so the colors highlight progress instead of overwhelming the layout.",
    buildText: "This concept was planned for Swift and SwiftUI using reusable stat cards, activity rings, progress bars, metric rows, workout cards, and bottom navigation. The design took around 3 days.",
    flowText: "The flow is designed around daily use: view dashboard, check sleep and recent workouts, review activity metrics, and browse workouts.",
    problem: "Fitness apps can feel too technical when they show too much health data without a clear visual structure.",
    solution: "The solution is a simple dashboard system that breaks health information into readable cards and clear progress visuals.",
    audience: "Users who want to track daily activity, sleep, workouts, and progress without a complicated fitness interface.",
    features: ["Activity rings", "Steps and distance", "Sleep summary", "Workout history", "Weekly metrics", "Workout browsing"],
    flowSteps: [
      ["Dashboard", "View activity rings and daily stats."],
      ["Sleep", "Check sleep and recent workouts."],
      ["Metrics", "Review weekly activity progress."],
      ["Browse", "Find workout types and routines."],
    ],
    architecture: [
      ["Dashboard", "Rings, calories, steps, heart rate"],
      ["Sleep", "Sleep score, duration, recent workouts"],
      ["Metrics", "Weekly charts and activity breakdown"],
      ["Workouts", "Categories, list, workout details"],
    ],
    uiSystem: [
      ["Data Cards", "Stat modules with simple labels"],
      ["Progress", "Rings, bars, and color-coded metrics"],
      ["Color", "Health-inspired red, green, blue, and purple"],
      ["Navigation", "Simple bottom tab structure"],
    ],
    screens: "Home dashboard, sleep and recent workouts, activity metrics, browse workouts.",
    designFocus: "Readable data, progress visualization, soft dashboard cards, and simple workout discovery.",
    feeling: "Fresh, focused, healthy, clean, motivating, and organized.",
    nextText: "Next, view Route for a minimal map-based flow and quick trip actions.",
    images: [
      "https://i.ibb.co/RG3J2hZP/01-home-dashboard-mockup.png",
      "https://i.ibb.co/ZRgfzrj3/02-sleep-recent-workouts-mockup.png",
      "https://i.ibb.co/fVX6YDQ3/03-activity-metrics-mockup.png",
      "https://i.ibb.co/QFQ9GFd6/04-browse-workouts-mockup.png",
    ],
  },
  {
    title: "Route",
    brandName: "Route",
    logo: (
      <svg className="app-icon" viewBox="0 0 24 24" fill="none">
        <path d="M6.5 10L8 6.5C8.4 5.6 9.2 5 10.2 5H13.8C14.8 5 15.6 5.6 16 6.5L17.5 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 10H19C20.1 10 21 10.9 21 12V16C21 17.1 20.1 18 19 18H5C3.9 18 3 17.1 3 16V12C3 10.9 3.9 10 5 10Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M7 18V19.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M17 18V19.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M6.5 14H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 14H17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    logoColor: "#111111",
    accent: "#111111",
    tagline: "Plan, price, and track rides with a clear map flow.",
    palette: ["#111111", "#F4F4F4", "#A9B8C4", "#FFFFFF", "#6A6A6A"],
    description: "A Swift iOS ride booking concept for planning trips, checking fares, confirming payment, and tracking rides.",
    mainText: "Route is a ride booking concept focused on quick decisions and clear trip planning. The app uses a map-first interface with bottom sheets for destination search, saved places, fare estimate, payment review, and active trip status.",
    ideaText: "The idea was to keep the ride flow direct and practical. Ride apps are used when people need to move fast, so the design keeps the map visible, the destination flow short, and the price information easy to understand before confirmation.",
    experienceText: "The user begins on a map screen, opens the planner, selects pickup and drop-off locations, checks the fare estimate, confirms payment, and then follows the active trip with driver and route information. Each screen supports one decision at a time.",
    designText: "The design uses black for important actions, white panels for controls, soft gray map surfaces, muted blue-gray map labels, and neutral secondary text. The style is minimal, utility-focused, and built around clarity.",
    buildText: "This concept was planned for Swift and SwiftUI using map containers, bottom-sheet layouts, saved place rows, fare breakdown cards, payment rows, and active ride panels. The design took around 3\u20134 days.",
    flowText: "The flow is designed for speed: open the map, plan a trip, view the fare estimate, confirm payment, and track the active ride.",
    problem: "Ride booking flows can feel stressful if the user cannot quickly understand route, fare, payment, and trip status.",
    solution: "The solution is a map-first interface with focused bottom sheets that show only the next important decision.",
    audience: "Users who need quick ride planning, clear fare information, saved places, and active trip tracking.",
    features: ["Map home", "Saved places", "Trip planner", "Fare estimate", "Payment review", "Active ride tracking"],
    flowSteps: [
      ["Map", "Start from current location and nearby routes."],
      ["Plan", "Enter pickup, destination, and saved places."],
      ["Fare", "Review price, payment, and trip options."],
      ["Track", "Follow active ride and driver status."],
    ],
    architecture: [
      ["Map", "Location, destination search, saved places"],
      ["Planner", "Pickup, drop-off, route preview"],
      ["Fare", "Cost estimate, payment, confirm action"],
      ["Active Trip", "Driver info, route, status"],
    ],
    uiSystem: [
      ["Map Panels", "Bottom sheets for focused decisions"],
      ["Actions", "Black primary buttons for confirmations"],
      ["Rows", "Saved places and payment rows"],
      ["Status", "Active trip cards with route information"],
    ],
    screens: "Map home, plan trip, fare estimate, active trip.",
    designFocus: "Map clarity, bottom-sheet UI, fast destination input, price confidence, and active ride tracking.",
    feeling: "Minimal, direct, functional, trustworthy, modern, and fast.",
    nextText: "Next, view Mono for an AI wardrobe experience with a clean monochrome look.",
    images: [
      "https://i.ibb.co/gnD9hBV/01-map-home-mockup.png",
      "https://i.ibb.co/RTtRxqjT/02-plan-trip-mockup.png",
      "https://i.ibb.co/CNcPm5m/03-fare-estimate-mockup.png",
      "https://i.ibb.co/0jMprp8S/04-active-trip-mockup.png",
    ],
  },
  {
    title: "Mono",
    brandName: "Mono",
    logo: (
      <svg className="app-icon" viewBox="0 0 24 24" fill="none">
        <path d="M6 8L12 4L18 8V16L12 20L6 16V8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M6 8L12 12L18 8" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M12 12V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    logoColor: "#111111",
    accent: "#111111",
    tagline: "Organize your closet and discover outfits with AI.",
    palette: ["#111111", "#FFFFFF", "#8A8A8A", "#E8E8E8", "#F4F4F4"],
    description: "A Swift iOS AI styling concept for cataloging clothes, receiving outfit recommendations, and building a personal wardrobe.",
    mainText: "Mono is an AI wardrobe concept built around organizing, exploring, and styling your personal clothing collection. The app helps users catalog their items, browse by category or color, receive AI-generated outfit recommendations, and save their favorite looks. The interface is intentionally minimal so the clothing and suggestions stay at the center of the experience.",
    ideaText: "The main idea was to make personal styling feel simple and intentional instead of overwhelming. Most fashion apps focus on shopping or social content. Mono is different because it focuses on what the user already owns, uses AI to generate fresh combinations, and helps them rediscover their closet in new ways.",
    experienceText: "The user starts on a wardrobe screen where they can view items sorted by type or color. They can add new pieces by taking a photo or selecting from their gallery. The AI recommendation screen suggests full outfits based on selected items, the weather, or seasonal trends. Each suggestion can be saved into collections for easy planning.",
    designText: "The design language is built around a grayscale palette: black headlines, white surfaces, medium gray accents, light gray cards, and soft off-white backgrounds. The focus stays on the clothing photography, with clean typography, simple chips, and clear action buttons that feel calm and deliberate.",
    buildText: "This concept was planned for Swift and SwiftUI using a wardrobe grid system, item cards, camera integration, color and category filters, AI recommendation cards, outfit collection displays, and smooth transitions between upload and discovery. The design took around 3 days.",
    flowText: "The flow is built around your wardrobe: catalog items, organize by color and type, receive AI outfit suggestions, and save your favorite looks.",
    problem: "Closet management apps often feel like inventory tools instead of styling companions, making outfit discovery difficult.",
    solution: "The solution is an AI-driven wardrobe that focuses on outfit creation, not just item tracking, using minimal design and smart suggestions.",
    audience: "Users who want to organize their wardrobe, get fresh outfit ideas, and make the most of what they already own.",
    features: ["Wardrobe catalog", "Color and category filters", "AI outfit suggestions", "Save looks", "Photo upload", "Seasonal recommendations"],
    flowSteps: [
      ["Upload", "Take a photo or import clothing items."],
      ["Organize", "Browse by type, color, or season."],
      ["Recommend", "Get AI-powered outfit combinations."],
      ["Save", "Collect favorite looks for later."],
    ],
    architecture: [
      ["Wardrobe", "Items grid, filters, add new button"],
      ["Item Detail", "Photo, type, color, tags"],
      ["Suggestions", "AI outfits, seasonal picks, weather match"],
      ["Collections", "Saved looks, named outfits"],
    ],
    uiSystem: [
      ["Wardrobe Grid", "Photo-first cards with item labels"],
      ["Filters", "Chip-based color and category selection"],
      ["AI Cards", "Outfit previews with confidence indicators"],
      ["Actions", "Black primary buttons for upload and save"],
    ],
    screens: "Wardrobe grid, item detail and upload, AI suggestions.",
    designFocus: "Clothing photography, grayscale palette, AI outfit discovery, simple upload flow, and organized collections.",
    feeling: "Minimal, calm, intentional, smart, personal, and clean.",
    nextText: "Next, view STRM for a modern movie and TV discovery flow with a dark cinematic look.",
    images: [
      "https://i.ibb.co/0Vy8gy8V/IMG-1005-portrait.png",
      "https://i.ibb.co/gZy7pj2G/IMG-1006-portrait.png",
      "https://i.ibb.co/4nQPXmYc/IMG-1007-portrait.png",
    ],
  },
  {
    title: "STRM",
    brandName: "STRM",
    logo: (
      <svg className="app-icon" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
        <path d="M10 9L16 12L10 15V9Z" fill="currentColor" />
      </svg>
    ),
    logoColor: "#111111",
    accent: "#111111",
    tagline: "Discover movies and TV shows with a clean streaming experience.",
    palette: ["#000000", "#FFFFFF", "#8A8A8A", "#111111", "#F4F4F4"],
    description: "A Swift iOS streaming concept for browsing movies, viewing TV show details, exploring seasons and episodes, and playing content.",
    mainText: "STRM is a streaming concept designed around discovery, browsing, and clean media presentation. The app focuses on helping users find something to watch through curated categories, detailed show pages, season and episode browsing, and a focused media player. Every screen is built to keep the content front and center.",
    ideaText: "The idea was to build a streaming interface that prioritizes exploration and content clarity over complex menus and algorithmic clutter. The home screen surfaces trending titles and curated collections. The detail pages give users ratings, synopsis, cast information, and direct access to seasons or episodes without unnecessary navigation.",
    experienceText: "The user starts on a home screen with featured content, categories, and trending titles. They can open a movie or show detail page to view ratings, description, cast, and trailers. For TV shows, a dedicated screen lets them browse seasons and episodes. The player delivers a clean, minimal playback experience with simple controls.",
    designText: "The design uses a dark monochrome palette: black backgrounds, dark black card layers, grey accents and labels, white text for readability, and light grey surfaces for subtle contrast. The interface is intentionally grayscale so cover art, media, and content visuals stand out without competing with UI accents.",
    buildText: "This concept was planned for Swift and SwiftUI using a horizontal scrolling hero section, category rows, content cards, detail pages with metadata, season and episode lists, and a custom player overlay. The design took around 4 days.",
    flowText: "The flow is designed for discovery: browse the home feed, open a title for details, browse seasons and episodes, and play content in a clean viewer.",
    problem: "Streaming apps can feel overwhelming when the interface competes with the content instead of getting out of the way.",
    solution: "The solution is a dark, minimal browsing experience that highlights cover art and metadata while keeping navigation simple and direct.",
    audience: "Users who want to browse movies and TV shows, read descriptions and ratings, and watch content on mobile.",
    features: ["Trending feed", "Content categories", "Movie and show details", "Season and episode browser", "Ratings and cast", "Media player"],
    flowSteps: [
      ["Browse", "Discover trending titles and curated categories."],
      ["Detail", "View ratings, synopsis, cast, and trailers."],
      ["Seasons", "Browse TV show seasons and episode lists."],
      ["Play", "Watch content with a clean player interface."],
    ],
    architecture: [
      ["Home", "Hero, categories, trending rows"],
      ["Detail", "Rating, description, cast, related titles"],
      ["Seasons", "Season selector, episode grid"],
      ["Player", "Video view, controls, info overlay"],
    ],
    uiSystem: [
      ["Content Cards", "Art-first cards with title overlays"],
      ["Typography", "White text on dark surfaces for readability"],
      ["Accent", "Black primary color for branding and actions"],
      ["Navigation", "Clean top tabs and bottom player bar"],
    ],
    screens: "Home feed, content detail, season and episode browser, media player.",
    designFocus: "Dark monochrome palette, content-first layout, clear metadata hierarchy, and simple playback controls.",
    feeling: "Minimal, dark, clean, focused, modern, and immersive.",
    nextText: "Next, view Vest for a clean stock trading and portfolio tracking experience.",
    images: [
      "https://i.ibb.co/xK0PszX9/IMG-1013-portrait.png",
      "https://i.ibb.co/Z6WyvX16/IMG-1015-portrait.png",
      "https://i.ibb.co/73MnCp8/IMG-1016-portrait.png",
    ],
  },
  {
    title: "Vest",
    brandName: "Vest",
    logo: (
      <svg className="app-icon" viewBox="0 0 24 24" fill="none">
        <path d="M3 17L9 11L13 15L21 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 7H21V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    logoColor: "#22C55E",
    accent: "#22C55E",
    tagline: "Track stocks, manage your portfolio, and discover new investments.",
    palette: ["#111111", "#22C55E", "#EF4444", "#F4F4F4", "#FFFFFF"],
    description: "A Swift iOS stock trading concept for tracking watchlists, searching stocks, viewing portfolio performance, and managing investments.",
    mainText: "Vest is a stock trading concept designed for clear portfolio tracking and quick market discovery. The app gives users a watchlist for following stocks, a search screen to find new tickers, detailed stock pages with charts and stats, and a portfolio view that shows balance, holdings, and performance at a glance.",
    ideaText: "The idea was to create a trading interface that stays clean and readable even when financial data gets detailed. Most trading apps crowd the screen with numbers, labels, and tiny buttons. Vest keeps the layout simple: cards for stock summaries, clear green and red indicators for movement, bottom sheets for detail, and a dashboard that always shows the most important number first.",
    experienceText: "The user starts on a dashboard with their portfolio balance, key holdings, and quick access to their watchlist. They can search for stocks by name or ticker, view a detailed stock page with chart, stats, and news, add stocks to their watchlist, and check their full portfolio performance over different time periods.",
    designText: "The design uses a clean financial palette: dark surfaces for the main dashboard, green for gains and positive indicators, red for losses and negative movement, light grey for cards and dividers, and white for text and important data. The colors follow market conventions so the user can read performance immediately.",
    buildText: "This concept was planned for Swift and SwiftUI using portfolio cards, watchlist rows, search with autocomplete, stock detail sheets, interactive chart components, holding summaries, and time period selectors. The design took around 3\u20134 days.",
    flowText: "The flow is designed for quick decisions: check your dashboard, browse your watchlist, search for new stocks, and review detailed performance.",
    problem: "Stock trading apps can feel overwhelming when financial data, charts, watchlists, and portfolio details compete for space on a small screen.",
    solution: "The solution is a clean card-based layout that separates watchlist, search, portfolio, and stock detail into focused, readable sections.",
    audience: "Investors who want to track stocks, manage a portfolio, search for new tickers, and monitor performance on mobile.",
    features: ["Dashboard portfolio", "Stock watchlist", "Ticker search", "Stock detail with chart", "Holdings overview", "Gain and loss indicators"],
    flowSteps: [
      ["Dashboard", "View portfolio balance and top holdings."],
      ["Watchlist", "Follow stocks and track price movement."],
      ["Search", "Find tickers and view stock details."],
      ["Detail", "Review charts, stats, and performance."],
    ],
    architecture: [
      ["Dashboard", "Balance, holdings, watchlist summary"],
      ["Watchlist", "Saved stocks, prices, movement"],
      ["Search", "Ticker input, results, stock preview"],
      ["Detail", "Chart, stats, news, add to watchlist"],
    ],
    uiSystem: [
      ["Cards", "Stock summary cards with price and change"],
      ["Color", "Green for gains, red for losses, dark surfaces"],
      ["Charts", "Interactive line and candlestick views"],
      ["Navigation", "Simple tab bar for key sections"],
    ],
    screens: "Dashboard portfolio, watchlist, search, stock detail.",
    designFocus: "Card-based stock summaries, green and red movement indicators, interactive charts, and fast ticker search.",
    feeling: "Clean, confident, professional, data-driven, modern, and readable.",
    nextText: "Next, go back to Stays for a warmer travel booking flow and cabin discovery.",
    images: [
      "https://i.ibb.co/G3JMN1Kr/IMG-1017-portrait.png",
      "https://i.ibb.co/Jj4mByn7/0-02-05-e8f5d26ea0c9937ff32ec72fa863f6b6157346397129ac4f40dfec9015a4357f-226d0d169e7-portrait.png",
      "https://i.ibb.co/MykFqbSg/IMG-1019-portrait.png",
      "https://i.ibb.co/B5fjys2W/IMG-1020-portrait.png",
    ],
  },
  {
    title: "Skyward",
    brandName: "Skyward",
    logo: (
      <svg className="app-icon" viewBox="0 0 24 24" fill="none">
        <path d="M3 12L9 10L12 3L15 10L21 12L15 14L12 21L9 14L3 12Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
    logoColor: "#FEF9C3",
    accent: "#FEF9C3",
    tagline: "Find flights, compare fares, and travel with confidence.",
    palette: ["#111111", "#FFFFFF", "#F4F4F4", "#FEF9C3", "#D4EDDA"],
    description: "A Swift iOS flight booking concept for searching destinations, comparing fares, selecting seats, and tracking reservations.",
    mainText: "Skyward is a flight booking concept designed around clarity, trust, and smooth trip planning. The app focuses on helping users search flights, compare fare options, pick seats, and track their reservations without friction. The interface stays clean and readable even when presenting complex fare and schedule information.",
    ideaText: "The main idea was to make flight booking feel calm and transparent instead of stressful. Most travel booking flows feel rushed and crowded because they show too many options, rules, alerts, and upsells on one screen. Skyward separates each decision point — search, fare comparison, seat selection, and trip details — so the user never feels overwhelmed.",
    experienceText: "The user begins on a search screen with destination fields, date inputs, and passenger count. After searching, they see a fare comparison list showing airlines, prices, durations, and stops. Selecting a fare opens the booking flow where they choose seats and review the full trip before confirming. A dedicated trips screen shows upcoming and past reservations with status and details.",
    designText: "The design uses a clean monochrome base: dark surfaces for the main app chrome, white for content areas, soft smoke gray for dividers and cards, light yellow accents for highlights, branding, and call-to-action buttons, and light green for positive indicators like available seats and confirmed statuses. The layout is spacious with clear typography hierarchy and rounded cards.",
    buildText: "This concept was planned for Swift and SwiftUI using destination search forms, fare comparison cards, date picker components, seat maps, booking summary panels, and trip status cards. The design took around 3\u20134 days.",
    flowText: "The flow is simple: search for flights, compare fare options, choose seats and extras, confirm booking, then track your trip.",
    problem: "Flight booking apps can be stressful when search results, fare rules, upsells, and booking steps are all crowded into a single screen.",
    solution: "The solution is a separated step-by-step booking flow that lets users focus on one decision at a time with clear information at each stage.",
    audience: "Travelers who want to search flights, compare prices, select seats, and manage their bookings in a simple and calm mobile interface.",
    features: ["Flight search", "Fare comparison", "Seat selection", "Booking summary", "Trip tracking", "Past reservations"],
    flowSteps: [
      ["Search", "Enter destination, dates, and passengers."],
      ["Compare", "Review fares, airlines, and durations."],
      ["Book", "Select seats and confirm the trip."],
      ["Track", "View upcoming and past reservations."],
    ],
    architecture: [
      ["Search", "Destinations, dates, passengers"],
      ["Results", "Fare list, airlines, stops, prices"],
      ["Booking", "Seat map, extras, payment summary"],
      ["Trips", "Upcoming trips, history, status"],
    ],
    uiSystem: [
      ["Search Form", "Clear input fields with date pickers"],
      ["Cards", "Rounded fare comparison and trip cards"],
      ["Accent", "Light yellow for CTAs and highlights"],
      ["Status", "Light green for available and confirmed"],
    ],
    screens: "Flight search, fare comparison, booking and seat selection, trip tracking.",
    designFocus: "Clear search inputs, fare comparison cards, simple seat selection, and readable trip status.",
    feeling: "Calm, clean, trustworthy, modern, spacious, and easy to use.",
    nextText: "Next, go back to Stays for a warmer travel booking flow and cabin discovery.",
    images: [
      "https://i.ibb.co/mCtwCVmC/IMG-1050.png",
      "https://i.ibb.co/39JjnmqJ/IMG-1051.png",
      "https://i.ibb.co/1GgdpgfX/IMG-1052.png",
      "https://i.ibb.co/zV7ZQpSs/IMG-1053.png",
    ],
  },
];
