import axios from "axios";
const getIssues = async (repoName,org) => {
    try {
      const url = `https://api.github.com/repos/${org}/${repoName}/issues`;
      const data1 = await axios.get(url);
      const data = data1.data;
      var result = [];
      for(let i = 0; i < data.length; i += 1) {
        result.push({
          title: data[i].title,
         
          id: data[i].id,
        
        });
    }
      return result;
    } catch (exception) {
    
    }
  };

  export default getIssues;