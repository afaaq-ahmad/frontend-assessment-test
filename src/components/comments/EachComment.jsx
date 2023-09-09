import { useState } from "react";
import styles from "./commentStyle.module.css";
import user1 from "../../images/user1.png";
import user2 from "../../images/user2.png";
import user3 from "../../images/user3.png";
import user4 from "../../images/user4.png";

import createStyles from "./createCommentStyle.module.css";

function EachComment({ props }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [replayable, setReplyable] = useState(false);
  const [deletable, setDeletable] = useState(true);

  const likeCounter = () => {
    if (likeCount === 1) {
      setLikeCount(0);
    } else {
      setLikeCount(1);
    }
  };

  const deleteComment = () => {
    setDeletable(false);
  };

  return (
    <>
      <div className={styles.commentContainer}>
        <div className={styles.profileImage}>
          {props?.id === 1 && <img src={user1} alt="profile pic" />}
          {props?.id === 2 && <img src={user2} alt="profile pic" />}
          {props?.id === 3 && <img src={user3} alt="profile pic" />}
          {props?.id === 4 && <img src={user4} alt="profile pic" />}
        </div>
        <div className={styles.commentContent}>
          <div className={styles.userName}>{props?.userName}</div>
          <div className={styles.commentBody}>{props?.commentDescription}</div>
          <div className={styles.like_reply_container}>
            {!!liked && (
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  setLiked(!liked);
                  likeCounter();
                }}
              >
                <path
                  d="M14.447 0.957269C12.7345 -0.502078 10.1877 -0.239583 8.61584 1.38226L8.00023 2.01662L7.38462 1.38226C5.8159 -0.239583 3.26595 -0.502078 1.55348 0.957269C-0.408984 2.63224 -0.512107 5.63843 1.24411 7.45402L7.29087 13.6976C7.68149 14.1008 8.31585 14.1008 8.70647 13.6976L14.7532 7.45402C16.5126 5.63843 16.4094 2.63224 14.447 0.957269Z"
                  fill="#E33E38"
                />
              </svg>
            )}
            {!liked && (
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  setLiked(!liked);
                  likeCounter();
                }}
              >
                <path
                  d="M14.325 1.00979C12.5187 -0.508552 9.72812 -0.280489 8 1.47841C6.27187 -0.280489 3.48125 -0.511676 1.675 1.00979C-0.674996 2.98737 -0.331246 6.21149 1.34375 7.9204L6.825 13.5033C7.1375 13.8219 7.55625 14 8 14C8.44687 14 8.8625 13.825 9.175 13.5064L14.6562 7.92353C16.3281 6.21462 16.6781 2.9905 14.325 1.00979ZM13.5875 6.86757L8.10625 12.4504C8.03125 12.5254 7.96875 12.5254 7.89375 12.4504L2.4125 6.86757C1.27188 5.70538 1.04063 3.50598 2.64063 2.15947C3.85625 1.13788 5.73125 1.29096 6.90625 2.48751L8 3.60283L9.09375 2.48751C10.275 1.28471 12.15 1.13788 13.3594 2.15635C14.9562 3.50286 14.7187 5.71475 13.5875 6.86757Z"
                  fill="#C2C2C2"
                />
              </svg>
            )}
            <div className={styles.numOfLikes}>{likeCount}</div>
            <ul>
              <li></li>
            </ul>

            {props?.id !== 4 && !!deletable && (
              <div
                className={styles.replyStyle}
                onClick={() => {
                  setReplyable(!replayable);
                }}
              >
                Reply
              </div>
            )}

            {props?.id === 4 && (
              <div
                style={{ color: "red" }}
                className={styles.replyStyle}
                onClick={() => {
                  deleteComment();
                }}
              >
                Delete
              </div>
            )}
          </div>
          {replayable && (
            <div
              className={createStyles.contentContainer}
              style={{ width: "96%" }}
            >
              <input
                className={createStyles.inputStyle}
                type="text"
                placeholder="Write your comment"
              />
              <div className={createStyles.sendIcon}>
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.8763 1.0985L0.390353 9.45564C-0.175333 9.78068 -0.10345 10.5683 0.45911 10.8058L3.78134 12.1997L12.7604 4.28634C12.9323 4.1332 13.1761 4.3676 13.0292 4.54574L5.50028 13.7186L5.50028 16.2345C5.50028 16.9721 6.391 17.2627 6.82854 16.7283L8.81313 14.3124L12.7073 15.9438C13.1511 16.1314 13.6574 15.8532 13.7387 15.375L15.9889 1.87358C16.0952 1.24226 15.417 0.785966 14.8763 1.0985Z"
                    fill="#6590FF"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default EachComment;
