# LMS Frontend

### setup instruction

```
1. clone the project
git clone https://github.com/Advirocks82/lms-frontend-hn.git
```

2. move into the directory
```
cd lms-frontend-hn

```
3 install dependencies

```
npm i

```
4 run the server

```
npm  run dev

```

### setup instructions for tailwind css

[Tail wind official instruction doc](https://tailwindcss.com/docs/installation)

1. Install Tailwind css

```
npm install -D tailwindcss

```
2. create tailwind config file

```
npx tailwindcss init

```
3. Add file extentions to tailwind config file in the contents property

```
"./src/**/*.{html,js,jsx,ts,tsx}"

```

4. add the tailwing directive at the top of the index.css file
```
@tailwind base;
@tailwind components;
@tailwind utilities;

```

5. Add the following details in the plugin property of tainwind config

```
    [require("daisyui"), require("@tailwindcss/line-clamp")]

```
6. Adding plugins and dependencies

```
npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp

```