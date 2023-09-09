import { useState } from "react";
import styles from "./createCommentStyle.module.css";
import { addAComment } from "../../features/commentSlice";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

export const CreateComment = () => {
  const [commentData, setCommentData] = useState("");
  const dispatch = useDispatch();

  const sendComment = () => {
    const commentObj = {
      description: commentData,
      id: uuidv4(),
      userName: "John Doe",
    };
    dispatch(addAComment(commentObj));
    setCommentData("");
    console.log(" fpofdgd", commentObj);
  };

  return (
    <>
      <div className={styles.inputContainer}>
        <div className={styles.contentContainer}>
          <input
            className={styles.inputStyle}
            type="text"
            placeholder="Write your comment"
            value={commentData}
            onChange={(event) => {
              setCommentData(event?.target?.value);
            }}
          />
          <div className={styles.sendIcon}>
            <svg
              onClick={() => {
                sendComment();
              }}
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
      </div>
    </>
  );
};
