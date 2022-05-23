import React from 'react';
import styles from './footer.module.css';
import {
  Avatar,
  Button,
  Chip,
  Divider,
  IconButton,
  Tooltip,
  Typography,
  useMediaQuery,
} from '@mui/material';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.courseInfo}>
        <Tooltip title="Learn more">
          <Button href={'https://rs.school/react/'} color="inherit">
            <img src={'rs_school_js.svg'} alt={'rsschool link'} />
          </Button>
        </Tooltip>
      </div>
      <Divider orientation="vertical" variant="middle" flexItem className={styles.yearVertical}>
        <Tooltip title="Creating date">
          <Chip label="2022" />
        </Tooltip>
      </Divider>
      <Divider flexItem className={styles.yearHorizontal}>
        <Tooltip title="Creating date">
          <Chip label="2022" />
        </Tooltip>
      </Divider>
      <div className={styles.ghRepositories}>
        <div className={styles.ghRepoText}>
          <Typography>developers repositories:</Typography>
        </div>
        <div>
          <Tooltip title="Naikita Korevo" arrow>
            <IconButton href={'https://github.com/NikitaKorevo/'}>
              <Avatar alt="Naikita Korevo" className={styles.avatar_1}>
                NK
              </Avatar>
            </IconButton>
          </Tooltip>
        </div>
        <div>
          <Tooltip title="Alex Mz" arrow>
            <IconButton href={'https://github.com/NikitaKorevo/'}>
              <Avatar alt="Alex Mz" className={styles.avatar_2}>
                AM
              </Avatar>
            </IconButton>
          </Tooltip>
        </div>
        <div>
          <Tooltip title="Alexey Gerasimchuk" arrow>
            <IconButton href={'https://github.com/LehaGer'}>
              <Avatar alt="Alexey Gerasimchuk" className={styles.avatar_3}>
                AG
              </Avatar>
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
