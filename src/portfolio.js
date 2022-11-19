/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Teja",
  logo_name: "Teja.s()",
  // nickname: "harry / picleric",
  full_name: "TEJAVATH THIRUPATHI",
  subTitle:
    `Full Stack Web Developer,Tech Blogger,Quick Learner.
    An independent and self-motivated aspiring Software Engineer with intermediate problem-solving and the ability to perform well in a team.`,
  resumeLink:
    "https://drive.google.com/file/d/1Atlqq4xoz6MneEtS_lra3OpCUBsBY1gP/view?usp=share_link",
  mail: "mailto:thiru21ssc@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/iamteja9977/",
  linkedin: "https://www.linkedin.com/in/tejavath-thirupathi-8b74a5245/",
  gmail: "thiru21ssc@gmail.com",
  // gitlab: "https://gitlab.com/harikanani",
  // facebook: "https://www.facebook.com/vedansh.vijaywargiya/",
  twitter: "https://twitter.com/TEJAVATHTHIRUP4",
  instagram: "https://www.instagram.com/_mr_shapeless_boy_teja/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive User Interfaces and Backend for web applications",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Creating application backend in Node, Express",
        "⚡ Using database management : MongoDB",

      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#563d7c",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        // {
        //   skillName: "Flask",
        //   fontAwesomeClassname: "simple-icons:flask",
        //   style: {
        //     color: "#000000",
        //   },
        // },
        // {
        //   skillName: "Django",
        //   fontAwesomeClassname: "simple-icons:django",
        //   style: {
        //     color: "#0c4b33",
        //   },
        // },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        // {
        //   skillName: "GraphQL",
        //   fontAwesomeClassname: "simple-icons:graphql",
        //   style: {
        //     color: "#DE33A6",
        //   },
        // },
        // {
        //   skillName: "Android",
        //   fontAwesomeClassname: "simple-icons:android",
        //   style: {
        //     color: "#3DDC84",
        //   },
        // },
        // {
        //   skillName: "Java",
        //   fontAwesomeClassname: "simple-icons:java",
        //   style: {
        //     color: "#f89820",
        //   },
        // },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
        // {
        //   skillName: "Dart",
        //   fontAwesomeClassname: "simple-icons:dart",
        //   style: {
        //     color: "#29B0EE",
        //   },
        // },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#000000",
          },
        },
        // {
        //   skillName: "MySQL",
        //   fontAwesomeClassname: "simple-icons:mysql",
        //   style: {
        //     color: "#4479A1",
        //   },
        // },
        // {
        //   skillName: "jQuery",
        //   fontAwesomeClassname: "simple-icons:jquery",
        //   style: {
        //     color: "#0865A6",
        //   },
        // },
        // {
        //   skillName: "Wordpress",
        //   fontAwesomeClassname: "simple-icons:wordpress",
        //   style: {
        //     color: "#207297",
        //   },
        // },
        // {
        //   skillName: "Apache",
        //   fontAwesomeClassname: "simple-icons:apache",
        //   style: {
        //     color: "#CA1A22",
        //   },
        // },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        // {
        //   skillName: "C",
        //   fontAwesomeClassname: "simple-icons:c",
        //   style: {
        //     color: "#E94E32",
        //   },
        // },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    // {
    //   title: "Cloud Infra-Architecture",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "⚡ Experience working on multiple cloud platforms",
    //     "⚡ Experience hosting and managing websites",
    //     "⚡ Experience with Continuous Integration",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "AWS",
    //       fontAwesomeClassname: "simple-icons:amazonaws",
    //       style: {
    //         color: "#FF9900",
    //       },
    //     },
    //     {
    //       skillName: "Netlify",
    //       fontAwesomeClassname: "simple-icons:netlify",
    //       style: {
    //         color: "#38AFBB",
    //       },
    //     },
    //     {
    //       skillName: "Heroku",
    //       fontAwesomeClassname: "simple-icons:heroku",
    //       style: {
    //         color: "#6863A6",
    //       },
    //     },
    //     {
    //       skillName: "Firebase",
    //       fontAwesomeClassname: "simple-icons:firebase",
    //       style: {
    //         color: "#FFCA28",
    //       },
    //     },
    //     {
    //       skillName: "PostgreSQL",
    //       fontAwesomeClassname: "simple-icons:postgresql",
    //       style: {
    //         color: "#336791",
    //       },
    //     },
    //     {
    //       skillName: "MongoDB",
    //       fontAwesomeClassname: "simple-icons:mongodb",
    //       style: {
    //         color: "#47A248",
    //       },
    //     },
    //     {
    //       skillName: "Docker",
    //       fontAwesomeClassname: "simple-icons:docker",
    //       style: {
    //         color: "#1488C6",
    //       },
    //     },
    //     {
    //       skillName: "GitHub Actions",
    //       fontAwesomeClassname: "simple-icons:githubactions",
    //       style: {
    //         color: "#5b77ef",
    //       },
    //     },
    //   ],
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Delhi University",
      subtitle: "B.Sc(Hons) Computer science",
      logo_path: "DU_Logo.png",
      alt_name: "DU",
      duration: "2019 - 2022",
      descriptions: [
        "⚡  I'm currently Scholar at Code For India Foundation",
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        // "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        // "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      // website_link: "https://www.srmist.edu.in/",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Google Cloud",
    //   subtitle: "Google Cloud Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1r0hYt8Pp0N0u_4Tg-poMF1Qv3LkoKVAP/view",
    //   alt_name: "MongoDB University",
    //   // color_code: "#2AAFED",
    //   color_code: "#2AAFED",
    // },
    // {
    //   title: "Hackathon",
    //   subtitle: "Backyard Hacks 2.0",
    //   logo_path: "hackathon1.png",
    //   // certificate_link:
    //   //   "https://drive.google.com/file/d/1Y-HT1flWDfeyfnfqVr3ubNgGIcnuUEYt/view?usp=sharing",
    //   alt_name: "hackathon",
    //   color_code: "#f47e2c",
    // },
    // {
    //   title: "Hackathon",
    //   subtitle: "HyperHacks",
    //   logo_path: "hackathon2.png",
    //   // certificate_link:
    //   //   "https://drive.google.com/file/d/1Y-HT1flWDfeyfnfqVr3ubNgGIcnuUEYt/view?usp=sharing",
    //   alt_name: "hackathon",
    //   color_code: "#E2405F",
    // },
    {
      title: "M001:MongoDB Basics",
      subtitle: "MongoDB University",
      logo_path: "mongo.png",
      certificate_link:
        "https://drive.google.com/file/d/1BfGFVfuwjm3TnDSiFIbST8A93KqwwY61/view?usp=share_link",
      alt_name: "MongoDB University",
      // color_code: "#F6B808",
      color_code: "#47A048",
    },
    // {
    //   title: "Contributor's Hack",
    //   subtitle: "Hakin Codes",
    //   logo_path: "HakinCodes.jfif",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1xvyy1M05lQN-s2VKw_Qvz6E7rPwrK2qm/view?usp=sharing",
    //   alt_name: "Opensource Event",
    //   color_code: "#fefd7b",
    // },
    // {
    //   title: "MLH Local Hack Day: Build",
    //   subtitle: "Major League Hacking",
    //   logo_path: "mlh-logo.svg",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1ws7g2Oepu76vDFir6SvR_emFAMSkB2ZQ/view?usp=sharing",
    //   alt_name: "Google",
    //   color_code: "#fe0037",
    // },
    // {
    //   title: "Olympiad",
    //   subtitle: "Ramanujan Mathematics Olympiad",
    //   logo_path: "Olympiad.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1SAKHjKisJIY3-FRZQGKLusdsGDusXAjX/view",
    //   alt_name: "Postman",
    //   // color_code: "#f36c3d",
    //   color_code: "#fffbf3",
    // },
    // {
    //   title: "Competitive Programming",
    //   subtitle: "Reply Challenges",
    //   logo_path: "Reply.jfif",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1KamrXJPTrF3zfMuEerbSnFUjOkt-agKT/view",
    //   alt_name: "Reply",
    //   color_code: "#2AAFED",
    // },
    // {
    //   title: "Competitive Programming",
    //   subtitle: "Google Hash Code",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1sD6GS8f2Fh5MHMWlf5DhXoMhu4mykW-f/view",
    //   alt_name: "Reply",
    //   color_code: "#2AAFED",
    // },
    {
      title: "Cyber Security & Ethical Hacking",
      subtitle: "10 Days online Certificate Course",
      logo_path: "CS_EH.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/1_N4uSQjGXfZ1_NPkT2TLHXupjJS0Bv3s/view?usp=share_link",
      alt_name: "SLC-05",
      // color_code: "#f36c3d",
      color_code: "#a60000",
    },
    {
      title: "ORDINATEUR Volunteership",
      subtitle: "Contributed in the Creative & Technical Wings",
      logo_path: "ORDINATEUR.png",
      certificate_link:
        "https://drive.google.com/file/d/1JJFWcxCH7itxhcDKqxMxVdyUn8luigQn/view?usp=share_link",
      alt_name: "Reply",
      color_code: "#88e7ce",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  // CFI Realated
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed  Full Stack Web Development (MERN) BootCamp  from CODE FOR INDIA FOUNDATION.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Coding Bootcamp",
          company: "Code for india foundation",
          company_url: "https://codeforindia.com/",
          logo_path: "CFI_Logo.jpeg",
          duration: "june 2022 - oct 2020",
          location: "on site work",
          description: ` This Bootcamp changed my entire thought process and filtered my skillset.
          Incredible journey at CFI with productive mindset personalities around me boosted my energy levels high.`,
          color: "#0071C5",
        },
        // {
        //   title: "Data Science Intern",
        //   company: "The Sparks Foundation",
        //   company_url: "hhttps://thesparksfoundation.info/",
        //   logo_path: "TSF.png",
        //   duration: "Aug 2020 - Sept 2020",
        //   location: "Remote",
        //   description: `Developed predictive models and deployed it on a full-stack website using Flask. Used Boxplot, Heatmap and Confusion Matrix for data visualization. Deep analysis on the superstore dataset using Bar Plots, Bar Charts, Pair Plots and Joint Plots for specific regions.
        //   `,
        //   // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
        //   color: "#ee3c26",
        // },
      ],
    },
  //   {
  //     title: "Volunteerships",
  //     experiences: [
  //       {
  //         title: "R&D Member",
  //         company: "Webarch Club",
  //         company_url: "https://www.webarchsrm.com/",
  //         logo_path: "Webarch.jfif",
  //         duration: "Mar 2020 - Nov 2020",
  //         location: "SRM IST Kattankulathur",
  //         description:
  //           "Member responsibilities were to help students in project planning, review issues and pull requests, ensure smooth progress and help juniors out in their difficulties.",
  //         color: "#4285F4",
  //       },
  //       {
  //         title: "Campus Leader",
  //         company: "Code For Cause",
  //         company_url: "https://www.codecau.se/",
  //         logo_path: "CFC.jfif",
  //         duration: "Nov 2020 - Present",
  //         location: "SRM IST Kattankulathur",
  //         description:
  //           "Held numerous workshops and distributed learning content for freshers. Contributed to development of the causefolio website displaying the information about the Code for Cause Community.",
  //         color: "#a60000",
  //       },
  //       {
  //         title: "Machine Learning - Research associate",
  //         company: "Next Tech Lab",
  //         company_url: "https://nextech.io/",
  //         logo_path: "NTL.jfif",
  //         duration: "Oct 2020 - Present",
  //         location: "SRM IST Kattankulathur",
  //         description:
  //           "Associate responsibilities were to build fast and efficient machine learning models, have talks on research topics related to computer vision and deep learning. Build team projects and intract with fellow members and ensure smooth progress and help juniors out in their difficulties.",
  //         color: "#62cff0",
  //       },
  //       {
  //         title: "Campus Ambassador",
  //         company: "Bagcampus",
  //         company_url: "https://bagcampus.in/",
  //         logo_path: "Bagcampus.jpg",
  //         duration: "Dec 2020 - May 2021",
  //         location: "Remote",
  //         description:
  //           "Spread Awareness of new Technologies and Companies and new Opportunities to Students and Grow Bagcampus Community.",
  //         color: "#0059c9",
  //       },
  //       {
  //         title: "Volunteer",
  //         company: "Google Crowdsource",
  //         company_url: "https://indiaenvironment.org/",
  //         logo_path: "GCS.jfif",
  //         duration: "Sept 2020 - Present",
  //         location: "Remote",
  //         description:
  //           "As a member of the global Crowdsource community one can gain recognition from other Crowdsourcers and Google.",
  //         color: "#ffffff",
  //       },
  //       {
  //         title: "Student Volunteer",
  //         company: "National Service Scheme",
  //         company_url: "https://indiaenvironment.org/",
  //         logo_path: "NSS.jfif",
  //         duration: "Dec 2019 - May 2020",
  //         location: "SRM IST Kattankulathur",
  //         description:
  //           "Take time out over weekends to join a gang of nation builders, nature enthusiasts to conserve what is left.",
  //         color: "#282b6c",
  //       },
  //     ],
  //   },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools(MERN Stack). My best experience is to create NodeJS Backend Projects,  React Project. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile_photo_2.jpeg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others.",
    link: "https://medium.com/@thiru21ssc",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Mahila Arogya Vikas",
      url: "https://github.com/iamteja9977",
      description:
        `Website for an NGO, where they can manage their
        own content dynamically without any third-party
        CMS(Content Management System).`,
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        }
      ],
    },
    {
      id: "1",
      name: "Tasky Application",
      url: "https://github.com/iamteja9977",
      description:
`A full stack task scheduler and reminder application
that involves the following technologies: nodejs
react express Twilio node mailer.`,
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        }
      ],
    },
    {
      id: "2",
      name: "A Treasure Hunt Game",
      url: "https://treasure-hunt-plum.vercel.app/",
      description:
        "A 10x10 by maze is generated randomly. If you click on 1, you WIN ,If you click on Prime Numbers between 2 to 10, you LOSE.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        
      ],
    },
    {
      id: "3",
      name: "Base64-UI",
      url: "https://base64-ui.vercel.app/",
      description:
        "Encoding is the process of putting a sequence of characters (letters, numbers, punctuation, and certain symbols) into a specialized format for efficient transmission or storage. Decoding is the opposite process.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        }
       
      ],
    },
    {
      id: "4",
      name: "Font Convertor",
      url: "https://font-convertor.vercel.app/",
      description:
        "Converts whatever text we enter into other specified font.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "HTMLDOM",
          iconifyClass: "logos-HTMLDOM",
        }
      ],
    },
    // {
    //   id: "3",
    //   name: "Login Authenticator",
    //   url: "https://github.com/vvHacker007/Login-Authenticator",
    //   description: "Made a template for a Login Authenticator using Flask ",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "vscode-icons:file-type-html",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "vscode-icons:file-type-css",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Flask",
    //       iconifyClass: "cib-flask",
    //     },
    //   ],
    // },
    // {
    //   id: "4",
    //   name: "Calculator",
    //   url: "https://github.com/vvHacker007/Calculator",
    //   description:
    //     "Made a GUI based Calculator. Also made an executable file for the project which can be downloaded and used by anyone on their personal computer.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //   ],
    // },
    // {
    //   id: "5",
    //   name: "Notepad",
    //   url: "https://github.com/vvHacker007/Notepad",
    //   description:
    //     "Made a GUI based Notepad. Also made an executable file for the project which can be downloaded and used by anyone on their personal computer.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //   ],
    // },
    // {
    //   id: "6",
    //   name: "Tetris",
    //   url: "https://github.com/vvHacker007/Tetris",
    //   description: "Made a GUI based arcade game Tetris using pygame.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //   ],
    // },
    // {
    //   id: "7",
    //   name: "Steganography",
    //   url: "https://github.com/vvHacker007/Steganography",
    //   description:
    //     "A CLI tool to conceal messages within a file, text, image, or video.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "OpenCV",
    //       iconifyClass: "logos-opencv",
    //     },
    //   ],
    // },
    // {
    //   id: "8",
    //   name: "Mini Paint",
    //   url: "https://github.com/vvHacker007/Mini-Paint",
    //   description: "GUI based Mini Paint Application.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //   ],
    // },
    // {
    //   id: "9",
    //   name: "Speedtest",
    //   url: "https://github.com/vvHacker007/Speed-test",
    //   description:
    //     "An internet speed testing application which can notify about the download speed, upload speed, and also the reaction time of the connection.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //   ],
    // },
    // {
    //   id: "10",
    //   name: "Cat Classifier",
    //   url: "https://github.com/vvHacker007/Cat-Classifier",
    //   description:
    //     "Binary Cat Classifier made by hard coding Neural Networks in Python without using libraries such as Tensorflow or keras.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Jupyter Notebook",
    //       iconifyClass: "logos-jupyter",
    //     },
    //   ],
    // },
    // {
    //   id: "11",
    //   name: "Snake",
    //   url: "https://github.com/vvHacker007/Snake",
    //   description:
    //     "A snake game which covers all the basic features like score, high score and an automated speed increase simultaneously when the snake eats the food.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //   ],
    // },
    // {
    //   id: "12",
    //   name: "Score Predictor",
    //   url: "https://score-predictor-app.herokuapp.com/",
    //   description:
    //     "Predicts students score based on the number of hours the student puts in it.",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "vscode-icons:file-type-html",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "vscode-icons:file-type-css",
    //     },
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Flask",
    //       iconifyClass: "cib-flask",
    //     },
    //     {
    //       name: "Jupyter Notebook",
    //       iconifyClass: "logos-jupyter",
    //     },
    //   ],
    // },
    // {
    //   id: "13",
    //   name: "Blood Donation Predictor",
    //   url: "https://blood-donation-predictor-app.herokuapp.com/",
    //   description:
    //     "Predicts if one is ready to donate blood based on the user's blood donation history.",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "vscode-icons:file-type-html",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "vscode-icons:file-type-css",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Jupyter Notebook",
    //       iconifyClass: "logos-jupyter",
    //     },
    //   ],
    // },
    // {
    //   id: "14",
    //   name: "Credit-Card Default Predictor",
    //   url: "https://default-predictor-app.herokuapp.com/",
    //   description:
    //     "Predicts whether user's credit card would be defaulted or not based on the user's bank statements and history.",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "vscode-icons:file-type-html",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Jupyter Notebook",
    //       iconifyClass: "logos-jupyter",
    //     },
    //   ],
    // },
    // {
    //   id: "15",
    //   name: "Portfolio Website",
    //   url: "https://vvhacker007.github.io/Portfolio/",
    //   description: "You are stalking it right now 😉",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "vscode-icons:file-type-html",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "vscode-icons:file-type-css",
    //     },
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //   ],
    // },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
