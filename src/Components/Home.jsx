import React, { useState, useRef, useEffect } from "react";
import { Pen, Trash } from "lucide-react";

export default function Home() {
  const inputRef = useRef();
  const [tasks, setTasks] = useState([]);
  const [update, setUpdate] = useState(null);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddOrUpdate = () => {
    const text = inputRef.current.value;
    if (text.trim() === "") return;

    if (update === null) {
      const newItem = { completed: false, text };
      setTasks([...tasks, newItem]);
    } else {
      const newTasks = [...tasks];
      newTasks[update].text = text;
      setTasks(newTasks);
      setUpdate(null);
    }

    inputRef.current.value = "";
  };

  const handeItemDone = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const handleDeleteItem = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
    if (update === index) setUpdate(null);
    inputRef.current.value = "";
  };

  const handleUpdateItem = (index) => {
    inputRef.current.value = tasks[index].text;
    setUpdate(index);
  };

  return (
    <div className="min-h-screen  px-4 py-6 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="bg-white w-full flex flex-col justify-center items-center p-6 sm:p-10">
        <div className="flex flex-col justify-center items-center p-4 sm:p-10">
          <h1 className="text-[#373B40] text-2xl sm:text-3xl lg:text-4xl font-semibold p-2 sm:p-4 text-center">
            Todo List
          </h1>
          <p className="text-gray-500 text-sm sm:text-base text-center">Stay organized and get things done</p>
        </div>

        {/* Input Section */}
        <div className="bg-[#f1fbfb] w-full max-w-md sm:max-w-lg lg:max-w-2xl flex justify-center items-center border-solid border-gray-200 shadow-xs rounded-lg border-1">
          <div className="content w-full flex flex-col sm:flex-row justify-between items-center gap-4 p-4 sm:p-6 lg:p-10">
            <input
              ref={inputRef}
              className="w-full sm:w-[75%] lg:w-[83%] p-3 lg:p-2 focus:bg-[#f1fbfb] outline-[#f1fbfb] focus:outline-[#D2E1E2] outline-2 focus:border-solid rounded border-1 border-[#D2E1E2] focus:shadow-md text-sm sm:text-base"
              type="text"
              placeholder="Add a new task..."
            />
            <button
              onClick={handleAddOrUpdate}
              className="w-full sm:w-auto text-sm sm:text-lg bg-[#7B9FA6] p-2 px-4 font-light text-white border-solid rounded-lg whitespace-nowrap"
            >
              {update === null ? (
                <span className="text-md sm:text-md font-light text-white">+ Add</span>
              ) : (
                <span className="text-sm sm:text-[17px] font-light text-white">✓ Update</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Tasks Display Section */}
      <div className="w-full flex flex-col items-center space-y-4 mt-6">
        {tasks.length === 0 ? (
          <div className="w-full max-w-md sm:max-w-lg lg:max-w-2xl flex justify-center">
            <div className="p-6 sm:p-8 lg:p-15 bg-[#f1fbfb] w-full flex justify-center items-center border-solid border-gray-200 shadow-xs rounded-lg border-1">
              <p className="text-gray-500 text-sm sm:text-base text-center">
                No tasks yet. Add one above to get started!
              </p>
            </div>
          </div>
        ) : (
          tasks.map((task, index) => (
            <div className="w-full max-w-md sm:max-w-lg lg:max-w-2xl flex justify-center" key={index}>
              <div className="p-4 sm:p-6 lg:p-10 bg-[#f1fbfb] w-full flex justify-between items-center border-solid border-gray-200 shadow-xs rounded-lg border-1">
                <div className="w-full flex justify-between items-center px-1 sm:px-2">
                  <div className="left flex items-start sm:items-center flex-1 min-w-0">
                    <div className="px-2 sm:px-3 py-2 sm:py-3">
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => handeItemDone(index)}
                        className="w-4 h-4 sm:w-5 sm:h-5 accent-[#0C4552] hover:accent-[#f1fbfb]"
                      />
                    </div>
                    <div className="flex flex-col flex-1 min-w-0">
                      <span 
                        className={`text-md lg:text-lg break-words ${
                          task.completed ? "line-through text-gray-500" : ""
                        }`}
                      > 
                        {task.text}
                      </span>
                      <span className="text-xs sm:text-sm text-gray-500">
                        {new Date().toLocaleDateString("en-GB")}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 lg:gap-8 ml-2">
                    <button 
                      onClick={() => handleUpdateItem(index)}
                      className="p-1 hover:bg-blue-50 rounded"
                    >
                      <Pen color="blue" size={18} className="sm:w-[18px] sm:h-[18px] hover:cursor-pointer" />
                    </button>
                    <button
                      className="p-1  hover:cursor-pointer"
                      onClick={() => handleDeleteItem(index)}
                    >
                      <Trash color="red" size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer Section */}
      <div className="w-full flex justify-center mt-6 sm:mt-8">
        <p className="text-center text-sm sm:text-base text-gray-600">
          {tasks.filter((t) => t.completed).length} of {tasks.length} tasks completed
        </p>
      </div>
    </div>
  );
}