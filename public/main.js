var react = reactquire("react");
var link = require("react-router").Link;  // Prevents page loads 

 var Main = React.createClass({
    render: function() {
            return (
                // One Div to RULE THEM ALL 
                <div className="main-container">
                    <div className="container">
                          <nav class="light-blue lighten-1" role="navigation">
                                <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo">My Vids</a>
                                    <ul class="right hide-on-med-and-down">
                                        <li><a href="#">Saved videos</a></li>
                                    </ul>
                                    <ul id="nav-mobile" class="side-nav">
                                        <li><a href="#">Saved videos</a></li>
                                    </ul>
                                    <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">Menu</i></a>
                                </div>
                        </nav>
                    </div>
                </div>
