import React, { useState, useEffect } from "react";
import Container from "./Container";
import Banner from "./Banner";
import Tickets from "./Tickets";
import Task from "./Task";
import { toast } from "react-toastify";

const Body = () => {
  const [allTickets, setAllTickets] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => {
        setAllTickets(data.tickets);
        setLoading(false);
      });
  }, []);

  const handleStartTask = (ticket) => {
    if (
      inProgress.find((t) => t.id === ticket.id) ||
      resolved.find((t) => t.id === ticket.id)
    ) {
      toast.error("Already in progress or resolved!");
      return;
    }
    setInProgress([...inProgress, ticket]);
    toast.success(`Added: ${ticket.title}`);
  };

  const handleCompleteTask = (task) => {
    setInProgress(inProgress.filter((t) => t.id !== task.id));
    setResolved([...resolved, task]);
    toast.info(`Completed: ${task.title}`);
  };

  if (loading)
    return <div className="text-center p-10">Loading Dashboard...</div>;

  return (
    <div className="bg-gray-100 min-h-screen">
      <Container>
        <Banner
          inProgressCount={inProgress.length}
          resolvedCount={resolved.length}
        />

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <Tickets tickets={allTickets} onTicketClick={handleStartTask} />
          </div>

          <div className="lg:w-1/3">
            <Task
              inProgress={inProgress}
              resolved={resolved}
              onComplete={handleCompleteTask}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Body;
