import React from "react";
import Image from "next/image";

export default function Events() {
  const events = [
    {
      id: 2,
      name: "EXPLORE 2.0",
      date: "7 March 2025",
      image: "/images/event/event1.svg",
      description:
        "Stressed about exams? Need a break from all the studying? It's time to refresh your mind and explore the exciting world of tech with GDG RBU!",
      location: "GD Seminar Hall",
      time: "10:00 AM - 5:00 PM",
    },
    {
      id: 3,
      name: "SpiderCraft",
      date: "16 Jan 2025",
      image: "/images/event/event2.svg",
      description:
        "SPIDER CRAFT 2025: WHERE TECH MET FUN! Still buzzing from the energy of Spider Craft 2025!",
    },
    {
      id: 4,
      name: "Tech Winter Break",
      date: "24 Dec 2024",
      image: "/images/event/event3.svg",
      description:
        "This winter gonna be techy. Want to learn new tech like Web Development, App Development? Join us at Tech Winter Break.",
    },
    {
      id: 5,
      name: "Bappa Ka Prashad 4.0",
      date: "15 Sept 2024",
      image: "/images/event/bkp.svg",
      description:
        "With Ganesh Chaturthi in full swing, we are thrilled to announce Bappa Ka Prashad 4.0 on 15th September! 🙏✨ Join us as we blend tradition with competitive coding, sharing the 'Prashad' of knowledge and skill. Get ready to test your abilities and be part of this exciting coding journey.",
      location: "Codeforces",
      time: "10:00 AM - 5:00 PM",
    },
    {
      id: 6,
      name: "A Step Towards CP 2.0",
      date: "22 Aug 2024",
      image: "/images/event/stcp.png",
      description:
        "Introducing... “A Step Towards CP 2.0” - your gateway to the world of programming! 💻🚀 .Competitive Programming: Your key to landing a job at the worlds leading tech companies. By honing your problem-solving prowess and coding expertise, you will make yourself an irresistible hire.",
      location: "DT Seminar Hall",
      time: "10:00 AM - 5:00 PM",
    },
    {
      id: 7,
      name: "Web Wizards 2.0",
      date: "27 March 2024",
      image: "/images/event/event4.png",
      description:
        "Web Wizards 2.0 is a one-day event to explore the exciting world of tech with GDG RBU!",
      location: "DT Seminar Hall",
      time: "10:00 AM - 5:00 PM",
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      name: "Bappa Ka Prashad 5.0",
      date: "31 August 2025",
      image: "/images/event/bkp25.png",
      description:
        "Web Wizards 3.0 is a one-day event plus week long bootcamp to explore the exciting world of tech with GDG RBU",
      location: "Platform : CodeChef",
      time: "Time : 8:00 PM - 10 PM",
    },
  ];
  const upcomingEvent = upcomingEvents[0];

  return (
    <div className="container mx-auto px-4 pt-24 max-w-7xl mb-10">
      <h1 className="text-4xl md:text-5xl  text-center mb-8 md:mb-12 text-gray-800 dark:text-gray-100 font-semibold">
        Our Events
      </h1>

      {/* Upcoming Event */}
      <div className="w-full mb-12 bg-black border border-white  rounded-lg overflow-hidden shadow-lg">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/5 h-64 lg:h-auto relative">
            <Image
              src={upcomingEvent.image}
              alt={upcomingEvent.name}
              fill
              className="object-cover"
            />
            <div className="absolute top-0 left-0 bg-blue-400 text-white px-4 py-2 rounded-br-lg font-thin">
              UPCOMING EVENT
            </div>
          </div>

          <div className="lg:w-3/5 p-6 lg:p-10 text-white">
            <div className="mb-2 font-thin">{upcomingEvent.date}</div>
            <h2 className="text-2xl lg:text-3xl font-thin mb-4">
              {upcomingEvent.name}
            </h2>
            <p className="mb-6 text-white/80 font-thin">
              {upcomingEvent.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6 font-thin">
              {upcomingEvent.location && (
                <div className="flex items-center text-white font-thin">
                  <span>{upcomingEvent.location}</span>
                </div>
              )}
              {upcomingEvent.time && (
                <div className="flex items-center text-white font-thin">
                  <span>{upcomingEvent.time}</span>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://unstop.com/o/kZSVs5q?lb=2hDu92ja&utm_medium=Share&utm_source=csea1bar94977&utm_campaign=Online_coding_challenge">
                <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-md transition-colors duration-200 font-thin">
                  Register Now
                </button>
              </a>
              <a href="https://bkp5.gdgrbu.tech">
                <button className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-md transition-colors duration-200 font-thin">
                  Website
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Past Events */}
      <div className="rounded-3xl bg-white py-6 px-6">
        <h1 className="text-4xl md:text-5xl text-center mb-8 md:mb-12 text-gray-800 dark:text-black font-semibold">
          Past Events
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-4 font-thin">
          {events.map(event => (
            <div
              key={event.id}
              className="flex flex-col border rounded-3xl border-gray-200 dark:border-white shadow-sm hover:shadow-md transition-shadow duration-300 p-4 md:p-6 h-full bg-white dark:bg-black text-gray-900 dark:text-gray-100 font-thin"
            >
              <div className="text-center mb-3 md:mb-4 text-black dark:text-white font-thin">
                {event.date}
              </div>

              <div className="mb-4 md:mb-6 w-full h-48 md:h-64 relative overflow-hidden rounded font-thin">
                <Image
                  src={event.image}
                  alt={event.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <h2 className="text-xl md:text-2xl font-thin mb-3 md:mb-4">
                {event.name}
              </h2>

              <p className="text-gray-600 dark:text-white text-sm md:text-base flex-grow font-thin">
                {event.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center lg:hidden font-thin">
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition-colors duration-200 font-thin">
            Show More Events
          </button>
        </div>
      </div>
    </div>
  );
}
