import styles from './GlassCard.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import { IconButton } from '@mui/material';

const GlassCard = ({ img, title, des, gitLink, liveLink }) => {
  return (
    <div className={styles.glassCard}>
      <div className={styles.imageContainer}>
        <img src={img} alt={title} />
      </div>
      <h2 className={styles.projectTitle}>{title}</h2>
      <p className= {styles.des}>{des}</p>
      <div className={styles.iconRow}>
        {gitLink && (
          <IconButton
            href={gitLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
        )}
        {liveLink && (
          <IconButton
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Live Site"
          >
            <LanguageIcon fontSize="large" />
          </IconButton>
        )}
      </div>
    </div>
  );
};

export default GlassCard;
