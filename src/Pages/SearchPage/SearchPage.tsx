import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import { CompanySearch } from '../../company';
import CardList from '../../Components/CardList/CardList';
import Navbar from '../../Components/Navbar/Navbar';
import ListPortfolio from '../../Components/Protfolio/ListPortfolio/ListPortfolio';
import { searchCompanies } from '../../api';
import Search from '../../Components/Search/Search';

interface Props {}

const SearchPage = (props: Props) => {

    const [search, setSearch] = useState<string>("");
    const [protfoliovalues, setPortfolioValues] = useState<string[]>([]);
    const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
    const [serverError, setServerError] = useState<string | null>(null);
  
    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    };
  
    const onSearchSubmit = async (e: SyntheticEvent) => {
      e.preventDefault();
      const result = await searchCompanies(search);
      if (typeof result === "string") {
        setServerError(result);
      } else if (Array.isArray(result.data)) {
        setSearchResult(result.data);
      }
      console.log(result);
    };
  
    const onPortfolioDelete = (e: any) => {
      e.preventDefault();
      const removed = protfoliovalues.filter((value) => {
        return value !== e.target[0].value;
      });
      setPortfolioValues(removed);
    };
  
    const onPortfolioCreate = (e: any) => {
      e.preventDefault(); // imp
      const exists = protfoliovalues.find((value) => value === e.target[0].value);
      if (exists) return;
      const updatedPortfolio = [...protfoliovalues, e.target[0].value];
      setPortfolioValues(updatedPortfolio);
    };
  return (
   <>
 
      <Search
        onSearchSubmit={onSearchSubmit}
        handleSearchChange={handleSearchChange}
        search={search}
      />
      {serverError && <h1>{serverError}</h1>}
      <ListPortfolio portfolioValues={protfoliovalues} onPortfolioDelete={onPortfolioDelete}/>
      <CardList
        searchResults={searchResult}
        onPortfolioCreate={onPortfolioCreate}
      />
   </>
  )
}

export default SearchPage