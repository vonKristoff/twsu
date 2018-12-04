import React, { Component } from 'react';
import Axios from 'axios'
import TextField from './components/text-field'
import WordsList from './components/words-list'
import MoodComponent from './components/mood-component'
const PAYLOAD = "http://localhost:3000/database.json"

// lookup table to evaluate moods
const scoreLookup = score => {
    return score < -0.7 ? "hmph"
    : score === 0 ? "neutral"
    : score < 0 && score >= -0.7 ? "frown"    
    : score >= 0.5 && score < 0.67 ? "smirk"
    : "smile"
}

class App extends Component {
    constructor() {
        super()
        this.state = { 
            loaded: false,              // used to render components once GET is complete
            data: [],                   // dataset of words
            input: [],                  // single words evaluated from the users text input 
            matches: [],                // matched words found between state.input & state.data
            score: 0,                   // mood score as percentage
            currentMood: "neutral"      // evaluate mood as a string which can be used to get the animation data from ./moods.js
        }    
    }
    componentDidMount() {
        // Get database of words from server
        Axios.get(PAYLOAD).then(response => {
            this.setState({ data: response.data }, () => this.setState({ loaded: true }))
        }).catch(console.log)
    }
    // check if a new word from input field is added to the input word array
    // => check if any new word matches the data
    // => perform a score check and update state 
    update = feed => {
        let hasNewWord = feed.length >= this.state.input.length && feed[feed.length - 1] === ""
        if(hasNewWord) this.setState({ input: feed.slice(0, -1) }, () => this.performMatches(() => this.evaluateScore()))
    }
    // evaluate if words in input array match either happy / sad datasets
    // setState && callback
    performMatches = next => {
        let matches = []
        this.state.input.forEach(word => {
            let match = this.state.data.happy.includes(word) ? { type: "happy", value: word }
            : this.state.data.sad.includes(word) ? { type: "sad", value: word }
            : false
            if(match) matches.push(match)
        })
        this.setState({ matches }, () => next())
    }
    evaluateScore = () => {
        let happy = this.state.matches.filter(match => match.type === "happy").length
        let sad = this.state.matches.filter(match => match.type === "sad").length        
        this.calculateScorePercentage(happy, sad)
    }
    // calculate score as percentage
    // => based on score set the mood state to update the MoodComponent
    calculateScorePercentage = (happy, sad) => {
        let total = happy + sad
        happy = happy / total
        sad = sad / total

        let score = happy > sad ? happy
        : sad > happy ? -sad
        : 0
        this.setState({ score }, () => this.setMood(scoreLookup(this.state.score)))
    }
    setMood = mood => {
        this.setState({ currentMood: mood })
    }
    render() {
        return (
            <div className="App">
                <div className="input-panel">                    
                    {this.state.matches.length > 0 && <WordsList collection={this.state.matches} />}
                    {this.state.loaded && <TextField onChange={this.update} />}
                    <div className="score-card">{`mood detector : ${Math.round(this.state.score * 100)}%`}</div>
                </div>
                <div className="output-panel">
                    <MoodComponent mood={this.state.currentMood} />
                </div>
            </div>
        );
    }
}

export default App;
