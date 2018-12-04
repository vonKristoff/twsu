// Moods data 
// Describes the moods to be drawn as SVG
export default {
    smile: {
        ease: "Bounce.easeOut",
        speed: .4,
        eyes: { 
            left: { cx:35, cy:85, rx:8, ry:15, className: "has-smile--left" },
            right: { cx:165, cy:85, rx:8, ry:15, className: "has-smile--right" }
        },
        path : {
            startPoint: [25,125],
            controlPoint: [100,200],
            endPoint: [175, 125]
        }
    },
    smirk: {
        ease: "Bounce.easeOut",
        speed: .4,
        eyes: { 
            left: { cx:25, cy:100, rx:10, ry:15, className: "has-smirk--left" },
            right: { cx:175, cy:100, rx:10, ry:12, className: "has-smirk--right" }
        },
        path : {
            startPoint: [25,175],
            controlPoint: [100,200],
            endPoint: [175, 125]
        }
    },
    neutral: {
        ease: "Bounce.easeOut",
        speed: .4,
        eyes: { 
            left: { cx:30, cy:100, rx:5, ry:10, className: "has-neutral--left" },
            right: { cx:170, cy:100, rx:5, ry:10, className: "has-neutral--right" }
        },
        path : {
            startPoint: [25,160],
            controlPoint: [100,140],
            endPoint: [175, 140]
        }        
    },
    frown: {
        ease: "Bounce.easeOut",
        speed: .4,
        eyes: { 
            left: { cx:50, cy:85, rx:10, ry:8, className: "has-frown--left" },
            right: { cx:150, cy:85, rx:10, ry:12, className: "has-frown--right" }
        },
        path : {
            startPoint: [25,125],
            controlPoint: [100,100],
            endPoint: [175, 175]
        }
    },
    hmph: {
        ease: "Bounce.easeOut",
        speed: .4,
        eyes: { 
            left: { cx:50, cy:85, rx:5, ry:8, className: "has-hmph--left" },
            right: { cx:150, cy:85, rx:5, ry:8, className: "has-hmph--right" }
        },
        path : {
            startPoint: [25,175],
            controlPoint: [100,100],
            endPoint: [175, 175]
        }
    }
}