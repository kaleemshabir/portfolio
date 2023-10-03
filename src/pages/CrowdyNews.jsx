import "./CrowdyNews.css";
import mobilesixImg from "../assets/mobilesix.png";


import proj_aImg from "../assets/proj_a.webp";
import proj_bImg from "../assets/proj_b.jpeg"
import proj_cImg from "../assets/proj_c.jpeg";
import proj_dImg from "../assets/proj_d.jpeg";
import proj_eImg from "../assets/proj_e.webp";
import proj_fImg from "../assets/proj_f.webp";
import proj_gImg from "../assets/proj_g.jpeg";



import Button from "../components/Button";

import projectImg from "../assets/proj.jpg"


const CrowdyNews = () => {
  return (
    <div className="body">
      <h2 className="cn_header">
        Social Media Content Curation and Widget Platform
      </h2>

      <div className="container_one">
        <div className="left-column  left-a">
          <h2>Project Overview:
</h2>

          <p>As the Vue.js Developer and Website Designer on this project, I played a pivotal role in the transformation of an existing PHP application into a dynamic Vue.js-powered platform that revolutionizes content curation and web traffic optimization for users and brands. My contributions not only demonstrate my expertise in front-end development but also highlight my ability to enhance user experiences and optimize website performance.



          </p>

          {/* <ul>
            <li>
              Component Development: I designed and developed Vue.js components
              to create a responsive and interactive user interface, ensuring an
              optimal user experience.
            </li>
            <li>
              Vuex for Data Management: I leveraged Vuex, a state management
              library for Vue.js, to efficiently manage and synchronize data
              across the application. This played a pivotal role in ensuring
              real-time content updates and a seamless user experience.
            </li>
            <li>
              Integration: I seamlessly integrated these components into the
              platform, ensuring that they worked harmoniously with the PHP
              backend.
            </li>
            <li>
              Unit Testing: To guarantee the reliability and performance of our
              platform, I conducted rigorous unit testing of the Vue.js
              components and resolved any issues promptly.
            </li>
            <li>
              Performance Optimization: My efforts in optimizing the front-end
              significantly reduced load times, resulting in a more efficient
              and user-friendly experience.
            </li>
          </ul> */}
        </div>
        <div className="rol">
        <h2>Benefits</h2>
        <p>As a Vue.js developer and website designer, I was responsible for creating responsive and interactive user interfaces by designing and developing Vue.js components. I utilized Vuex for efficient data management and synchronization, ensuring real-time content updates. Integration with the PHP backend was seamless, and I conducted thorough unit testing to ensure platform reliability. Additionally, I focused on front-end performance optimization, significantly reducing load times for an improved user experience.

</p>
      </div>
      </div>

      <img src={mobilesixImg} alt="mobilesix" className="fullimg" />



      <div className="container_b">
        {/* First Row */}
        <div className="row_a">
          <div className="column_a col-left_a">
            <h1>Key Features -|</h1>




<Button name="submit" />  






          

      <div className="container_subheada">


      <div className="left-column">
      
      <h4>Multi-Platform Data Collection | </h4>
<p>Our platform seamlessly combines content from various social media sources, including Facebook, YouTube, Instagram, and Twitter. Users can choose to curate content manually or leverage the power of our AI-driven platform to automatically select content. Real-time updates and sorting by popularity keep users informed and engaged.</p>

      
      </div>
      <div className="right-column">

      <img src={proj_aImg} alt="proj_aImg" />

        {/* <img
          src="proj_aImgImg"
          alt="Imagea"
          className="image"
        /> */}
      </div>
      </div>

      
      <div className="container_subheadb">

              
<div className="left-column">

<h4>Filter & Control |</h4>
<p>Our intelligent filtering system, combined with manual moderation options, empowers users to maintain full control over what content gets published on their websites. Safeguarding their online reputation is our ultimate goal, ensuring that only relevant and appropriate content is displayed.

Usage Statistics: I implemented a bar graph to visually represent the usage of content from different social media platforms. This feature allows users to track and understand how much of their allotted content quota, such as Twitter's 250 users limit, is being utilized.</p>

</div>
<div className="right-column">
<img src={proj_bImg} alt="proj_aImg" />

</div>
</div>

<div className="container_subheadc">

              
<div className="left-column">
<h4>Widget Views Analytics |</h4>
<p>To provide valuable insights, I designed a second bar graph that displays the total widget views for each day within a week. This graph illustrates the weekly trends in widget views, enabling users to make data-driven decisions to optimize their content strategy.</p>

</div>
<div className="right-column">
<img src={proj_cImg} alt="proj_aImg" />

</div>
</div>

<div className="container_subheadd">

              
<div className="left-column">


<h4>Publish & Profit |</h4>
<p>The platform offers an effortless and user-friendly experience. With just a few lines of code, users can set up widgets on their websites. This simplicity ensures quick implementation, allowing users to start driving engagement and increasing conversions immediately.</p>

</div>
<div className="right-column">
<img src={proj_dImg} alt="proj_aImg" />

</div>
</div>


{/* <h1>Technical Details:
</h1> */}

<div className="container_subheade">

              
<div className="left-column">

<h4>1.Topic-Based Filtering |</h4>
<p>Users have the power to create custom topics by selecting their preferred platforms and applying specific filtering parameters, ensuring that they receive the most relevant and valuable content.</p>


</div>
<div className="right-column">
<img src={proj_eImg} alt="proj_aImg" />

</div>
</div>

<div className="container_subheadf">

              
<div className="left-column">

<h4>Widget Conversion Module |</h4>
<p>One of the standout features of this platform is the ability to transform curated topics into widgets that users can easily integrate into their own websites. This functionality not only provides value but also drives significant traffic to their sites.</p>

</div>
<div className="right-column">
<img src={proj_fImg} alt="proj_aImg" />

</div>
</div>

<div className="container_subheadg">

              
<div className="left-column">

<h4>2.Brand Integration |</h4>
<p>Brands are also welcome to leverage our platform by showcasing their website data as widgets. This unique offering results in a substantial boost in website traffic and, ultimately, sales for our brand partners.</p>


</div>
<div className="right-column">
<img src={proj_gImg} alt="proj_aImg" />

</div>
</div>


      
          </div>
          
        </div>

      


      </div>





      <div className="container_b">
        {/* First Row */}
        <div className="row_a">
          <div className="column_a col-left_a">
            <h1>Benefits |</h1>


      <div className="container_subheada">


      <div className="left-column">
      
      <h4>Enhanced User Engagement |</h4>
<p>By curating and displaying engaging content from various social media platforms, users can increase their website's visitor engagement and retention.</p>

      
      </div>
      <div className="right-column">

      <img src={proj_aImg} alt="proj_aImg" />

        {/* <img
          src="proj_aImgImg"
          alt="Imagea"
          className="image"
        /> */}
      </div>
      </div>

      
      <div className="container_subheadb">

              
<div className="left-column">

<h4>Increased Website Traffic |</h4>
<p>The widget conversion module acts as a traffic magnet, drawing more visitors to users' websites and delivering tangible results.</p>

</div>
<div className="right-column">
<img src={proj_bImg} alt="proj_aImg" />

</div>
</div>

<div className="container_subheadc">

              
<div className="left-column">
<h4>Brand Exposure |</h4>
<p>Our platform offers brands a strategic opportunity to promote their web content, effectively increasing their online presence and customer reach.</p>

</div>
<div className="right-column">
<img src={proj_cImg} alt="proj_aImg" />

</div>
</div>

<div className="container_subheadd">

              
<div className="left-column">


<h4>Data-Driven Decisions |</h4>
<p>The platform empowers users to make informed decisions by providing access to valuable social media insights and trends.</p>

</div>
<div className="right-column">
<img src={proj_dImg} alt="proj_aImg" />

</div>
</div>


<h1>Technical Details -|
</h1>

<div className="container_subheade">

              
<div className="left-column">

<h4>Front-End Technology |</h4>
<p>Vue.js was chosen to create a responsive and interactive user interface, ensuring an optimal user experience.</p>


</div>
<div className="right-column">
<img src={proj_eImg} alt="proj_aImg" />

</div>
</div>

<div className="container_subheadf">

              
<div className="left-column">

<h4>Back-End Enhanceent |</h4>
<p>I improved the platform's PHP backend to seamlessly integrate with the Vue.js front end and handle data collection and widget generation efficiently.</p>

</div>
<div className="right-column">
<img src={proj_fImg} alt="proj_aImg" />

</div>
</div>

<div className="container_subheadg">

              
<div className="left-column">

<h4>Security Measures |</h4>
<p>Robust security protocols were implemented to safeguard user data and ensure the integrity of the platform.</p>


</div>
<div className="right-column">
<img src={proj_gImg} alt="proj_aImg" />

</div>
</div>


      
          </div>
          
        </div>

      


      </div>

      <div className="container_Rol-results">
      <div className="rol">
        <h2>My Role -|</h2>
        <p>As a Vue.js developer and website designer, I was responsible for creating responsive and interactive user interfaces by designing and developing Vue.js components. I utilized Vuex for efficient data management and synchronization, ensuring real-time content updates. Integration with the PHP backend was seamless, and I conducted thorough unit testing to ensure platform reliability. Additionally, I focused on front-end performance optimization, significantly reducing load times for an improved user experience.

</p>
      </div>
      <div className="column_img">
      <img src={proj_eImg} alt="proj_aImg" />

      </div>
     
    </div>
{/* 
    <div className="container_Rol-results">
      
      <div className="column_img">
      <img src={proj_eImg} alt="proj_aImg" />

      </div>
      
    </div> */}





      {/* <div>
        <h3>Project Overview:</h3>
        <p>
          As the Vue.js Developer and Website Designer on this project, I played
          a pivotal role in the transformation of an existing PHP application
          into a dynamic Vue.js-powered platform that revolutionizes content
          curation and web traffic optimization for users and brands. My
          contributions not only demonstrate my expertise in front-end
          development but also highlight my ability to enhance user experiences
          and optimize website performance.
        </p>
      </div> */}
      {/* <div>
        <h2>Key Features:</h2>
        <p>
          1.<strong>Multi-Platform Data Collection:</strong> Our platform
          seamlessly combines content from various social media sources,
          including Facebook, YouTube, Instagram, and Twitter. Users can choose
          to curate content manually or leverage the power of our AI-driven
          platform to automatically select content. Real-time updates and
          sorting by popularity keep users informed and engaged.
        </p>
        <p>
          <strong>Filter & Control:</strong> Our intelligent filtering system,
          combined with manual moderation options, empowers users to maintain
          full control over what content gets published on their websites.
          Safeguarding their online reputation is our ultimate goal, ensuring
          that only relevant and appropriate content is displayed.
        </p>
        <p>
          Usage Statistics: I implemented a bar graph to visually represent the
          usage of content from different social media platforms. This feature
          allows users to track and understand how much of their allotted
          content quota, such as Twitter's 250 users limit, is being utilized.
        </p>
        <p>
          <strong> Widget Views Analytics: </strong> To provide valuable
          insights, I designed a second bar graph that displays the total widget
          views for each day within a week. This graph illustrates the weekly
          trends in widget views, enabling users to make data-driven decisions
          to optimize their content strategy.
        </p>
        <p>
          <strong> Publish & Profit:</strong> The platform offers an effortless
          and user-friendly experience. With just a few lines of code, users can
          set up widgets on their websites. This simplicity ensures quick
          implementation, allowing users to start driving engagement and
          increasing conversions immediately.
        </p>
        <p>
          1.<strong>Topic-Based Filtering: </strong> Users have the power to
          create custom topics by selecting their preferred platforms and
          applying specific filtering parameters, ensuring that they receive the
          most relevant and valuable content.
        </p>
        <p>
          2.<strong>Widget Conversion Module:</strong> One of the standout
          features of this platform is the ability to transform curated topics
          into widgets that users can easily integrate into their own websites.
          This functionality not only provides value but also drives significant
          traffic to their sites.
        </p>
        <p>
          2.<strong>Brand Integration:</strong> Brands are also welcome to
          leverage our platform by showcasing their website data as widgets.
          This unique offering results in a substantial boost in website traffic
          and, ultimately, sales for our brand partners.
        </p>
      </div> */}



      <div>
        {/* <h2>My Role:</h2> */}

        {/* <p>
          As a Vue.js developer and website designer, I was responsible for
          creating responsive and interactive user interfaces by designing and
          developing Vue.js components. I utilized Vuex for efficient data
          management and synchronization, ensuring real-time content updates.
          Integration with the PHP backend was seamless, and I conducted
          thorough unit testing to ensure platform reliability. Additionally, I
          focused on front-end performance optimization, significantly reducing
          load times for an improved user experience.
        </p> */}
        {/* <<ul>
          <li>
            1.<strong>Component Development:</strong> I designed and developed
            Vue.js components to create a responsive and interactive user
            interface, ensuring an optimal user experience.
          </li>
          <li>
            2.<strong> Vuex for Data Management:</strong> I leveraged Vuex, a
            state management library for Vue.js, to efficiently manage and
            synchronize data across the application. This played a pivotal role
            in ensuring real-time content updates and a seamless user
            experience.
          </li>
          <li>
            3.<strong>Integration:</strong> I seamlessly integrated these
            components into the platform, ensuring that they worked harmoniously
            with the PHP backend.
          </li>
          <li>
            4.<strong> Unit Testing:</strong> To guarantee the reliability and
            performance of our platform, I conducted rigorous unit testing of
            the Vue.js components and resolved any issues promptly.
          </li>
          <li>
            5.<strong>Performance Optimization:</strong> My efforts in
            optimizing the front-end significantly reduced load times, resulting
            in a more efficient and user-friendly experience.
          </li>
        </ul>> */}
      </div>
      {/* <div>
        <h2>Benefits:</h2>
        <ul>
          <li>
            <strong> Enhanced User Engagement:</strong> By curating and
            displaying engaging content from various social media platforms,
            users can increase their website's visitor engagement and retention.
          </li>
          <li>
            <strong>Increased Website Traffic:</strong> The widget conversion
            module acts as a traffic magnet, drawing more visitors to users'
            websites and delivering tangible results.
          </li>
          <li>
            <strong> Brand Exposure:</strong> Our platform offers brands a
            strategic opportunity to promote their web content, effectively
            increasing their online presence and customer reach.
          </li>
          <li>
            <strong> Data-Driven Decisions:</strong> The platform empowers users
            to make informed decisions by providing access to valuable social
            media insights and trends.
          </li>
        </ul>
      </div> */}

      {/* <div>
        <h2>Technical Details:</h2>
        <ul>
          <li>
            <strong> Front-End Technology:</strong> Vue.js was chosen to create
            a responsive and interactive user interface, ensuring an optimal
            user experience.
          </li>

          <li>
            <strong>Back-End Enhancement:</strong> I improved the platform's PHP
            backend to seamlessly integrate with the Vue.js front end and handle
            data collection and widget generation efficiently.
          </li>

          <li>
            <strong>Security Measures:</strong> Robust security protocols were
            implemented to safeguard user data and ensure the integrity of the
            platform.
          </li>
        </ul>
      </div> */}

      {/* <div>
        <h2> Results:</h2>
        <p>
          The transformation of this PHP app into a Vue.js-powered content
          curation and widget platform has garnered positive feedback from users
          and brands alike. The increased website traffic and engagement metrics
          clearly indicate the success of this project, with my role as a Vue.js
          developer and website designer playing a crucial part in its
          achievement.
        </p>
      </div> */}
    </div>
  );
};

export default CrowdyNews;
