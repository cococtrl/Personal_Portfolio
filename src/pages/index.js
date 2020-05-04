import React from "react";

import Header from "../components/header";
import Layout from "../components/layout";
import Link from "../components/link";
import Section from "../components/section";

const IndexPage = () => (
  <Layout>
    <Header />
    <Section id="about" title="About Me">
      <p>
      I'm a Philadelphia-based software engineer with a background in communication and design. 
      I write code that communicates efficiently and effectively in hopes to connect real people 
      with innovative technologies. Striving to combine my technical and creative skills to 
      develop tools that enrich communities.
      </p>
    </Section>
    <Section id="education" title="Education">
      <Link
        title="General Assembly"
        desc="Software Engineering Immersive, October 2019 - April 2020"
      />
      <Link
        title="University of South Florida"
        desc="B.A. in English, June 2012 - May 2017"
      />
    </Section>
    <Section id="experience" title="Experience">
      <Link
        title="General Assembly"
        link="https://generalassemb.ly"
        desc="Software Engineering Fellow, October 2019 - April 2020"
      />
    </Section>
    <Section id="projects" title="Projects">
      <Link
        title="Pls Respond"
        link="https://github.com/cococtrl/pls-respond"
        desc="Designed a responsive web app using the MERN stack. Pls Respond is an app made for creating and sharing events. 
        It works as a complete CRUD app and features authentication."
      />
      <Link
        title="Frame Rate"
        link="https://github.com/cococtrl/frame-rate"
        desc="Designed a responsive web app using the MERN stack. Frame Rate is CRUD app used for collecting and rating films."
      />
      <Link
        title="Travel Logger"
        target="_blank"
        link="https://github.com/cococtrl/travel-logger"
        desc="Designed a responsive web application using Python, Django, MongoDB and NodeJS. 
        Application works as a complete CRUD app, allowing the user to keep track of vacations."
      />
    </Section>
    <Section id="skills" title="Skills">
      <Link
        title="Languages & Frameworks"
        desc="JavaScript (ES6+), Python, Django, React.js, Gatsby.js, Node.js, Express.js, Mongoose.js, HTML/CSS (Bootstrap & Materialize), SASS"
      />
      <Link title="Databases" desc="MongoDB, PostreSQL, SQL" />
      <Link
        title="Other"
        desc="Amazon Web Services (AWS), API design, Agile / Scrum, Adobe Creative Suite"
      />
    </Section>
    <Section>
    <a href={`Coleman.Resume.pdf`} download>Download Resume</a>
    </Section>
  </Layout>
);

export default IndexPage;
