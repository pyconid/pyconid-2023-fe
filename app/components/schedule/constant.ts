export const CATEGORIES = {
  DATA_SCIENCE: "data_science",
  DEEP_LEARNING: "deep_learning",
  MACHINE_LEARNING: "machine_learning",
  ARTIFICIAL_INTELLIGENCE: "artificial_intelligence",
  NLP: "nlp",
  MONITORING: "monitoring",
  BACKEND: "backend",
  HOME_AUTOMATION: "home_automation",
  MICROPYTHON: "micropython",
  DATA_ENGINEER: "data_engineer",
  PYTORCH: "pytorch",
  FRAMEWORK: "framework",
  CHERRYPY: "cherrypy",
  MAKO: "mako",
  DRONE: "drone",
  MULTI_THREAD: "multi_threading",
  SOCKET_PROGRAMMING: "socket_programming",
  SECURITY: "security",
  RUST: "rust",
  PERFORMANCE: "performance",
  FOOTBALL: "football",
  DATA_VISUALIZATION: "data_vizualization",
  TWITCH: "twitch",
  CHAT_GPT: "chat_gpt",
  COMPUTER_VISION: "computer_vision",
  FUZZY_LOGIC: "fuzzy_logic",
  SIMPFUL: "simpful",
  COMPETITIVE_PROGRAMMING: "competitive_programming",
  CONCEPT: "concept",
  FASTAPI: "fastapi",
  KUBERNETES: "kubernetes",
  SECURITY_AUTOMATION: "security_automation",
  CODE_QUALITY: "code_quality",
  STATIC_ANALYSIS: "static_analysis",
  NEO4J: "neo4j",
  CYPHER: "cypher",
  NETWORKX: "networkx",
  PYVIS: "pyvis",
  TIDYVERSE: "tidyverse",
  SPARK: "spark",
  COMPUTER_GRAPHICS: "computer_graphics",
  PY5: "py5",
  GODOT: "godot",
  RENPY: "renpy",
  VISUAL_NOVEL: "visual_novel",
  GAME: "game",
  WEB_DEVELOPMENT: "web_development",
  FLASK: "flask",
  LEAFLET: "leaflet",
  SPATIAL_DATA: "spatial_data",
  ELASTICSEARCH: "elasticsearch",
  DATA_STRUCTURE: "data_structure",
  ALGORITHM: "algorithm",
  DIGITAL_FORENSICS: "digital_forensics",
  MICROSERVICES: "microservices",
  EVENT_DRIVEN: "event_driven",
  AIRFLOW: "airflow",
  DBT: "dbt",
  AUTOMATION: "automation",
  FLUTTER: "flutter",
  MOBILE: "mobile",
  DESKTOP: "desktop",
  SOCIAL_MEDIA: "social_media",
  ACTIVITYPUB: "activitypub",
  WEB_SCRAPING: "web_scraping",
  CLOUS: "clous",
  GRAPHQL: "graphql",
  DATABASE: "database",
  WEB_SECURITY: "web_security",
} as const

export const CATEGORIES_DISPLAY = {
  [CATEGORIES.DATA_SCIENCE]: {
    name: "Data Science",
    color: "bg-primary-red",
  },
  [CATEGORIES.DEEP_LEARNING]: {
    name: "Deep Learning",
    color: "bg-primary-red",
  },
  [CATEGORIES.MACHINE_LEARNING]: {
    name: "Machine Learning",
    color: "bg-primary-orange",
  },
  [CATEGORIES.ARTIFICIAL_INTELLIGENCE]: {
    name: "Artifical Intelligence",
    color: "bg-primary-purple",
  },
  [CATEGORIES.NLP]: {
    name: "NLP",
    color: "bg-primary-orange",
  },
  [CATEGORIES.MONITORING]: {
    name: "Monitoring",
    color: "bg-primary-red",
  },
  [CATEGORIES.BACKEND]: {
    name: "Backend",
    color: "bg-primary-red",
  },
  [CATEGORIES.HOME_AUTOMATION]: {
    name: "Home Automation",
    color: "bg-primary-orange",
  },
  [CATEGORIES.MICROPYTHON]: {
    name: "Micropython",
    color: "bg-primary-purple",
  },
  [CATEGORIES.DATA_ENGINEER]: {
    name: "Data Engineer",
    color: "bg-primary-orange",
  },
  [CATEGORIES.PYTORCH]: {
    name: "PyTorch",
    color: "bg-primary-red",
  },
  [CATEGORIES.FRAMEWORK]: {
    name: "Framework",
    color: "bg-primary-orange",
  },
  [CATEGORIES.CHERRYPY]: {
    name: "CherryPy",
    color: "bg-primary-red",
  },
  [CATEGORIES.MAKO]: {
    name: "Mako",
    color: "bg-primary-purple",
  },
  [CATEGORIES.DRONE]: {
    name: "Drone",
    color: "bg-primary-red",
  },
  [CATEGORIES.MULTI_THREAD]: {
    name: "Multi Threading",
    color: "bg-primary-orange",
  },
  [CATEGORIES.SOCKET_PROGRAMMING]: {
    name: "Multi Threading",
    color: "bg-primary-purple",
  },
  [CATEGORIES.SECURITY]: {
    name: "Security",
    color: "bg-primary-red",
  },
  [CATEGORIES.PERFORMANCE]: {
    name: "Performance",
    color: "bg-primary-purple",
  },
  [CATEGORIES.RUST]: {
    name: "Rust",
    color: "bg-primary-red",
  },
  [CATEGORIES.DATA_VISUALIZATION]: {
    name: "Data Visualization",
    color: "bg-primary-purple",
  },
  [CATEGORIES.FOOTBALL]: {
    name: "Football",
    color: "bg-primary-red",
  },
  [CATEGORIES.TWITCH]: {
    name: "Twitch",
    color: "bg-primary-purple",
  },
  [CATEGORIES.CHAT_GPT]: {
    name: "ChatGPT",
    color: "bg-primary-orange",
  },
  [CATEGORIES.COMPUTER_VISION]: {
    name: "Computer Vision",
    color: "bg-primary-red",
  },
  [CATEGORIES.FUZZY_LOGIC]: {
    name: "Fuzzy Logic",
    color: "bg-primary-red",
  },
  [CATEGORIES.SIMPFUL]: {
    name: "Simpful",
    color: "bg-primary-purple",
  },
  [CATEGORIES.CONCEPT]: {
    name: "Concept",
    color: "bg-primary-red",
  },
  [CATEGORIES.COMPETITIVE_PROGRAMMING]: {
    name: "Competitive Programming",
    color: "bg-primary-orange",
  },
  [CATEGORIES.FASTAPI]: {
    name: "FastAPI",
    color: "bg-primary-red",
  },
  [CATEGORIES.KUBERNETES]: {
    name: "Kubernetes",
    color: "bg-primary-purple",
  },
  [CATEGORIES.SECURITY_AUTOMATION]: {
    name: "Security Automation",
    color: "bg-primary-red",
  },
  [CATEGORIES.STATIC_ANALYSIS]: {
    name: "Static Analysis",
    color: "bg-primary-red",
  },
  [CATEGORIES.CODE_QUALITY]: {
    name: "Code Quality",
    color: "bg-primary-orange",
  },
  [CATEGORIES.NEO4J]: {
    name: "Neo4J",
    color: "bg-primary-red",
  },
  [CATEGORIES.CYPHER]: {
    name: "Cypher",
    color: "bg-primary-orange",
  },
  [CATEGORIES.NETWORKX]: {
    name: "NetworkX",
    color: "bg-primary-purple",
  },
  [CATEGORIES.PYVIS]: {
    name: "PyVis",
    color: "bg-primary-red",
  },
  [CATEGORIES.TIDYVERSE]: {
    name: "Tidyverse",
    color: "bg-primary-orange",
  },
  [CATEGORIES.SPARK]: {
    name: "Spark",
    color: "bg-primary-orange",
  },
  [CATEGORIES.COMPUTER_GRAPHICS]: {
    name: "Computer Graphics",
    color: "bg-primary-red",
  },
  [CATEGORIES.PY5]: {
    name: "Py5",
    color: "bg-primary-orange",
  },
  [CATEGORIES.GODOT]: {
    name: "Godot",
    color: "bg-primary-purple",
  },
  [CATEGORIES.RENPY]: {
    name: "Renpy",
    color: "bg-primary-red",
  },
  [CATEGORIES.VISUAL_NOVEL]: {
    name: "Visual Novel",
    color: "bg-primary-orange",
  },
  [CATEGORIES.GAME]: {
    name: "Game",
    color: "bg-primary-purple",
  },
  [CATEGORIES.WEB_DEVELOPMENT]: {
    name: "Web Development",
    color: "bg-primary-purple",
  },
  [CATEGORIES.FLASK]: {
    name: "Flask",
    color: "bg-primary-red",
  },
  [CATEGORIES.LEAFLET]: {
    name: "Leaflet",
    color: "bg-primary-orange",
  },
  [CATEGORIES.SPATIAL_DATA]: {
    name: "Spatial Data",
    color: "bg-primary-purple",
  },
  [CATEGORIES.ELASTICSEARCH]: {
    name: "Elasticsearch",
    color: "bg-primary-red",
  },
  [CATEGORIES.ALGORITHM]: {
    name: "Algorithm",
    color: "bg-primary-orange",
  },
  [CATEGORIES.DATA_STRUCTURE]: {
    name: "Data Structure",
    color: "bg-primary-purple",
  },
  [CATEGORIES.DIGITAL_FORENSICS]: {
    name: "Digital Forensics",
    color: "bg-primary-orange",
  },
  [CATEGORIES.MICROSERVICES]: {
    name: "Microservices",
    color: "bg-primary-red",
  },
  [CATEGORIES.EVENT_DRIVEN]: {
    name: "Event Driven",
    color: "bg-primary-purple",
  },
  [CATEGORIES.AIRFLOW]: {
    name: "Airflow",
    color: "bg-primary-orange",
  },
  [CATEGORIES.DBT]: {
    name: "DBT",
    color: "bg-primary-red",
  },
  [CATEGORIES.AUTOMATION]: {
    name: "Automation",
    color: "bg-primary-orange",
  },
  [CATEGORIES.FLUTTER]: {
    name: "Flutter",
    color: "bg-primary-red",
  },
  [CATEGORIES.MOBILE]: {
    name: "Mobile",
    color: "bg-primary-orange",
  },
  [CATEGORIES.DESKTOP]: {
    name: "Desktop",
    color: "bg-primary-purple",
  },
  [CATEGORIES.SOCIAL_MEDIA]: {
    name: "Social Media",
    color: "bg-primary-red",
  },
  [CATEGORIES.ACTIVITYPUB]: {
    name: "ActivityPub",
    color: "bg-primary-orange",
  },
  [CATEGORIES.WEB_SCRAPING]: {
    name: "Web Scraping",
    color: "bg-primary-red",
  },
  [CATEGORIES.CLOUS]: {
    name: "Clous",
    color: "bg-primary-purple",
  },
  [CATEGORIES.GRAPHQL]: {
    name: "GraphQL",
    color: "bg-primary-purple",
  },
  [CATEGORIES.DATABASE]: {
    name: "Database",
    color: "bg-primary-red",
  },
  [CATEGORIES.WEB_SECURITY]: {
    name: "Web Security",
    color: "bg-primary-orange",
  },
} as const

export type Categories = keyof typeof CATEGORIES_DISPLAY
