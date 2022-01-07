import { Link } from 'react-router-dom'
import styles from './Home.css'

export default function Home () {
  return (
      <div className={styles.homeContainer}>
        <h1>Welcome to the greatly anticipated official Employee Directory.</h1>
        <p>Skate ipsum dolor sit amet, flail gnar bucket cab flip nosegrind Ron Chapman feeble disaster risers. Fakie body varial nosegrind slob air no comply Fiesta Mall camel back pressure flip. Hospital flip stalefish backside pogo wall ride snake transfer. Half-cab roll-in fakie alley oop Colby Carter kick-nose face plant tuna-flip. Helipop Alan Gelfand bone air switch late 270 Christ air bank. Disaster salad grind method air nollie bail Justin Regan baseplate durometer. Powerslide regular footed Alan Gelfand skate or die 270 hanger betty steps. Hand rail casper slide invert snake rip grip death box dude. Gap bluntslide kick-nose Tommy Guerrero gnar bucket drop in nose bump roll-in. Skater judo air risers nose bump rail goofy footed kickflip. Impossible 180 noseblunt slide ollie pool face plant invert. Nosepicker alley oop hip sketchy pogo coping rad. </p>
        <p><Link to='/login'>Login</Link></p>
        <p><Link to='/register'>Create Profile</Link></p>
      </div>
    )
  }
