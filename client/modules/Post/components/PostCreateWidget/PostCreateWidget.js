import React, { Component, PropTypes } from 'react';

// Import Style
import styles from './PostCreateWidget.css';

export class PostCreateWidget extends Component {
  addPost = () => {
    const nameRef = this.refs.name;
    const nickNameRef = this.refs.nickname;
    const colorRef = this.refs.color;
    const strengthRef = this.refs.strength;
    const weaknessRef = this.refs.weakness;
    if (nameRef.value && nickNameRef.value && colorRef.value && strengthRef.value && weaknessRef.value) {
      this.props.addPost(nameRef.value, nickNameRef.value, colorRef.value, strengthRef.value, weaknessRef.value);
      nameRef.value = nickNameRef.value = colorRef.value = strengthRef.value = weaknessRef.value = '';
    }
  };

  render() {
    const cls = `${styles.form} ${(this.props.showAddPost ? styles.appear : '')}`;
    return (
      <div className={cls}>
        <div className={styles['form-content']}>
          <h2 className={styles['form-title']}>New Player</h2>
          <input placeholder="Birth name" className={styles['form-field']} ref="name" />
          <input placeholder="Nickname" className={styles['form-field']} ref="nickname" />
          <input placeholder="Color" className={styles['form-field']} ref="color" />
          <input placeholder="Strength" className={styles['form-field']} ref="strength" />
          <input placeholder="Weakness" className={styles['form-field']} ref="weakness" />
          <a className={styles['post-submit-button']} href="#" onClick={this.addPost}>Submit</a>
        </div>
      </div>
    );
  }
}

PostCreateWidget.propTypes = {
  addPost: PropTypes.func.isRequired,
  showAddPost: PropTypes.bool.isRequired,
};

export default PostCreateWidget;
