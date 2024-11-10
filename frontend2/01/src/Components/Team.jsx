import React from "react";

const Team = () => {
  const restApidata = {
    data: [
      {
        team: [
          {
            id: 1,
            image: "./im.png",
            name: "ROHAN KHAIRNAR",
            designation: "Founder & Head Chef",
          },
          {
            id: 2,
            image: "./im3.png",
            name: "PRANAV BHURE",
            designation: "Sous Chef",
          },
          {
            id: 3,
            image: "./im2.png",
            name: "ARYAN JADHAV",
            designation: "Fast Food Chef",
          },
          {
            id: 4,
            image: "./im4.png",
            name: "ATHARV MOGHE ",
            designation: "Senior Chef",
          },
        ],
      },
    ],
  };

  return (
    <section className="team" id="team"
    style={{backgroundColor:"black"}}>
      <div className="container">
        <div className="heading_section" style={{
          color: "white",
        }}>
          <h1 className="heading"
          style={{color:"white"}}>Meet Our Team</h1>
     
          <p
          style={{
            color: "white",
          }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatum, perferendis, vel optio, eos velit laboriosam sed
            repudiandae at iusto impedit accusamus laborum distinctio eaque
            tempore rerum praesentium adipisci sit nemo.
          </p>
          <div
            className="team_container"
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {restApidata.data[0].team.map((element) => {
              return (
                <div
                  key={element.id}
                  style={{ margin: "20px", textAlign: "center" }}
                >
                  <img
                    src={element.image}
                    alt={element.name}
                    style={{
                      borderRadius: "50%", // Makes images circular
                      width: "300px", // Adjust size as needed
                      height: "300px", // Adjust size as needed
                    }}
                  />
                  <h3
                  style={{
                    color: "white",
                  }}
                  >{element.name}</h3>
                  <p
                  style={{
                    color: "white",
                  }}
                  >{element.designation}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
