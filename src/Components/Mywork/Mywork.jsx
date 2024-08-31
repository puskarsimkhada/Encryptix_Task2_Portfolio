import React from "react";
import "./Mywork.css";
import theme from "../../assets/theme_pattern.svg";
import APKCinema from "../../assets/Apkcinema.png";
import gadgetwiz from "../../assets/ecommerce.png";
import porfolio from "../../assets/puskarporfolio.png";
import rockpaperscissor from "../../assets/paper.png";
import arrowIcon from "../../assets/arrow_icon.svg";
import myportfolio from "../../assets/port.png";
import youtube from "../../assets/youtub.png";
const Mywork = () => {
  const myworkData = [
    {
      w_no: 1,
      w_name: "Gadgetwiz",
      w_img: gadgetwiz,
      title: "Gadgetwiz",
      des: "I have build Gadgetwiz e-commerce website using html css and java script. The Gadgetwiz Ecommerce website showcases smartphones, laptops, watches, and accessories, offering a responsive, dynamic, cross-browser compatible, and user-friendly experience.",
    },
    {
      w_no: 2,
      w_name: "myPortfolio",
      w_img: myportfolio,
      title: "Portfolio",
      des: "I developed a dynamic portfolio website using HTML, CSS, and JavaScript, with React.js integration to enhance interactivity, navigation, and visual elements.",
    },
    {
      w_no: 3,
      w_name: "Portfolio",
      w_img: porfolio,
      title: "Portfolio",
      des: "I build a portfolio website using HTML, CSS, and JavaScript.",
    },
    {
      w_no: 4,
      w_name: "Youtube CLone",
      w_img: youtube,
      title: "Youtube Clone",
      des: "A React-based You,Tube clone with video recommendations, a detailed comment section, and categorized videos in music, gaming, and sports.",
    },
    {
      w_no: 5,
      w_name: "Rock Paper Scissor",
      w_img: rockpaperscissor,
      title: "Portfolio",
      des: "A React-based YouTube clone offering dynamic video streaming, with video recommendations, a detailed comment section, and categorized videos in music, gaming, and sports",
    },
  ];

  return (
    <div id="portfolio" className="mywork">
      <div className="mywork-title">
        <h1>My Projects</h1>
        <img src={theme} alt="Theme" />
      </div>
      <div className="mywork-container">
        {myworkData.map((work, index) => {
          return <img key={index} src={work.w_img} />;
        })}
      </div>
      {/* <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrowIcon} alt="ArrowIcon" />
      </div> */}
    </div>
  );
};

export default Mywork;
