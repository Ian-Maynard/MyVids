var React = require("react");
    getInitialState: function() {
            return { savedArticles:""};
    },
        
    componentDidMount: function() {
        toolbox.getSaved().then(function(vidData){
            this.setState({savedVids: vidData.data});
            console.log("My Videos : ", vidData.data);
        }.bind(this));
    }

