import React, { Component } from 'react'
import { TweenLite } from 'gsap'
import Smile from './svg-smile-component'
import Moods from '../data/moods'
// Perform mood update and animate SVG component props
// Moods describes the animation targets
class Mood extends Component {
    constructor({ mood }) {
        super()
        this.state = { 
            anim: { 
                START_X: Moods[mood].path.startPoint[0], START_Y: Moods[mood].path.startPoint[1],
                CONTROL_X: Moods[mood].path.controlPoint[0], CONTROL_Y: Moods[mood].path.controlPoint[1], 
                END_X: Moods[mood].path.endPoint[0], END_Y: Moods[mood].path.endPoint[1]
            }, 
            model: null
        }
    }
    componentDidMount = () => {
        // set initial draw state
        this.setState({ model: Moods[this.props.mood] }, () => console.log(this.state))
    }
    componentWillReceiveProps = nextProps => {
        // on change animate props
        if(this.props.mood !== nextProps.mood) {
            let previous = this.props.mood
            this.setState({ model: Moods[nextProps.mood] }, 
                () => {
                    console.log(this.state)
                    Animation(this.state.model, Moods[previous], val => this.setState({ anim: val }, () => console.log(this.state.anim.y)))
                }
            )
        }
    }
    render() {
        return (
            <div className="mood-component">   
                {this.state.model && <Smile model={this.state.model} svg={this.state.anim}/>}
            </div>
        );
    }
}
export default Mood
// use TweenLite to animate SVG control points 
function Animation(to, from, update) {
    let anim = { 
        START_X: from.path.startPoint[0], START_Y: from.path.startPoint[1], 
        CONTROL_X: from.path.controlPoint[0], CONTROL_Y: from.path.controlPoint[1], 
        END_X: from.path.endPoint[0], END_Y: from.path.endPoint[1] 
    }
    new TweenLite(anim, to.speed, { 
        START_X: to.path.startPoint[0], START_Y: to.path.startPoint[1], 
        CONTROL_X: to.path.controlPoint[0], CONTROL_Y: to.path.controlPoint[1],
        END_X: to.path.endPoint[0], END_Y: to.path.endPoint[1],
        ease: to.ease,
        onUpdate() { 
            update(anim) 
        }
    })
}