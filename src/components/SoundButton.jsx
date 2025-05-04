import { playRandomSound } from '../utils/soundEffects'

const SoundButton = ({ children, className, as, ...props }) => {
  const handleClick = (e) => {
    // Prevent default only if it's an anchor tag
    if (as === 'a' && !props.href?.startsWith('#')) {
      e.preventDefault()
    }
    
    // Play sound
    playRandomSound()
    
    // Call original onClick if provided
    if (props.onClick) {
      props.onClick(e)
    }
  }

  const Component = as || 'button'

  return (
    <Component 
      className={className} 
      onClick={handleClick}
      {...props}
    >
      {children}
    </Component>
  )
}

export default SoundButton 