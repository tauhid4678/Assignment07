import React from "react";

const Task = ({ inProgress = [], resolved = [], onComplete }) => {
  return (
    <div className="space-y-10">
      <section className="mt-4">
        <h2 className="text-xl font-bold text-[#001931] mb-6  pb-3">
          Task Status
        </h2>
        <div className="space-y-4">
          {inProgress.map((task) => (
            <div
              key={task.id}
              className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm"
            >
              <h4 className="text-[#001931] font-bold mb-4">{task.title}</h4>
              <button
                onClick={() => onComplete(task)}
                className="w-full bg-[#00a854] text-white py-2 rounded-md font-bold hover:bg-[#008f47] transition-all"
              >
                Complete
              </button>
            </div>
          ))}
          {inProgress.length === 0 && (
            <p className="text-gray-400 text-sm italic">No active tasks.</p>
          )}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#001931] mb-6  pb-3">
          Resolved Task
        </h2>
        <div className="space-y-2">
          {resolved.length > 0 ? (
            resolved.map((task) => (
              <div
                key={task.id}
                className="p-3 bg-[#E0E7FF] border border-gray-100 rounded text-sm flex items-center gap-2"
              >
                <h1 className="text-[#001931] font-medium truncate">
                  {task.title}
                </h1>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-sm italic ml-1">
              No resolved tasks yet.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Task;
