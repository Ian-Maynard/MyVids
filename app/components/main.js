// React
var React = require("react");
var Link = require("react-router").Link;
var Main = React.crateClass({

    render: function () {
        return (
            <div className="main-container">
                <div className="container">
                    <div className="navbar-fixed">
                        <nav>
                            <div className="nav-wrapper blue">
                                <Link className="brand-logo center" to="/">Vids</Link>
                                <ul className="left hide-on-med-and-down">
                                    <li><Link to="/saved">Saved</Link></li>
                                </ul>
                            </div>
                        </nav>
                    </div>

                    <nav>
                        <div className="nav-wrapper">
                            <form>
                                <div className="input-field light-blue">
                                    <input id="search" type="search" required>
                                        <label className="label-icon" for="search">
                                            <i className="material-icons"> <Link to="/search">Search</Link></i>
                                        </label>
                                        <i className="material-icons">close</i>
                                            </div>
                                        </form>
                                    </div>
                            </nav> 
                            
                            {this.props.children}

                        <footer class="page-footer blue">
                            <hr />
                            <div class="container">
                                <div class="row">
                                    <div class="footer-copyright">
                                        <div class="container">
                                            © 2017 Copyright -  Ian Maynard
            <a class="grey-text text-lighten-4 right" href="#!"><Link to="/search">Saved</Link></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </footer>
                </div>
                </div>

                );
        }
    });
       {/* Navbar */}

                module.exports = Main;