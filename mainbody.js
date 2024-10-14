<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic Website</title>
    <style>
        /* CSS for styling */
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        header {
            background-color: #4CAF50;
            color: white;
            padding: 10px 0;
            width: 100%;
            text-align: center;
        }
        section {
            padding: 20px;
            width: 80%;
            background-color: white;
            margin: 20px 0;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        footer {
            padding: 10px;
            background-color: #333;
            color: white;
            width: 100%;
            text-align: center;
        }
    </style>
</head>
<body>

    <!-- Main Body -->
    <header>
        <h1>Welcome to My Website</h1>
    </header>

    <section id="main-content">
        <h2>About Us</h2>
        <p>On this website we present the latest and most important news in the world of football </p>
        <button id="changeTextBtn">Click me to change text</button>
    </section>

    <footer>
        <p>&copy; 2024 My Website</p>
    </footer>

    <!-- JavaScript for interaction -->
    <script>
        document.getElementById('changeTextBtn').addEventListener('click', function() {
            document.querySelector('#main-content p').innerText = 'You just changed the content using JavaScript!';
        });
    </script>

</body>
</html>
