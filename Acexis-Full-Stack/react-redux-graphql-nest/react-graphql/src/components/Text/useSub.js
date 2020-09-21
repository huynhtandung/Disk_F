import { useSubscription } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

useSub.propTypes = {};

const COMMENTS_SUBSCRIPTION = gql`
  subscription onSub($roomID: String) {
    textCreated(roomID: $roomID) {
      content
      roomID
    }
  }
`;

function useSub() {
  const { data, loading, error } = useSubscription(COMMENTS_SUBSCRIPTION, {
    variables: {
      roomID: sessionStorage.getItem("roomID"),
    },
  });
  return {
    data,
    loading,
    error,
  };
}

export default useSub;
