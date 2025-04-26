import Image from "next/image";

export default function Footer() {
  const socialIcons = [
    {
      name: "Twitter",
      url: "/social/twitter.svg",
      width: 11,
      height: 9,
    },
    {
      name: "Facebook",
      url: "/social/facebook.svg",
      width: 6,
      height: 13,
    },
    {
      name: "Youtube",
      url: "/social/youtube.svg",
      width: 11,
      height: 7,
    },
    {
      name: "Instagram",
      url: "/social/instagram.svg",
      width: 11,
      height: 11,
    },
    {
      name: "Pinterest",
      url: "/social/pinterest.svg",
      width: 11,
      height: 13,
    },
    {
      name: "TikTok",
      url: "/social/tiktok.svg",
      width: 11,
      height: 13,
    },
  ];

  const footerLinks = [
    {
      heading: "About",
      links: ["Features", "Works", "Career"],
    },
    {
      heading: "Help",
      links: ["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"],
    },
    {
      heading: "Legal",
      links: ["Free eBooks", "How to - Blog"],
    },
  ];

  return (
    <div className="bg-[#0B7285] px-6 py-14">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 lg:flex-row justify-between items-start">
        {/* Left Side */}
        <div className="flex flex-col gap-6 w-full lg:w-[50%] text-center lg:text-left items-center lg:items-start">
          <h1 className="text-white text-lg font-semibold">About scan2lab</h1>
          <p className="text-[#BECED1] text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            dictum aliquet accumsan porta lectus ridiculus in mattis. Netus
            sodales in volutpat ullamcorper amet adipiscing fermentum. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
            {socialIcons.map((icon, index) => (
              <button
                key={index}
                className="flex justify-center items-center w-[32px] aspect-square bg-[#0C606F] rounded-full"
              >
                <Image
                  src={icon.url}
                  alt={icon.name}
                  width={icon.width}
                  height={icon.height}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-wrap justify-center lg:justify-end gap-10 w-full lg:w-[50%] text-center lg:text-left">
          {footerLinks.map((section, i) => (
            <div key={i} className="flex flex-col gap-2 min-w-[120px]">
              <h2 className="text-white font-semibold">{section.heading}</h2>
              {section.links.map((link, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-[#BECED1] text-sm hover:underline"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
