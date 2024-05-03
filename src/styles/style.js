import myPicture from "../images/mypicture.jpeg";


const styles = {
  container: {
    padding: "20px",
    margin: "0 auto",
    maxWidth: "600px",
    backgroundColor: "#f4f4f4",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  header: {
    display: "flex",
    alignItems: "center",
    fontSize: "24px",
    backgroundColor: "#222831",
    justifyContent: "space-between",
    padding: "10px 50px",
  },
  title: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '36px', // Feel free to adjust the size according to your design
    fontWeight: 'bold', // Montserrat looks particularly good in bold for titles
    color: '#EEEEEE', // This is a standard color, but customize as needed
    textAlign: 'center', // Centers the title, if that fits your layout
    padding: '20px 0' // Gives some spacing around the title
  },

  paragraph: {
    fontSize: "16px",
    color: "#333",
  },
  projectsContainer: {
    // make horizontal flow
    display: "flex",
    // make exceeding content on the x axis scrollable
    overflowX: "auto",
    padding: "50px",
    backgroundColor: "#222831",
    color: "white",
  },

  project: {
    width: "500px",
    margin: "10px 20px",
    // padding: "20px",
    height: "auto",
    backgroundColor: "red",
  },

  projectParagraph: {
    margin: "20px",
    // color: "#EEEEEE",
    textAlign: "justify"
  },

  // header
  list: {
    display: "flex",
    listStyle: "none",
    float:"right"
  },

  a: {
    marginRight: "20px",
    color: "white",
    textDecoration: "none",
  },

  hero: {
    width: "100%",
    height: "500px",
    display: "flex",
    // backgroundColor: "red",
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    // textAlign: "center",
    backgroundImage: `url(${myPicture})`,
    backgroundSize: "cover",
    backgroundPosition: "center -0%",
    flex: 1,  
  },

  left: {
    flex: 1,
    // backgroundColor: "green",
    margin: "20px",
    display: "flex",
    alignItems: "center", // This centers the content horizontally in the flex container
    justifyContent: "center", // This centers the content vertically in the flex container
    textAlign: "center",
    color: "#EEEEEE",
    textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" // Adds an outline
},


  right: {
    flex: 1,
  },

  heroLine: {
    fontSize: "40px",
    textAlign: "left",
    width: "50%",
  },

  pictureContainer: {
    flex: 1,
    position: "absolute"
    
  },

  myPicture: {
    height: "auto",
    position: "relative"
  },

  writtenContentContainer: {
    display: "flex"
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
    color: "#222831"
  },

//   footer
footer: {
    height: "300px",
    backgroundColor: "#222831",
    color: "#EEEEEE",
    display: "flex",
},

footerColumn: {
    flex:1,
    // backgroundColor: "blue",
    margin: "10px",
    textAlign: "center"
},

footerList: {
    listStyle: "none"
},

h2: {
    marginBottom: "20px"
}

};

export default styles;
