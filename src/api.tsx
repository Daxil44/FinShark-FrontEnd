import axios from "axios";
import { CompanyBalanceSheet, CompanyCashFlow, CompanyStockPeer, Dividend, CompanyIncomeStatement, CompanyKeyMetrics, CompanyProfile, CompanySearch } from "./company";
import { log } from "console";

const KEY = process.env.REACT_APP_API_KEY;

interface SearchResponse {
  data: CompanySearch[];
}
export const searchCompanies = async (query: string) => {
  try {
    // FMP split the old name+symbol search into two endpoints, so query both and merge
    const [bySymbol, byName] = await Promise.all([
      axios.get<CompanySearch[]>(
        `https://financialmodelingprep.com/stable/search-symbol?query=${query}&limit=10&apikey=${KEY}`
      ),
      axios.get<CompanySearch[]>(
        `https://financialmodelingprep.com/stable/search-name?query=${query}&limit=10&apikey=${KEY}`
      ),
    ]);
    const merged = [...bySymbol.data, ...byName.data];
    const unique = Array.from(new Map(merged.map((c) => [c.symbol, c])).values());
    return { data: unique };
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
      `https://financialmodelingprep.com/stable/profile?symbol=${query}&apikey=${KEY}`
    );
    return data;
  } catch (error: any) {
    console.log("error message from API", error.message);
  }
};

export const getKeyMetrics = async (query: string) => {
  try {
    const data = await axios.get<CompanyKeyMetrics[]>(
      `https://financialmodelingprep.com/stable/key-metrics-ttm?symbol=${query}&apikey=${KEY}`
    );
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};

export const getIncomeStatement = async (query: string) => {
  try {
    const data = await axios.get<CompanyIncomeStatement[]>(
      `https://financialmodelingprep.com/stable/income-statement?symbol=${query}&limit=5&apikey=${KEY}`
    );
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};

export const getBalanceSheet = async (query: string) => {
    try {
      const data = await axios.get<CompanyBalanceSheet[]>(
        `https://financialmodelingprep.com/stable/balance-sheet-statement?symbol=${query}&limit=5&apikey=${KEY}`
      );
      return data;
    } catch (error: any) {
      console.log("error message: ", error.message);
    }
  };

  export const getCashFlow = async (query: string) => {
    try {
      const data = await axios.get<CompanyCashFlow[]>(
        `https://financialmodelingprep.com/stable/cash-flow-statement?symbol=${query}&limit=5&apikey=${KEY}`
      );
      return data;
    } catch (error: any) {
      console.log("error message: ", error.message);
    }
  };

  export const getHistoricalDividend = async (query: string) => {
    try {
      const data = await axios.get<Dividend[]>(
        `https://financialmodelingprep.com/stable/dividends?symbol=${query}&apikey=${KEY}`
      );
      return data;
    } catch (error: any) {
      console.log("error message: ", error.message);
    }
  };
  
  export const getCompData = async (query: string) => {
    try {
      const data = await axios.get<CompanyStockPeer[]>(
        `https://financialmodelingprep.com/stable/stock-peers?symbol=${query}&apikey=${KEY}`
      );
      return data;
    } catch (error: any) {
      console.log("error message: ", error.message);
    }
  };