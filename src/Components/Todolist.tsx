import TextField from "./Utility/TextField";
import { useState } from "react";

const Todolist = () => {
  const [todoValue, setTodoValue] = useState<any>("");

  return (
    <div>
      <TextField
        value={todoValue}
        type=''
        onChange={(e) => setTodoValue(e.target.value)}
        onBlur={() => function () {}}
        onKeyPress={() => function () {}}
        placeholder=''
        error={false}
        disabled={false}
      />
    </div>
  );
};

export default Todolist;
