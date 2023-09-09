import styles from "./App.module.css";
import { CreateComment } from "./components/comments/CreateComment";
import { useEffect, useState } from "react";
import EachComment from "./components/comments/EachComment";
import { uploadComment, selectComments } from "./features/commentSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const allComments = useSelector(selectComments);
  const dispatch = useDispatch();
  const commentData = [
    {
      id: 1,
      userName: "Maria",
      description:
        "I was very glad to have you after such a long time. Can you plan a meetup? Maybe this weekend?",
    },
    {
      id: 2,
      userName: "Alex Benjamin",
      description:
        "Home sweet home! I'm glad you are back. It's been two year and miss the football matches we have together. A lot has been changed since you left. Let's meet at the ground tomorrow evening?",
    },
    {
      id: 3,
      userName: "Tania",
      description:
        "Hey bud, welcome back to home. It's so long to see you back again. Would love to hear the travelling stories of yours. Your or my place?",
    },
  ];

  useEffect(() => {
    dispatch(uploadComment(commentData));
  }, []);

  return (
    <>
      <div className={styles.mainContainer}>
        <h2 className={styles.titleStyle}>Comments</h2>
        {allComments?.map((comment, index) => (
          <EachComment key={index} props={comment} />
        ))}

        <CreateComment />
      </div>
    </>
  );
}

export default App;
