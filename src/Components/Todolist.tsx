import TextField from "./Utility/TextField";
import Calendar from "./Utility/Calendar";
import { useState } from "react";

const Todolist = () => {
  const [todoValue, setTodoValue] = useState<any>("");

  //test props (events)
  let events = [
    {
      date: new Date("Mon May 08 2023 00:00:00 GMT+0800 (台北標準時間)"),
      events: [
        {
          start_time: new Date(
            "Mon May 08 2023 15:00:05 GMT+0800 (台北標準時間)"
          ),
          end_time: new Date(
            "Mon May 08 2023 18:00:05 GMT+0800 (台北標準時間)"
          ),
          title: "學習REACT TYPESCRIPT",
          category: "Task",
        },
        {
          start_time: new Date(
            "Mon May 08 2023 15:00:05 GMT+0800 (台北標準時間)"
          ),
          end_time: new Date(
            "Mon May 08 2023 18:00:05 GMT+0800 (台北標準時間)"
          ),
          title: "顏色標題測試",
          category: "Travel",
        },
      ],
    },
    {
      date: new Date("Mon May 10 2023 00:00:00 GMT+0800 (台北標準時間)"),
      events: [
        {
          start_time: new Date(
            "Mon May 08 2023 15:00:05 GMT+0800 (台北標準時間)"
          ),
          end_time: new Date(
            "Mon May 08 2023 18:00:05 GMT+0800 (台北標準時間)"
          ),
          title: "會議",
          category: "Task",
        },
      ],
    },
  ];

  let categories = [
    { title: "Task", color: "#ff766e" },
    { title: "Travel", color: "#fc0" },
  ];

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
      <Calendar events={events} categories={categories} />
    </div>
  );
};

export default Todolist;
