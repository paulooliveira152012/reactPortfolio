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
    color: "darkblue",
    backgroundColor: "lightBlue",
    justifyContent: "space-between",
    padding: "10px 50px",
  },
  title: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '36px', // Feel free to adjust the size according to your design
    fontWeight: 'bold', // Montserrat looks particularly good in bold for titles
    color: '#333', // This is a standard color, but customize as needed
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
  },
  project: {
    width: "500px",
    margin: "10px",
    height: "auto",
  },
  // header
  list: {
    display: "flex",
    listStyle: "none",
    float:"right"
  },
  a: {
    marginRight: "20px",
  },

  hero: {
    width: "100%",
    height: "200px",
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center"
  },

  heroLine: {
    fontSize: "40px"
  }
};

export default styles;
