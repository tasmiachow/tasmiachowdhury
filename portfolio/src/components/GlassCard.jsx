import styles from './GlassCard.module.css';
import IconButton from '@mui/material/IconButton'
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';


function GlassCard(props){

    return(
        <div className={styles.glassContainer}>
            <img src={`${props.img}`} />
            <h1>{props.title}</h1>
            <p>{props.des}</p>
        <IconButton  href={`${props.gitLink}`} target="_blank" rel="noopener">
            <GitHubIcon></GitHubIcon>

        </IconButton>
         
        {props.liveLink && (
            <IconButton href={props.liveLink} target="_blank" rel="noopener">
            <LanguageIcon />
            </IconButton>
        )}

        </div>
        
    );
}

export default GlassCard;