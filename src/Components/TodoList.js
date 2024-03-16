import TodoItem from "./TodoItem";

export default function TodoList({ todos, dispatch }) {
  return (
    <ul>
      {todos.map((todo) => (
        // Using map to go through every todo in the todos props.
        // Rendering TodoItem component for each todo.
        <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </ul>
  );
}
