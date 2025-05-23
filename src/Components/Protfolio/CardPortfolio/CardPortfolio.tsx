import React, { SyntheticEvent } from "react";
import DeleteProtfolio from "../DeleteProtfolio/DeleteProtfolio";
import { Link } from "react-router-dom";

interface Props {
  portfolioValue: string;
  onPortfolioDelete: (e: SyntheticEvent) => void;
}

const CardPortfolio = ({ portfolioValue, onPortfolioDelete }: Props) => {
  return (
    <div className="relative flex flex-col w-full p-8 space-y-4 text-center rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 active:scale-95 cursor-pointer bg-slate-100 md:w-1/3">
      
      {/* Info Button wrapped inside Link */}
      <Link
        to={`/company/${portfolioValue}`}
        className="absolute top-4 right-4 text-gray-600 hover:text-darkBlue focus:outline-none"
        title="View Company Info"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" 
          />
        </svg>
      </Link>

      {/* Portfolio Link (also clickable) */}
      <Link 
        to={`/company/${portfolioValue}`} 
        className="pt-6 text-xl font-bold text-black hover:underline"
      >
        {portfolioValue}
      </Link>

      {/* Delete Button */}
      <DeleteProtfolio
        portfolioValue={portfolioValue}
        onPortfolioDelete={onPortfolioDelete}
      />
      
    </div>
  );
};

export default CardPortfolio;
