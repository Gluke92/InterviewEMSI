import React from "react";
import "./App.css";
import STORE from './resources/store';
import Description from './components/description'
import BlockOne from './components/block1'
import BlockTwo from './components/block2'
import BlockThree from './components/block3'
import axios from 'axios';
import RegionalTrends from "./components/regional trends";
import SimpleTable from "./components/table.jsx";


class App extends React.Component{
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    // const occupation = STORE["occupation"];
    // const region = STORE["region"];
    // const summary = STORE["summary"]
    // const trend_comparison = STORE["trend_comparison"]
    // const employing_industries = STORE["employing_industries"]

  //   const URL = 'http://www.mocky.io/v2/5a29b5672e00004a3ca09d33'
    
  //   axios.get(URL).then((res) => {

  //   }).catch((err) => {
  //     if(err) 
  //     console.error("Cannot read Data, ", err)
  // })
  // console.log(occupation);
  // console.log(region)
}

  render() {
    //description
    const title = STORE["occupation"]['title'];
    const region = STORE["region"]['title'];

    //block1
    const regional_jobs = STORE["summary"]['jobs']['regional']
    const regional_year = STORE['summary']['jobs']['year']
    const regional_comparison = `${STORE['summary']['jobs']['regional'] / STORE['summary']['jobs']['national_avg']}`

    //block2
    const regional_jobs_growth = STORE['summary']['jobs_growth']['regional']
    const start_year = STORE['summary']['jobs_growth']['start_year']
    const end_year = STORE['summary']['jobs_growth']['end_year']
    const nat_avg_job_growth = STORE['summary']['jobs_growth']['national_avg']
    
    //block3
    const regional_median_earnings = STORE['summary']['earnings']['regional']
    const nat_avg_earnings = STORE['summary']['earnings']['national_avg']
    

    const regional_data = STORE["trend_comparison"]['regional']
    const state_data = STORE["trend_comparison"]['state']
    const national_data = STORE["trend_comparison"]['nation']

    const employing_industries = STORE["employing_industries"]
    
    return (
    <div className="App" >
      <Description title={title} region={region}/>
      <div className="summary">
        <h2> Occupation Summary for {title} </h2>{" "}
        
        <BlockOne title={regional_jobs} label={regional_year} description={regional_comparison}/>
        
        < BlockTwo title = {
          regional_jobs_growth
        }
        start = {
          start_year
        }
        end = {
          end_year
        }
        label = {
            nat_avg_job_growth}/ >
        
        <BlockThree title={regional_median_earnings} label={nat_avg_earnings}/>
        <RegionalTrends data={regional_data}/>
        
          <SimpleTable></SimpleTable>
        

      </div>

    </div>
       
  );
}
}


export default App;
