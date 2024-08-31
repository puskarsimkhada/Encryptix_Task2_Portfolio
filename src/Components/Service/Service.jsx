import React from "react";
import "./Service.css";
import theme from "../../assets/theme_pattern.svg";
const Service = () => {
  const serviceData = [
    {
      s_no: "01",
      s_name: "Web design",
      s_desc:
        "Designing a website takes four necessary elements into account, including the website layout, the individual pages, the navigational structure and the images. I can customized Any of these elements for the particular website's needs.",
    },
    {
      s_no: "02",
      s_name: "Frontend development",
      s_desc:
        "Building interactive and visually appealing user friendly interfaces using HTML, CSS and Javascript. I can build an website based on the given requirements. The website will be dynamic and responsive to all devices.",
    },
    {
      s_no: "03",
      s_name: "Portfolio",
      s_desc:
        "A Portfolio is an online representation of work that we have created, as well as our skills and experiences. It could be website or blog.I can build Portfolio with stunning design and responsiveness so that you can run in any devices.",
    },
  ];
  return (
    <div id="service" className="service">
      <div className="service-title">
        <h1>My Services</h1>
        <img src={theme} alt="Theme" />
      </div>
      <div className="service-container">
        {serviceData.map((service, index) => {
          return (
            <div key={index} className="service-format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              {/* <div className="service-readmore">
              <p>Read More</p>
              <img src={arrowIcon} alt="ArrowIcon" />
            </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
