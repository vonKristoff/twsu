# TWSU Code Test

Candidate: **JC Nicolas**

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

---

### Installation

```
npm install // usual suspects
```

* `npm start` : Run Development server 
* `npm run react:server ` : Boot server to run app

Server: http://localhost:3000

---

### Mood Detector App

The view is split into two halves of input and output.

The user types into the input field and the score is evaluated as a percentage range from -100% to 100%, based on word matches to the database. The matched words are pinned and the mood is derived from the score that updates the child props to perform an animation in the output window.

#### App Outline

```
<App>
	<input-view>
		<Score>				// generated by matches
		<TextField>			// user input
		<WordList>			// visible collection of matched words
	<output-view>
		<MoodComponent>		// visual representation of evaluated mood
```

The main App handles state, and passes changes as props to children. The MoodComponent is also a class to enable onChange updates, and trigger the usage of `TweenLite` to animate its child SVG component.

The animations are very simple. However as not a React user, I had to spend time working out how to animate something over a frame duration, rather than just simply plugging in an animation component. This lead to me to gain a better understanding of how React works, especially in forseeing the relevance of upcoming Hooks, as well as making a good use between smart and dumb components.

I used Stylus to build up base CSS layouts, and handle basic responsiveness to fit mobile viewports.

There's definitely some React practices I could improve on. But I was satisfied with my results as the app logic felt cohesive to the way React I think is meant to behave. 



Thanks for looking!

