import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import SearchPage from "../Pages/SearchPage/SearchPage";
import CompanyPage from "../Pages/CompanyPage/CompanyPage";
import CompanyProfile from "../Components/CompanyProfile/CompanyProfile";
import IncomeStatement from "../Components/IncomeStatement/IncomeStatement";
import DesignPage from "../Pages/DesignGuide/DesignGuide";
import BalanceSheet from "../Components/BalanceSheet/BalanceSheet";
import CashFlowStatement from "../Components/CashFlowStatement/CashflowStatement"
import HistoricalDividend from "../Components/HistoricalDividend/HistoricalDividend";

export const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "search", element: <SearchPage /> },
      { path: "design-guide", element: <DesignPage /> },
      {
        path: "company/:ticker",
        element: <CompanyPage />,
        children: [
            { path: "company-profile", element: <CompanyProfile /> },
            { path: "income-statement", element: <IncomeStatement /> },
            { path: "balance-sheet", element: <BalanceSheet /> },
            { path: "cashflow-statement", element: <CashFlowStatement /> },
            { path: "historical-dividend", element: <HistoricalDividend /> },


        ],
      },
    ],
  },
]);
