import React, { useEffect } from "react";


const Badge = () => {
  // Inject the script to load the badge
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures this runs only once

  const badgeStyle = {
    // Example of inline styles
    // backgroundColor: "lightblue",
    // border: "2px solid blue",
    // padding: "10px",
    borderRadius: "5px",
    display: "flex",            // Use Flexbox
    justifyContent: "center",   // Center horizontally
    alignItems: "center",       // Center vertically
    height: "100%",
    // You can also use styles imported from CSS files
  };

  // Embed the HTML content with `dangerouslySetInnerHTML`
  return (
    <div style={badgeStyle}
      dangerouslySetInnerHTML={{
        __html: `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="ab99d546-3a79-40e0-95ca-29b3b6479d79" data-share-badge-host="https://www.credly.com"></div>`,
      }}
    />
  );
};

export default Badge;
