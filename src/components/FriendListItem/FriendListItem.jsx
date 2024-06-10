import PropTypes from 'prop-types';
import noAvatar from '../../images/anime-cartoon-boy-people-png-design-5691442.svg';
import styles from '../FriendListItem/FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={styles.item}>
    <span className={isOnline ? styles.online : styles.offline}></span>
    <img className={styles.avatar} src={avatar} alt={name} width="60" />
    <p className={styles.name}>{name}</p>
  </li>
);

FriendListItem.defaultProps = {
  avatar: noAvatar,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
