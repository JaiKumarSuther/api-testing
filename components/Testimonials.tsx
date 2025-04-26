import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Olly Schroeder",
      title: "Designer, Nietzsche",
      message: "Great job, scan2lab!",
      description:
        "Highly recommended client, and I hope to collaborate again.",
      avatar: "olly.jpg",
      verified: true,
    },
    {
      name: "Caitlyn King",
      title: "COO, OdeaoLabs",
      message: "Amazing, scan2lab!",
      description:
        "Highly recommended client, and I hope to collaborate again.",
      avatar: "caitlyn.jpg",
      verified: true,
    },
    {
      name: "Sienna Hewitt",
      title: "Project Manager, Warpspeed",
      message: "Great job, scan2lab!",
      description:
        "Highly recommended client, and I hope to collaborate again.",
      avatar: "sienna.jpg",
      verified: true,
    },
    {
      name: "Caitlyn King",
      title: "COO, OdeaoLabs",
      message: "Amazing, scan2lab!",
      description:
        "Highly recommended client, and I hope to collaborate again.",
      avatar: "caitlyn.jpg",
      verified: true,
    },
    {
      name: "Olly Schroeder",
      title: "Designer, Nietzsche",
      message: "Great job, scan2lab!",
      description:
        "Highly recommended client, and I hope to collaborate again.",
      avatar: "olly.jpg",
      verified: true,
    },
    {
      name: "Sienna Hewitt",
      title: "Project Manager, Warpspeed",
      message: "Great job, scan2lab!",
      description:
        "Highly recommended client, and I hope to collaborate again.",
      avatar: "sienna.jpg",
      verified: true,
    },
  ];

  return (
    <div className="flex w-full justify-center p-6 sm:p-10 bg-[#EEF8F9]">
      <div className="flex flex-col w-full max-w-7xl gap-10">
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="font-semibold text-3xl sm:text-4xl">Testimonials</h1>
          <p className="text-[#535862] text-base sm:text-xl">
            Hear first-hand from our incredible community of customers.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 p-3 sm:p-4 w-full">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 bg-white p-4 rounded-xl shadow-sm"
            >
              <h1 className="text-sm font-semibold">{testimonial.message}</h1>
              <p className="text-sm text-[#2E3032]">{testimonial.description}</p>
              <div className="flex gap-2 items-center">
                <Image
                  src="/assets/Avatar.svg"
                  alt="avatar"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <div className="flex items-center gap-1">
                    <h1 className="text-sm font-semibold">{testimonial.name}</h1>
                    {testimonial.verified && (
                      <Image
                        src="/assets/verified.svg"
                        alt="verified"
                        width={16}
                        height={16}
                      />
                    )}
                  </div>
                  <p className="text-xs text-[#2E3032]">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
