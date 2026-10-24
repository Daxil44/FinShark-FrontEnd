import React, { useEffect, useState } from "react";
import CompFinderItem from "./CompFinderItem/CompFinderItem";
import { CompanyStockPeer } from "../../company";
import { getCompData } from "../../api";
import Spinner from "../Spinners/Spinner";
type Props = {
  ticker: string;
};

const CompFinder = ({ ticker }: Props) => {
  const [companyData, setCompanyData] = useState<CompanyStockPeer[]>();
  useEffect(() => {
    const getComps = async () => {
      const value = await getCompData(ticker);
      console.log(value)
      setCompanyData(value?.data);
    };
    getComps();
  }, [ticker]);
  return (
    <div className="inline-flex rounded-md shadow-sm m-4" role="group">
      {companyData ? (
        companyData?.map((peer) => {
          return <CompFinderItem ticker={peer.symbol} key={peer.symbol} />;
        })
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default CompFinder;
