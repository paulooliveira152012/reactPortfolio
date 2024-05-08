// style.js
import myPicture from "../images/mypicture.jpeg";
import myPicture1 from "../images/mypicture1.jpeg";

// font create and export font from google
export const globalStyle = {
  fontFamily: "'Inconsolata', monospace",
};

export const textStyle = {
  fontFamily: "'Inconsolata', monospace",
  fontSize: "16px", // Example font size
  color: "#333", // Example color
};

const styles = {
  body: {
    fontFamily: "'Inconsolata', monospace", // Use Inconsolata for the title
    color: "red"
  },

  // container: {
  //   padding: "20px",
  //   margin: "0 auto",
  //   maxWidth: "600px",
  //   backgroundColor: "#f4f4f4",
  //   borderRadius: "8px",
  //   boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  // },

  // header: {
  //   display: "flex",
  //   alignItems: "center",
  //   fontSize: "24px",
  //   backgroundColor: "#222831",
  //   justifyContent: "space-between",
  //   padding: "10px 50px",
  // },

  // title: {
  //   fontFamily: "'Inconsolata', monospace", // Use Inconsolata for the title
  //   fontSize: "36px", // Feel free to adjust the size according to your design
  //   fontWeight: "bold", // Montserrat looks particularly good in bold for titles
  //   color: "#EEEEEE", // This is a standard color, but customize as needed
  //   textAlign: "center", // Centers the title, if that fits your layout
  //   padding: "20px 0", // Gives some spacing around the title
  // },

  paragraph: {
    fontSize: "16px",
    color: "#333",
  },

  projectsContainer: {
    // make horizontal flow
    display: "flex",
    // make exceeding content on the x axis scrollable
    overflowX: "auto",
    // padding: "50px",
    // backgroundColor: "#FEFAF6",
    // color: "white",
    height: "auto",
  },

  projectContainer: {
    // backgroundColor: "#222831",
    width: "100%",
    borderRadius: 10,
    margin: 20,
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center"
    paddingTop: "2%",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Adds a subtle shadow for depth
  },


  projectImg: {
    width: "500px",
    margin: "10px 20px",
    // padding: "20px",
    // height: "auto",
    // backgroundColor: "red",
    height: "auto",
    borderRadius: 10
  },

  projectParagraph: {
    margin: "20px",
    // color: "#EEEEEE",
    textAlign: "justify",
  },

  // header
  list: {
    display: "flex",
    listStyle: "none",
    float: "right",
  },

  a: {
    marginRight: "20px",
    color: "white",
    textDecoration: "none",
  },

  aProjects: {
    // marginRight: "20px",
    // color: "white",
    textDecoration: "none",
  },

  hero: {
    width: "100%",
    height: "100vh",
    display: "flex",
    // backgroundColor: "red",
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    // textAlign: "center",
    backgroundImage: `url(${myPicture})`,
    backgroundSize: "cover",
    // backgroundPosition: "center -0%",
    backgroundPosition: "80% center", // Adjust the horizontal position to push to the right
    flex: 1,
  },

  left: {
    flex: 1,
    // backgroundColor: "green",
  },



  imageContainer: {
    height: "300px",
    margin: "20px",
    // backgroundColor: "white",
  },

  imageContainerBoth: {
    height: "300px",
    margin: "20px",
    // backgroundColor: "white",
    display: "flex",
    justifyContent: "space-evenly"

  },

  myPicture1: {
    backgroundImage: `url(${myPicture1})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    // width: "100%",
    height: "100%",
    width: "50%",
    // margin: "auto"
    marginTop: "20px"
  },

  textContainer: {
    // height: "300px",
    margin: "20px",
    // backgroundColor: "white",
    fontSize: "15px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "space-evenly",
  },

  textLeft: {
    margin: "20px",
    display: "flex",
    alignItems: "center", // This centers the content horizontally in the flex container
    justifyContent: "center", // This centers the content vertically in the flex container
    textAlign: "center",
    color: "#EEEEEE",
    textShadow:
      "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000", // Adds an outline
  },

  right: {
    flex: 1,
  },

  heroContainer: {
    fontSize: "40px",
    textAlign: "left",
    // width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
  },

  pictureContainer: {
    flex: 1,
    position: "absolute",
  },

  myPicture: {
    height: "auto",
    position: "relative",
  },

  main: {
    // display: "flex"
  },

  horizontal: {
    display: "flex",
    // backgroundColor: "red"
  },

  //   story session
  writtenContent: {
    textAlign: "justify",
    // margin: "20px 10px",
    padding: "20px",
    // backgroundColor: "#222831",
    // borderRadius: 20,
    fontSize: 20,
    flex: 1,
    color: "#222831",
    display: "flex",
  },

  //   footer
  footer: {
    height: "300px",
    backgroundColor: "#222831",
    color: "#EEEEEE",
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  footerContainer: {    
    // backgroundColor: "red",
    margin: "auto"
  },

  footerSocialContainer: {
    backgroundColor: "green",
    width: "auto"
  },

  footerSocial: {
    display: "flex",
    margin: "auto",
  },

  footerList: {
    listStyle: "none",
  },

  h2: {
    margin: "20px ",
  },

  imageContainer: {
    // backgroundImage: `url(${myPicture})`,
    // width: "500px",
    // height: "300px",
    // backgroundSize: "cover",
  }
  
};

export default styles;
