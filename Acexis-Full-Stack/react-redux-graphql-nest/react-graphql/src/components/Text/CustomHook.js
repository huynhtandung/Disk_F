import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

CustomHook.propTypes = {};

const POST_MUTATION = gql`
  mutation PostMutation($content: String!, $roomID: Int!) {
    createTexting(inputTexting: { content: $content, roomID: $roomID }) {
      content
      roomID
    }
  }
`;

function CustomHook() {
  const [addTodo, { loading, error, data }] = useMutation(POST_MUTATION);
  return {
    addTodo,
    loading,
    error,
    data,
  };
}

export default CustomHook;
