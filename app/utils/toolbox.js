var axios = require(axios);
var APIKey="AIzaSyBXobGbNYWd9dc0PUQ8Qb27kOI6nQWXxPs";

var toolbox = {

    termForm: function (term) {
        term = term.replace(/ /g, "+");
        return term.trim();
    },

    runQuery: function (term) {
        var formSearch = termForm(term);

    return axios.get("https://youtube/vs/search/",{
      params: {
          "api-key":APIKey,
          "q":formSearch,
          "type":"video",
          maxResults:10
      }
    })
.then(function(results){
        console.log("YouTube Returned ",results.data.response);
        return results.data.response;
    });
    }, 

getSaved: function() {
    return axios.get("/apis/saved")
        .then(function(results) {
            console.log("axios results", results);
            return results;
        });
},

postSaved: function(term, url) {
    var newVideo = { term: term, url: url};
        return axios.post("/api/saved", newVideo)
            .then(function(response) {
                 console.log("YouTube Returned ",response.data._id);
                    return response.data._id;
            });
},
                






