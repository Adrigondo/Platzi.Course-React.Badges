import React from "react"
import { Link } from "react-router-dom";

import "../styles/Badges.css";
import confLogo from "../../images/badge-header.svg";
import BadgesList from "../../components/BadgesList";

class Badges extends React.Component {
  constructor(props){
    super(props);
    console.log("1. constructor");
    this.state={
      loading: true,
      error: null,
      data: undefined,
    }
  }
  componentDidMount(){
    console.log("3. ComponentidMount");
    this.timeOutId = setTimeout(()=>{
      this.setState({
        data:[
          {
            id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
            firstName: "Freda",
            lastName: "Grady",
            email: "Leann_Berge@gmail.com",
            jobTitle: "Legacy Brand Director",
            twitter: "FredaGrady22221-7573",
            avatarURL: "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
          },
          {
            id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
            firstName: "Major",
            lastName: "Rodriguez",
            email: "Ilene66@hotmail.com",
            jobTitle: "Human Research Architect",
            twitter: "ajorRodriguez61545",
            avatarURL: "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon"
          },
          {
            id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
            firstName: "Daphney",
            lastName: "Torphy",
            email: "Ron61@hotmail.com",
            jobTitle: "National Markets Officer",
            twitter: "DaphneyTorphy96105",
            avatarURL: "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
          },
        ],
      })
    }, 3000)
  }
  componentDidUpdate(prevProps, prevState){
    console.log("5. ComponentDidUpdate");
    console.log({
      prevProps: prevProps,
      prevState: prevState,
    })
    console.log({
      Props: this.props,
      State: this.state,
    })
  }
  componentWillUnmount(){
    console.log("6. ComponentWillUnmount");
    clearTimeout(this.timeOutId);
  }
  render(){
    console.log("2. Render");
    return(
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img src={confLogo} alt="Conference Logo" className="Badges__conf-logo" />
            </div>
          </div>
        </div>
        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
          <div className="Badges__list">
            <div className="Badges__container">
              <BadgesList badges={this.state.data} />
              
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Badges;