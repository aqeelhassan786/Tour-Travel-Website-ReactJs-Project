import { Component } from "react";
// import Mountain1 from "../assets/1.jpg"
// import Mountain2 from "../assets/2.jpg"
import "./DestinationStyles.css"

class DestinationData extends Component{
    render(){
        return(
            <div className={this.props.className}>
                    <div className="des-text">
                      <h2>{this.props.heading}</h2>
                      <p>
                        {this.props.text}
                      </p>
                    </div>
            
                    <div className="image">
                        <img src={this.props.img1} alt="img" />
                        <img src={this.props.img2} alt="img" />
                    </div>
                  </div>
        )
    }
}

export default DestinationData;