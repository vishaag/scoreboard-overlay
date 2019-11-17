# Scoreboard Overlay

A [demo application](https://scoreboardoverlay.vishaag.now.sh/) to make sports overlay graphics using React and SVG Animations.

## Installation
Clone the repo and then run the following in the root folder.

```
npm install
```
To start the development server 
```
npm run dev
```




## Scoreboard Component

The Scoreboard component is the central feature of this application. It is a stateful react component that acccepts props such as animation, team attributes etc. to show animations.
It accepts the following props (required) in the following format

1. animation
```
[
   { animation: "main", delay: 2 },
   { animation: "teamStat", delay: 2 }
]
```
2. overlayScoreText
```
String text for score. Eg: 0-4
```
3. leftTeamShortText
```
String to appear on left hand side of scoreboard. Eg: GG
```
4. rightTeamShortText
```
String to appear on left hand side of scoreboard. Eg: KK
```
5. overlayLogo
```
A logo in common image formats.
```
6. colors
```
{
  leftTeam: {
    primary: "#db251e",
    secondary: "#df3f3a",
    text: "white"
   },
   rightTeam: {
    primary: "white",
    secondary: "#e6e4e6",
    text: "#164d3a"
   },
   common: "#00003f",
   commonSecondary: "#b1d6e3",
   commonText: "white"
}
```
7. teamAttributes
```
{
  leftTeam: {
    full: "Kingston City"
  },
  rightTeam: {
    full: "Green Gully"
  }
}
```

## Statefulness of Scoreboard

The component changes based on changes in the animation props. There are a total of 3 states - hidden, main and main+Stat.
When the application is opened, it is initially in the hidden state and then immediately goes into the main+Stat state showcasing
the animation.
The state can then be changed between main and main+Stat using the respective buttons.

clicking on main will change  the animation props as : 

```[{ animation: "main", delay: 0 }]```


clicking on main+Stat will change  the animation props as : 
```
[
  { animation: "teamStat", delay: 0 }
]
```





## Tech Stack
React, Greensock (for SVG animations), live site hosted on Zeit Now.

