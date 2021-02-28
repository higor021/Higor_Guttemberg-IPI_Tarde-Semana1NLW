import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContexts';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <a href="https://imgbox.com/m1YernUi" target="_blank"><img src="https://thumbs2.imgbox.com/5f/ab/m1YernUi_t.jpg" alt="image host" /></a>
      <div>
        <strong>Higor Guttemberg</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
