// import PropTypes from 'prop-types';
import css from 'components/CardItem/CardItem.module.css';
import hero from './hero.png';
import logo from './logo.png';
import { Component } from 'react';

class CardItem extends Component {
  followerStateChanger = id => {
    this.props.onStateChanger(id);
  };

  render() {
    const { id, user, tweets, followers, avatar, isFollowing } =
      this.props.userItem;

    let formatedFollowers = '';
    if (followers > 1000) {
      let beggining = Math.floor(followers / 1000);
      let ending = String(followers);
      formatedFollowers = `${String(beggining)},${ending.slice(-3)}`;
    } else {
      formatedFollowers = followers;
    }

    return (
      <li className={css.profile}>
        <img src={logo} alt="GoIT" className={css.logoWrapper} />
        <img src={hero} alt="hero" className={css.hero} />

        <div className={css.divider}></div>

        <div className={css.elipseBox}>
          <div className={css.elipse}>
            <img className={css.userImage} src={avatar} alt={user} />
          </div>
        </div>

        <div className={css.bottomContainer}>
          <p className={css.textParagraph}>{tweets} tweets</p>
          <p className={css.textParagraph}>{formatedFollowers} Followers</p>
          <button
            type="button"
            className={isFollowing ? css.followBtnActive : css.followBtn}
            onClick={() => this.followerStateChanger(id)}
          >
            {isFollowing ? <>Following</> : <>Follow</>}
          </button>
        </div>
      </li>
    );
  }
}

export default CardItem;
