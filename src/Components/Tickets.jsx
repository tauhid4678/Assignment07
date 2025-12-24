import React from "react";

const Tickets = ({ tickets, onTicketClick }) => {
  const getStatusStyles = (status) => {
    const normalized = status.toLowerCase();
    if (normalized === "open") return "bg-[#dcfce7] text-[#15803d]";
    return "bg-[#fef9c3] text-[#a16207]";
  };

  return (
    <div className="py-4 min-h-screen">
      <h2 className="text-xl font-bold text-[#001931] mb-6  pb-3">
        Customer Tickets
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tickets.map((ticket) => (
          <div
            key={ticket.id}
            onClick={() => onTicketClick(ticket)}
            className="bg-white p-5 rounded-md shadow-sm border border-gray-100 flex flex-col justify-between hover:border-blue-400 cursor-pointer transition-all active:scale-95"
          >
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-[1.05rem] text-[#001931] leading-tight pr-4">
                  {ticket.title}
                </h3>
                <span
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${getStatusStyles(
                    ticket.status
                  )}`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      ticket.status.toLowerCase() === "open"
                        ? "bg-[#22c55e]"
                        : "bg-[#eab308]"
                    }`}
                  ></span>
                  {ticket.status}
                </span>
              </div>

              <p className="text-[#627382] text-sm mb-6 line-clamp-2">
                {ticket.description}
              </p>
            </div>

            <div className="flex justify-between items-center text-[11px] font-bold border-t border-gray-50 pt-4">
              <div className="flex gap-4 items-center">
                <span className="text-[#627382]">#{ticket.id}</span>
                <span
                  className={`${
                    ticket.priority === "Critical" || ticket.priority === "High"
                      ? "text-red-500"
                      : ticket.priority === "Medium"
                      ? "text-yellow-600"
                      : "text-green-600"
                  } uppercase tracking-tight`}
                >
                  {ticket.priority} PRIORITY
                </span>
              </div>

              <div className="flex items-center gap-4 text-[#627382]">
                <span className="font-medium">{ticket.customer}</span>
                <div className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>

                  {ticket.createdAt?.split("T")[0] || "1/15/2024"}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tickets;
