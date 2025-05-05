// Import sound effects
import sfx1 from '../assets/sounds/sfx1 (1).mp3'
import sfx2 from '../assets/sounds/sfx1 (2).mp3'
import sfx3 from '../assets/sounds/sfx1 (3).mp3'
import sentSound from '../assets/sounds/sent.mp3'

// Create audio elements
const sounds = [
  new Audio(sfx1),
  new Audio(sfx2),
  new Audio(sfx3)
]

const sentAudio = new Audio(sentSound)
sentAudio.volume = 0.5

// Preload sounds
sounds.forEach(sound => {
  sound.load()
  sound.volume = 0.5 // Set volume to 50%
})
sentAudio.load()

// Function to play random sound
export const playRandomSound = () => {
  try {
    // Get random index
    const randomIndex = Math.floor(Math.random() * sounds.length)
    
    // Create a new Audio instance for each play
    const soundToPlay = new Audio(sounds[randomIndex].src)
    soundToPlay.volume = 0.5
    
    // Play the sound
    soundToPlay.play().catch(error => {
      console.error('Error playing sound:', error)
    })
  } catch (error) {
    console.error('Error in playRandomSound:', error)
  }
}

// Function to play sent sound
export const playSentSound = () => {
  try {
    // Create a new Audio instance for each play
    const soundToPlay = new Audio(sentAudio.src)
    soundToPlay.volume = 0.5
    
    // Play the sound
    soundToPlay.play().catch(error => {
      console.error('Error playing sent sound:', error)
    })
  } catch (error) {
    console.error('Error in playSentSound:', error)
  }
} 