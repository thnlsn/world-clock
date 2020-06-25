https://thnlsn.github.io/world-clock/

Hello! This is my World Clock. It is a live updating analog clock that can update based on the timezone you input. I built it using React and Sass (I started it as a take-home project for the second stage of a job I was interviewing for, but continued it on my own afterwards).

One of the main issues I had to overcome was how to update css pseudoclasses (such as :after and :before) in React. There is no simple way to do it with vanilla React, so I made use of the CSS-in-JS library emotion.js to update the degrees the clock hands were to rotate every second. Beyond that, I used moment.js to pull the timezone data as well as provide a simple way to check the time.
