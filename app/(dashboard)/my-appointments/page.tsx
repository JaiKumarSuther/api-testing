import { Calendar1, Clock, Ellipsis } from "lucide-react";

export default function MyAppointment() {
  const appointments = [
    {
      status: "Scheduled",
      location: "Chugtai Lab, Nishtar Road",
      time: "5:45 PM",
      date: "03 Mar 2025",
    },
    {
      status: "Rescheduled",
      location: "Chugtai Lab, Nishtar Road",
      time: "5:45 PM",
      date: "03 Mar 2025",
    },
    {
      status: "Canceled",
      location: "Chugtai Lab, Nishtar Road",
      time: "5:45 PM",
      date: "03 Mar 2025",
    },
  ];

  // Determine border and text color based on status
  const getStatusStyles = (status: any) => {
    switch (status) {
      case "Scheduled":
        return { background: "bg-[#ECFDF3]", text: "text-[#027A48]" };
      case "Rescheduled":
        return { background: "bg-[#FFFAEB]", text: "text-[#CE980F]" };
      case "Canceled":
        return { background: "bg-[#FEF3F2]", text: "text-[#B42318]" };
      default:
        return { background: "border-gray-500", text: "text-gray-500" };
    }
  };

  return (
    <div className="flex justify-center items-center p-5 md:p-15">
      <div className="w-[672px] p-5 md:p-10 rounded-lg bg-[#EEF8F9]">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          My Appointments
        </h1>

        {appointments.map((appointment, index) => {
          const styles = getStatusStyles(appointment.status);
          return (
            <div
              key={index}
              className={`flex flex-col gap-2 border-1 border-[#eee] bg-white p-4 mb-4 rounded-lg`}
            >
              <div className="flex justify-between items-center">
                <span
                  className={`font-semibold px-2 rounded-lg ${styles.text} ${styles.background}`}
                >
                  {appointment.status}
                </span>
                <button className="text-gray-500 cursor-pointer hover:text-gray-700">
                  <Ellipsis />
                </button>
              </div>
              <p className="text-[#211028] font-semibold mt-2">
                {appointment.location}
              </p>
              <div className="flex items-center p-3 rounded-lg text-gray-500 bg-[#F4F6F9] text-sm mt-1">
                <div className="flex mr-2 gap-1 items-center">
                  <Clock size={16} color="#727C88"/>
                  <p className="text-[#211028]">{appointment.time}</p>
                </div>
                <div className="flex mr-2 gap-1 items-center">
                  <Calendar1 size={16} color="#727C88"/>
                  <p className="text-[#211028]">{appointment.date}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
