<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Serif:wght@400;700&display=swap" rel="stylesheet">
    <title>TaskMate</title>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/hero.css">
    <link rel="shortcut icon" href="image/logo.jpg"/>
    <script src="js/script.js"></script>
</head>
<body>
    <header>
        <nav>
            <div class="logo">
                <img src="image/logo.jpg" alt="TaskMate Logo">
                <span>TaskMate</span>
            </div>
            
            <div class="hamburger-menu" onclick="hamburger()">
                <span></span>
                <span></span>
                <span></span>
            </div>
        
            <ul id="nav-links">
                <li><a href="main.html">Home</a></li>
                <li><a href="aboutus.html">About us</a></li>
                <li><a href="planner.html">Planner</a></li>
            </ul>
            <div class="auth-buttons">
                <a href="login.html">Log In</a>
                <span>Or</span>
                <a href="signin.html">Sign In</a>
            </div>
        </nav>
        
    </header>
    <main>
        <section class="hero">
            <div class="hero-content">
                <div class="tagline">
                    <h1>We Are Your Ultimate Partner For Productivity</h1>
                </div>
                <p class="p1">TaskMate Helps you find the right balance<br> to accomplish your work. Here, Prioritize<br> tasks, and achieve more, all in one place.</p>
                <button class="cta1"><a href="signin.html">SIGN UP FOR FREE</a></button>
            </div>
            <div class="hero-image">
                <img src="image/calendar1.png" alt="Calendar Icon">
            </div>
        </section>
    </main>
    <footer>
        <div class="social-icons">
            <img src="image/fb.png" alt="facebook image">
            <img src="image/ig.png" alt="instagram image">
            <img src="image/twitter.png" alt="twitter image">
        </div>
        <p>&copy; Copyright 2024. All rights reserved. Created by Kian Dela Cruz</p>
    </footer>
</body>
</html>
