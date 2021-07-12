import './styles/index.scss';
import NavBar from './scripts/navBar';
import { getAudio, printAudio } from './scripts/allVoices';

getAudio().then(result => printAudio(result));
new NavBar(navBar);