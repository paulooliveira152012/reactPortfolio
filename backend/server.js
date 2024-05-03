// const express = require('express');
// const path = require('path');
// const app = express();

// // Serve static files from the build directory
// app.use(express.static(path.join(__dirname, '../build')));

// // Handle all requests by serving index.html, which lets React Router do the routing
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../build', 'index.html'));
// });

// const PORT = process.env.PORT || 500;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });