import {style,keyframe} from 'easy-style'
import {JSX} from 'mana'

const className = style({
  position: 'absolute',
  height: '30px',
  top: '50%',
  left: '50%',
  marginLeft: '-20px',
  marginTop: '-15px',
  div: {
    animationName: keyframe({
      from:  {transform: 'scaleY(1.0)'},
      '50%': {transform: 'scaleY(0.5)'},
      to:    {transform: 'scaleY(1.0)'}
    }),
    animation: '1s infinite cubic-bezier(.2,.68,.18,1.08)',
    backgroundColor: 'rgba(0,0,0,0.3)',
    display: 'inline-block',
    borderRadius: '2px',
    height: '100%',
    margin: '2px',
    width: '4px'
  }
})

export default <div className>
  <div style={{animationDelay:'000ms'}}/>
  <div style={{animationDelay:'090ms'}}/>
  <div style={{animationDelay:'180ms'}}/>
  <div style={{animationDelay:'270ms'}}/>
  <div style={{animationDelay:'360ms'}}/>
</div>
