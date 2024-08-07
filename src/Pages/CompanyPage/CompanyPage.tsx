import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CompanyProfile } from "../../company";
import { getCompanyProfile } from "../../api";
import Sidebar from "../../Components/Sidebar/Sidebar";
import CompanyDashboard from "../../Components/CompanyDashboard/CompanyDashboard";
import Tile from "../../Components/Tile/Tile";
import CompFinder from "../../Components/CompFinder/CompFinder";


interface Props {}

const formatToBillion = (num: number): string => {
  return (num / 1e9).toFixed(2) + 'B';
};

const formatURL = (url: string) => {
  try {
    new URL(url);
    return <a href={url} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">{url}</a>;
  } catch {
    return url;
  }
};
const CompanyPage = (props: Props) => {
  let { ticker } = useParams();
  const [company, setCompany] = useState<CompanyProfile>();

  useEffect(() => {
    const getProlfileInit = async () => {
      const result = await getCompanyProfile(ticker!);
      setCompany(result?.data[0]);
    };
    getProlfileInit();
  }, []);
  return (
    <>
      {company ? (
        <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
         <Sidebar/>
         <CompanyDashboard ticker={ticker!}>
            <Tile title="Company Name" subTitle={company.companyName}> </Tile>
            <Tile title="Price" subTitle={"$" + company.price.toString()} />
            <Tile title="DCF" subTitle={"$" + company.dcf.toString()} />
            <Tile title="Sector" subTitle={company.sector} />
            <Tile title="City" subTitle={company.city} />
            <Tile title="CEO" subTitle={company.ceo} />
            <Tile title="Market Cap" subTitle={company.mktCap ? formatToBillion(company.mktCap) : 'N/A'} />
            <Tile title="Stock Market: " subTitle={company.exchange} />
            <Tile title="Industry: " subTitle={company.industry} />
            <Tile title="Sector" subTitle={company.sector} />
            {/* <Tile title="URL" subTitle={`Website: ${formatURL(company.website)}`} /> */}
            
            

            {/* <CompFinder ticker={company.symbol} /> */}
         </CompanyDashboard>
        </div>
      ) : (
        <div>Company not found !</div>
      )}
    </>
  );
};

export default CompanyPage;
