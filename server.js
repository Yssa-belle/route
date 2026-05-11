const express = require('express');
const app = express();

// =========================
// STEP 4: Middleware (Logger)
// =========================
app.use((req, res, next) => {
    console.log(`[LOG] ${req.method} ${req.url}`);
    next(); // pass control to next route
});

// =========================
// STEP 2: Basic Routes
// =========================

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to Route Handling!');
});

// About route (HTML response)
app.get('/about', (req, res) => {
    res.send('<h1>About Us</h1><p>This is the About page.</p>');
});

// =========================
// STEP 3: Dynamic Routing
// =========================

// Route Params
app.get('/products/:id', (req, res) => {
    const productId = req.params.id;
    res.send(`Viewing Product ID: ${productId}`);
});

// Query String Route
app.get('/search', (req, res) => {
    const query = req.query.q;

    if (!query) {
        return res.send("Please provide a search term using ?q=");
    }

    res.send(`Searching for: ${query}`);
});

// =========================
// STEP 5: 404 Handler
// =========================
app.use((req, res) => {
    res.status(404).send('Page Not Found');
});

// =========================
// START SERVER
// =========================
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});