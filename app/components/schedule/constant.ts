export const CATEGORIES = {
  DATA_SCIENCE: "data_science",
  DEEP_LEARNING: "deep_learning",
  MACHINE_LEARNING: "machine_learning",
  ARTIFICIAL_INTELLIGENCE: "artificial_intelligence",
  NLP: "nlp",
  MONITORING: "monitoring",
  BACKEND: "backend",
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
} as const

export type Categories = keyof typeof CATEGORIES_DISPLAY
