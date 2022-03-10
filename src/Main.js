import react from "react";
import img from "./images/me.jpg"
import twitter from "./images/twitterrr.png"

export default function Main() {
    return(
    <div className="main-container">
        <img className="myImage" src={img} alt="person"/>
        <h3 className="name">Vinayak Trivedi</h3>
        <h4 className="skill">Frontend Developer</h4>
        <a className="btn btn-white" href="mailto:trivedivinayak57@gmail.com">Email</a>
        <a className="btn btn-colored" href="https://www.linkedin.com/in/vinayak-trivedi-9b6212218/">Linkedin</a>
        <div className="info">
            <h4>About</h4>
            <p>Hey, I am vinayak trivedi. I am a developer. I have more interest in Frontend. I am always looking up for new things to learn.</p>
        </div>
        <div className="info">
            <h4>Interests</h4>
            <p>Apart from development I am very much into philosophy, I also like reading books.</p>
        </div>
        <div className="footer">
            <a className="icon" href="https://twitter.com/_vnayak_"><img src="https://img.icons8.com/ios-glyphs/28/000000/twitter--v1.png"/></a>
            <a className="icon" href="https://github.com/vinayak-trivedi"><img src="https://img.icons8.com/ios-glyphs/30/000000/github.png"/></a>
            <a className="icon" href="https://www.linkedin.com/in/vinayak-trivedi-9b6212218/"><img src="https://img.icons8.com/ios-glyphs/30/000000/linkedin-2--v1.png"/></a>
        </div>
    </div>
    )
}