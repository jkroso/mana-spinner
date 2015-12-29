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
    '&:nth-child(2)': {animationDelay:'090ms'},
    '&:nth-child(3)': {animationDelay:'180ms'},
    '&:nth-child(4)': {animationDelay:'270ms'},
    '&:nth-child(5)': {animationDelay:'360ms'},
    '&:nth-child(6)': {animationDelay:'450ms'},
    backgroundColor: 'rgba(0,0,0,0.3)',
    display: 'inline-block',
    borderRadius: '2px',
    height: '100%',
    margin: '2px',
    width: '4px'
  }
})

export default <div className>{new Array(6).fill(<div/>)}</div>
