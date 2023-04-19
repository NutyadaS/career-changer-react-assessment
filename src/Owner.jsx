import React from "react";
import Layout from "./Layout";

const Owner = () => {
  let name = "Mai - Group A - 27";
  let bio = "Short biography:";
  let shortBio =
    "I am a full-stack development student who is currently pursing the Junior Software Developer Program Cohort 4 with Generation organization in order to expand my interest in the IT industry and to grow my career paths in the future.";
  let linkedIn = "LinkedIn: ";
  let gitHub = "GitHub: ";

  return (
    <Layout>
      <div>
        <h1>{name}</h1> <br />
        <img
          width="150px"
          height="150px"
          src="https://media.licdn.com/dms/image/D5603AQEakvKvjmMEYQ/profile-displayphoto-shrink_800_800/0/1670615376743?e=1687392000&v=beta&t=gm4LUEagelEU-oNKgjYnOGwfaz7Ncpjvppl4XtMkSyU"
        />{" "}
        <h4>{bio}</h4>
        <a>{shortBio}</a>
        <h4>
          {linkedIn}{" "}
          <a href="https://www.linkedin.com/in/nutyada-sittirit/">Nutyada</a>
        </h4>
        {/* <a href="https://www.linkedin.com/in/nutyada-sittirit/">Nutyada</a> */}
        <h4>
          {gitHub} <a href="https://github.com/NutyadaS">NutyadaS</a>
        </h4>
        {/* <a href="https://github.com/NutyadaS">NutyadaS</a> */}
      </div>
    </Layout>
  );
};

export default Owner;
