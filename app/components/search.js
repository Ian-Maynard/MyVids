// Include React as a dependency
var React = require("react");
var Query = require("./search/Query");
var Results = require("./search/Results");

var Search  = React.createClass ({

        getInitialState:  function() { 
                return {
                         results: {}
                };
        },

        setQuery: function(newQuery){
            