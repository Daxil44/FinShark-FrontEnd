import React from 'react'
import Table from '../../Components/Table/Table'
import RatioList from '../../Components/RatioList/RatioList'
import { testIncomeStatementData } from '../../Components/Table/testData';

interface Props {}
const tableConfig = [
  {
    label: "Market Cap",
    render: (company: any) => company.marketCapTTM,
    subTitle: "Total value of all a company's shares of stock",
  }
];


const DesignPage = (props: Props) => {
  return (
   <>
    <h1>
        Design guide- This is the design guide for Fin Shark. These are reuable
        components of the app with brief instructions on how to use them.- Daxil Patel
    </h1> 
    <RatioList data={testIncomeStatementData} config={tableConfig}/>
    <Table data={testIncomeStatementData} configs={tableConfig}/>

   </>
  )
}

export default DesignPage