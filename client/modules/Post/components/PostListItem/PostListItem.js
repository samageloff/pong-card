import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// Import Style
import styles from './PostListItem.css';

function PostListItem(props) {
  return (
    <div className={styles['single-post']}>
      <h3 className={styles['post-title']}>
        <Link to={`/posts/${props.post.slug}-${props.post.cuid}`} >
          {props.post.nickname}
        </Link>
      </h3>
      <p>{props.post.name}</p>
      <p>{props.post.color}</p>
      <p>{props.post.strength}</p>
      <p>{props.post.weakness}</p>
      <p><a href="#" onClick={props.onDelete}>Delete Player</a></p>
      <hr className={styles.divider} />
    </div>
  );
}

PostListItem.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    strength: PropTypes.string.isRequired,
    weakness: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default PostListItem;
