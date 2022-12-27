import CardItem from 'components/CardItem/CardItem';
import { Component } from 'react';
import css from 'components/CardList/CardList.module.css';
import userDB from '../../data/user.json';

class CardList extends Component {
  state = {
    users: userDB.map(user => {
      return { ...user, isFollowing: false };
    }),
  };

  componentDidMount() {
    const users = localStorage.getItem('users');
    const parsedUsers = JSON.parse(users);

    if (parsedUsers) {
      this.setState({ users: parsedUsers });
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.users !== prevState.users) {
      localStorage.setItem('users', JSON.stringify(this.state.users));
    }
  }

  onStateChanger = id => {
    this.setState(prevState => ({
      users: prevState.users.map(user => {
        if (user.id === id) {
          return {
            ...user,
            isFollowing: !user.isFollowing,
            followers: user.isFollowing
              ? user.followers - 1
              : user.followers + 1,
          };
        }
        return user;
      }),
    }));
  };

  render() {
    return (
      <ul className={css.listContainer}>
        {this.state.users.map(el => {
          return (
            <CardItem
              userItem={el}
              key={el.id}
              onStateChanger={this.onStateChanger}
            />
          );
        })}
      </ul>
    );
  }
}
export default CardList;
