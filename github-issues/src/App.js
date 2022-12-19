import React, { useState,useEffect} from "react";
import getIssues from "./api.js";
import styles from "./App.css"
const App = (props) => {
  const [issues, setData] = useState("");
  useEffect(() => { 
    getIssues('gatsby','gatsbyjs').then((Data)=>{
    console.log(Data);
    setData(Data)
    }).catch((err)=>{
      console.log(err);
    })
  },[] );
  
  const [search, setNewSearch] = useState("");

  const handleSearchChange = (e) => {
    setNewSearch(e.target.value);
  };

  const filtered = !search
    ? issues
    : issues.filter((issue) =>
        issue.title.toLowerCase().includes(search.toLowerCase())
      );

  return (
    <div className="whole">
      <h2 className="heading">gatsbyjs/gatsby</h2>
      Search issue:{" "}
      <input className="searchbar" type="text" value={search} onChange={handleSearchChange} />
      {issues && filtered.map((issue) => {
        return (
          <div>
          <div className="theissues" key={issue.id}>
            <span className="dot"><span className="point"></span></span>
            <div className="issues">{issue.title}</div>
            
          </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;