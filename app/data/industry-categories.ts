import type { IndustryCategory } from "@prisma/client"

export type DataIndustryCategories = Pick<IndustryCategory, "name" | "symbol">

export const dataIndustryCategories: DataIndustryCategories[] = [
  {
    symbol: "CAPITAL_GOODS",
    name: "Capital Goods",
  },
  {
    symbol: "COMMERCIAL_AND_PROFESSIONAL_SERVICES",
    name: "Commercial & Professional Services",
  },
  {
    symbol: "CONSUMER_DURABLES_AND_APPAREL",
    name: "Consumer Durables & Apparel",
  },
  {
    symbol: "CONSUMER_SERVICES",
    name: "Consumer Services",
  },
  {
    symbol: "EDUCATION",
    name: "Education",
  },
  {
    symbol: "ENERGY",
    name: "Energy",
  },
  {
    symbol: "FINANCIAL_SERVICES",
    name: "Financial Service",
  },
  {
    symbol: "FOOD_BEVERAGE_AND_CONSUMER_GOODS",
    name: "Food, Beverage, and Consumer Goods",
  },
  {
    symbol: "GOVERNMENT",
    name: "Government",
  },
  {
    symbol: "HEALTH_CARE_EQUIPMENT_AND_SERVICES",
    name: "Health Care Equipment & Services",
  },
  {
    symbol: "HOUSEHOLD_AND_PERSONAL_PRODUCTS",
    name: "Household & Personal Products",
  },
  {
    symbol: "INSURANCE",
    name: "Insurance",
  },
  {
    symbol: "MATERIALS",
    name: "Materials",
  },
  {
    symbol: "MEDIA_AND_ENTERTAINMENT",
    name: "Media & Entertainment",
  },
  {
    symbol: "PHARMACEUTICALS_BIOTECHNOLOGY_AND_LIFE_SCIENCES",
    name: "Pharmaceuticals, Biotechnology & Life Sciences",
  },
  {
    symbol: "REAL_ESTATE",
    name: "Real Estate",
  },
  {
    symbol: "RETAILING",
    name: "Retailing",
  },
  {
    symbol: "SEMICONDUCTORS_AND_SEMICONDUCTOR_EQUIPMENT",
    name: "Semiconductors & Semiconductor Equipment",
  },
  {
    symbol: "SOFTWARE_AND_SERVICES",
    name: "Software & Services",
  },
  {
    symbol: "TECHNOLOGY_HARDWARE_AND_EQUIPMENT",
    name: "Technology Hardware & Equipment",
  },
  {
    symbol: "TELECOMMUNICATION_SERVICES",
    name: "Telecommunication Services",
  },
  {
    symbol: "TRANSPORTATION",
    name: "Transportation",
  },
  {
    symbol: "UTILITIES",
    name: "Utilities",
  },
  {
    symbol: "OTHERS",
    name: "Others",
  },
]
