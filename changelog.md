- 11/26/2025
  # Added upload image for avatar for both the settings and the dashboard header
  # Drag and Drop image for the avatar and remove it

- 11/22/2025
  # Fixed the recipe details and added slugify to optimize the SEO

- 11/20/2025
  # Fixed the search and filter issue
  # Working on analytics dashboard for realtime view
  // TODO: Try to get the sidebar responsive and not have a under lying hamburger menu under the navbar

- 11/15/2025
# fixed the image
# fixed the link buttons in the hero section

- 11/12/2025
# Removed prisma and other files
# Main database will be Firebase
# Changed from dummy data to api to make it easier to render data
# updated the coming soon features
# working on being able to actually publish the submitted recipes by the user and store it locally and display it in the home and explore page for all to see and view

- 10/24/2025
# Changed the name to Recipe Hub
# Updated all packages to latest version for stability and bug fixes

<!-- 
// android and ios app
  {
    id: "v1",
    version: "",
    date: "Coming Soon",
    title: "IoS and Androic RecipeHub App",
    description: "",
    type: "feature",
    isComingSoon: true,
    estimatedDate: "2027",
    items: [
      {
        icon: Apple,
        title: "IOS RecipeHub",
        description: "",
        status: "new"
      },
      {
        icon: Bot,
        title: "android RecipeHub",
        description: "",
        status: "new"
      }
    ],
  },

  // coming Soon
  {
    id: "v2.9",
    version: "v2.9",
    date: "Coming Soon",
    title: "Social Media Platform",
    description: "",
    type: "feature",
    isComingSoon: true,
    estimatedDate: "2026",
    items: [
      {
        icon: Zap,
        title: "Social Media Platform (Beta) (Pro Feature Only)",
        description: "Connect, share, and learn from others. Create recipes and share with others on the new social media platform for chef and cooks",
        status: "new",
      },
      {
        icon: BotIcon,
        title: "AI assistant",
        description: "Introducing your personal AI chat bot to assist you in your recipes search. (Pro feature)",
        status: "improved",
      },
    ],
  },
  {
    id: "2.4",
    version: "",
    date: "Coming Soon",
    title: "Database Integration",
    description: "Converted from local storage to a real time database (firebase)",
    type: "feature",
    isComingSoon: true,
    estimatedDate: "2026",
    items: [
      {
        icon: Database,
        title: "Converted from local storage to firebase",
        description: "significantly changed from localstorage to database using firebase",
        status: "new"
      }
    ],
  },
  {
    id: "v2.2",
    version: "",
    date: "Coming Soon",
    title: "AI assistant with openai integration",
    description: "Introducing your personal AI chat bot to assist you in your recipes search. (Pro feature)",
    type: "feature",
    isComingSoon: true,
    estimatedDate: "2026",
    items: [
      {
        icon: BotIcon,
        title: "AI assistant",
        description: "Introducing your personal AI chat bot to assist you in your recipes search. (Pro feature)",
        status: "new",
      },
      {
        icon: Bot,
        title: "Personalized Recipes",
        description: "AI‑powered suggestions tailored to your tastes and dietary needs. (Pro feature)",
        status: "new",
      },
      {
        icon: Bot,
        title: "Live Chat Support",
        description: "24/7 Live Chat Support (Pro feature)",
        status: "new",
      },
    ],
  },
  {
    id: "v2.8.6",
    version: "v2.8.6",
    date: "Coming Soon",
    title: "Search Functionality",
    description: "Users can search and filter the recipes",
    type: "feature",
    isComingSoon: true,
    estimatedDate: "2025",
    items: [
      {
        icon: Search,
        title: "Advanced Filtering",
        description: "Filter recipes by cuisine, difficulty, cooking time, and dietary preferences",
        status: "new",
      },
      {
        icon: Zap,
        title: "Smart Search",
        description: "Search by ingredients, recipe names, or cooking techniques",
        status: "new",
      },
      {
        icon: BotIcon,
        title: "AI assistant",
        description: "Introducing your personal AI chat bot to assist you in your recipes search. (Pro feature)",
        status: "new",
      },
    ],
  },




  // Change Log
  {
    id: "v2.8.5",
    version: "v2.8.5",
    date: "2025-11-15",
    title: "Fixed security and bugs",
    description: "",
    type: "feature",
    isComingSoon: true,
    estimatedDate: "2026",
    items: [
      {
        icon: Bug,
        title: "Fixed bugs and security",
        description: "Fixed the link buttons in the hero section",
        status: "fixed",
      },
    ],
  },
  {
    id: "v2",
    version: "v2",
    date: "2025-10-24",
    title: "New profile management",
    description: "Added new profile management where the user has control of their dashboard. User can change their password, manage billing, security, notifications, and improvement.",
    type: "security",
    items: [
      {
        icon: ChefHat,
        title: "Recipe Hub Rebranding",
        description: "RecipeHub.dev — a GitHub meets social media platform for recipes. Share, fork, remix, and connect with cooks worldwide.",
        status: "new"
      },
      {
        icon: Package,
        title: "Updated all dependancies",
        description: "A significant update to the dependancies.",
        status: "new"
      },
      {
        icon: Bug,
        title: "Fixed bugs and security",
        description: "Fixed bugs and security",
        status: "fixed"
      },
      {
        icon: Sparkles,
        title: "Overall Responsive Design and significant improvement",
        description: "An improved beautiful, mobile-friendly interface that works on all devices",
        status: "improved",
      },
    ],
  },
  {
    id: "v1.6.15",
    version: "v1.6.15",
    date: "2025-08-20",
    title: "CRUD Recipe Management",
    description: "User can edit, delete, and create recipe with admin approval. Added image upload, added multiple tags, steps and text. ",
    type: "improvement",
    items: [
      {
        icon: ChefHat,
        title: "CRUD Recipe management",
        description: "User can create, read, update, and delete their own recipes with admin approval. Once the recipe has been submitted user will be notified of their recipe status in the my recipe page.",
        status: "improved"
      }
    ],
  },
  {
    id: "v1.6.10",
    version: "v1.6.10",
    date: "2024-12-15",
    title: "New profile management",
    description: "Added new profile management where the user has control of their dashboard. User can change their password, manage billing, security, notifications, and improvement.",
    type: "improvement",
    items: [
      {
        icon: User,
        title: "Profile Management",
        description: "Users can now update their profile information and change passwords",
        status: "new"
      }
    ],
  },
  {
    id: "v1.6.7",
    version: "v1.6.7",
    date: "2024-12-03",
    title: "Improved the security of the user Auth, local storage, and recipe submission and tracker",
    description: "Security patch for the User Auth, local storage, and create admin approval for recipe submission with email service",
    type: "security",
    items: [
      {
        icon: Shield,
        title: "User Authentication",
        description: "Secure login and signup system with protected routes",
        status: "improved",
      },
      {
        icon: Plus,
        title: "Recipe Submission",
        description: "Submit your own recipes for community review and approval",
        status: "new",
      },
      {
        icon: Star,
        title: "Recipe Status Tracking",
        description: "Track the approval status of your submitted recipes",
        status: "new",
      },
      {
        icon: Mail,
        title: "Added Email Services",
        description: "Send confirmation and notification emails to users",
        status: "new"
      }
    ],
  },
  {
    id: "v1.6.5",
    version: "v1.6.5",
    date: "2024-12-01",
    title: "Enhanced the UI Experience, improved the security, and user Auth and local storage",
    description: "Enhanced user interface, improved the security, user auth and local storage for a better user experience",
    type: "bugfix",
    items: [
      {
        icon: Sparkles,
        title: "Responsive Design",
        description: "An improved beautiful, mobile-friendly interface that works on all devices",
        status: "improved",
      },
      {
        icon: Database,
        title: "Local Storage",
        description: "All user information are stored locally and recipe can be created, edited and deleted. Database is coming soon.",
        status: "improved",
      },
      {
        icon: Shield,
        title: "User Authentication",
        description: "Secure login and signup system with protected routes",
        status: "improved",
      },
      {
        icon: Plus,
        title: "Recipe Submission",
        description: "Submit your own recipes for community review and approval",
        status: "improved",
      },
      {
        icon: Star,
        title: "Recipe Status Tracking",
        description: "Track the approval status of your submitted recipes",
        status: "improved",
      },
    ],
  },
  {
    id: "v1.6.2",
    version: "v1.6.2",
    date: "2024-11-25",
    title: "UI improvement and security patch",
    description: "Improved UI security to enhance login and signup. Significantly improved the user's dashboard adding several side bar links",
    type: "security",
    items: [
      {
        icon: Sparkles,
        title: "Responsive Design",
        description: "An improved beautiful, mobile-friendly interface that works on all devices",
        status: "fixed",
      },
      {
        icon: Plus,
        title: "Recipe Submission",
        description: "Submit your own recipes for community review and approval",
        status: "improved",
      },
      {
        icon: Star,
        title: "Recipe Status Tracking",
        description: "Track the approval status of your submitted recipes",
        status: "improved",
      },
      {
        icon: Heart,
        title: "Favorites System",
        description: "Save and organize your favorite recipes",
        status: "improved",
      },
    ],
  },
  {
    id: "v1.6",
    version: "v1.6",
    date: "2024-11-20",
    title: "UI improvement and security patch",
    description: "Improved UI security to enhance login and signup. Significantly improved the user's dashboard adding several side bar links",
    type: "security",
    items: [
      {
        icon: Sparkles,
        title: "Responsive Design",
        description: "An improved beautiful, mobile-friendly interface that works on all devices",
        status: "fixed",
      },
      {
        icon: Plus,
        title: "Recipe Submission",
        description: "Submit your own recipes for community review and approval",
        status: "new",
      },
      {
        icon: Star,
        title: "Recipe Status Tracking",
        description: "Track the approval status of your submitted recipes",
        status: "improved",
      },
      {
        icon: Heart,
        title: "Favorites System",
        description: "Save and organize your favorite recipes",
        status: "improved",
      },
    ],
  },
  {
    id: "v1.5",
    version: "v1.5",
    date: "2024-11-15",
    title: "User Auth & Recipe Management",
    description: "Complete user system with recipe submission and management capabilities",
    type: "feature",
    items: [
      {
        icon: Database,
        title: "Local Storage",
        description: "All user information are stored locally. Database is coming soon.",
        status: "new",
      },
      {
        icon: Shield,
        title: "User Authentication",
        description: "Secure login and signup system with protected routes",
        status: "new",
      },
      {
        icon: Plus,
        title: "Recipe Submission",
        description: "Submit your own recipes for community review and approval",
        status: "new",
      },
      {
        icon: Star,
        title: "Recipe Status Tracking",
        description: "Track the approval status of your submitted recipes",
        status: "new",
      },
      {
        icon: Heart,
        title: "Favorites System",
        description: "Save and organize your favorite recipes",
        status: "improved",
      },
    ],
  },
  {
    id: "v1.0.5",
    version: "v1.0.5",
    date: "2024-08-20",
    title: "Advanced UI Enhancements",
    description: "Enhanced user interface for a better user experience",
    type: "bugfix",
    items: [
      {
        icon: Sparkles,
        title: "Responsive Design",
        description: "An improved beautiful, mobile-friendly interface that works on all devices",
        status: "improved",
      },
    ],
  },
  {
    id: "v1.0.0",
    version: "v1.0.0",
    date: "2024-08-20",
    title: "Recipe App Launch",
    description: "Initial release of Recipe App with core recipe browsing functionality",
    type: "feature",
    items: [
      {
        icon: Star,
        title: "Recipe Details from API",
        description: "Detailed recipe pages with ingredients, instructions, and nutrition info",
        status: "new",
      },
      {
        icon: Sparkles,
        title: "Responsive Design",
        description: "Beautiful, mobile-friendly interface that works on all devices",
        status: "new",
      },
    ],
  },
] -->