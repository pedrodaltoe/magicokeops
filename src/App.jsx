import React, { Component } from "react";
import Navigation from "./components/navigation";
import Header from "./components/header";
import About from "./components/about";
import Services from "./components/Services/services";
import Gallery from "./components/gallery";
import Testimonials from "./components/testimonials";
import Team from "./components/Team";
import Contact from "./components/contact";
import JsonData from "./data/data.json";

export class App extends Component {
  state = {
    landingPageData: {},
  };
  getlandingPageData() {
    this.setState({ landingPageData: JsonData });
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        {/* <Features data={this.state.landingPageData.Features} /> */}
        <Services />
        <Gallery />
        <About data={this.state.landingPageData.About} />
        {/* <Testimonials data={this.state.landingPageData.Testimonials} /> */}
        {/* <Team data={this.state.landingPageData.Team} /> */}
        <Contact data={this.state.landingPageData.Contact} />
      </div>
    );
  }
}

export default App;
