import axios from "axios";
import { CompanyBalanceSheet, CompanyCashFlow, CompanyCompData, CompanyHistoricalDividend, CompanyIncomeStatement, CompanyKeyMetrics, CompanyProfile, CompanySearch } from "./company";
import { log } from "console";

interface SearchResponse {
  data: CompanySearch[];
}
export const searchCompanies = async (query: string) => {
  try {
    const data = await axios.get<SearchResponse>(
      `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=CfdvNFHpLX10hCDyyE6eF5r3Noq8x9zV`
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error:", error.message);
      return error.message;
    } else {
      console.log("unexpcted error", error);
      return "An expected error has occured.";
    }
  }
};

export const getCompanyProfile = async (query: string) => {
  try {
    const data = await axios.get<CompanyProfile[]>(
      `https://financialmodelingprep.com/api/v3/profile/${query}?apikey=CfdvNFHpLX10hCDyyE6eF5r3Noq8x9zV`
    );
    return data;
  } catch (error: any) {
    console.log("error message from API", error.message);
  }
};

export const getKeyMetrics = async (query: string) => {
  try {
    const data = await axios.get<CompanyKeyMetrics[]>(
      `https://financialmodelingprep.com/api/v3/key-metrics-ttm/${query}?limit=40&apikey=CfdvNFHpLX10hCDyyE6eF5r3Noq8x9zV`
    );
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};

export const getIncomeStatement = async (query: string) => {
  try {
    const data = await axios.get<CompanyIncomeStatement[]>(
      `https://financialmodelingprep.com/api/v3/income-statement/${query}?limit=50&apikey=CfdvNFHpLX10hCDyyE6eF5r3Noq8x9zV`
    );
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};

export const getBalanceSheet = async (query: string) => {
    try {
      const data = await axios.get<CompanyBalanceSheet[]>(
        `https://financialmodelingprep.com/api/v3/balance-sheet-statement/${query}?limit=40&apikey=CfdvNFHpLX10hCDyyE6eF5r3Noq8x9zV`
      );
      return data;
    } catch (error: any) {
      console.log("error message: ", error.message);
    }
  };

  export const getCashFlow = async (query: string) => {
    try {
      const data = await axios.get<CompanyCashFlow[]>(
        `https://financialmodelingprep.com/api/v3/cash-flow-statement/${query}?limit=100&apikey=CfdvNFHpLX10hCDyyE6eF5r3Noq8x9zV`
      );
      return data;
    } catch (error: any) {
      console.log("error message: ", error.message);
    }
  };

  export const getHistoricalDividend = async (query: string) => {
    try {
      const data = await axios.get<CompanyHistoricalDividend>(
        `https://financialmodelingprep.com/api/v3/historical-price-full/stock_dividend/${query}?apikey=CfdvNFHpLX10hCDyyE6eF5r3Noq8x9zV`
      );
      return data;
    } catch (error: any) {
      console.log("error message: ", error.message);
    }
  };
  
  export const getCompData = async (query: string) => {
    try {
      const data = await axios.get<CompanyCompData[]>(
        `https://financialmodelingprep.com/api/v3/stock_peers?symbol=${query}&apikey=CfdvNFHpLX10hCDyyE6eF5r3Noq8x9zV`
      );
      return data;
    } catch (error: any) {
      console.log("error message: ", error.message);
    }
  };