import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    company: "TechCorp",
    testimonial:
      "This product has completely transformed the way we work. The efficiency and ease of use are unmatched!",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Sophia Lee",
    designation: "Data Analyst",
    company: "InsightTech",
    testimonial:
      "This tool has saved me hours of work! The analytics and reporting features are incredibly powerful.",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: 3,
    name: "Michael Johnson",
    designation: "UX Designer",
    company: "DesignPro",
    testimonial:
      "An amazing tool that simplifies complex tasks. Highly recommended for professionals in the industry. " +
      "The intuitive interface makes it easy to onboard new team members, and the automation features save us countless hours every week. ",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "Marketing Specialist",
    company: "BrandBoost",
    testimonial:
      "I've seen a significant improvement in our team's productivity since we started using this service.",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "Daniel Martinez",
    designation: "Full-Stack Developer",
    company: "CodeCrafters",
    testimonial:
      "The best investment we've made! The support team is also super responsive and helpful.",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    name: "Jane Smith",
    designation: "Product Manager",
    company: "InnovateX",
    testimonial:
      "The user experience is top-notch! The interface is clean, intuitive, and easy to navigate.",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

const Testimonial01 = ({data}: any) => (
  <div className="flex justify-center items-center py-12 px-6">
    <div>
      <h2 className="mb-14 text-5xl md:text-6xl font-bold text-center tracking-tight">
        Testimonials
      </h2>
      <div className="max-w-screen-xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-8">
        {data?.testimony?.map((testimonial: any, idx: number) => (
          <div
            key={idx}
            className="relative mb-8 bg-accent rounded-xl p-6 break-inside-avoid"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback className="text-xl font-medium bg-primary text-primary-foreground">
                    {testimonial.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-lg font-semibold">{testimonial.name}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4">
                <svg
                  width="101"
                  height="101"
                  viewBox="0 0 101 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                >
                  <path
                    d="M29.4334 74.3314C30.1456 74.6366 30.8578 74.5858 31.57 74.1788C32.2821 73.7718 32.74 73.314 32.9435 72.8053L33.4013 71.1266C33.503 70.8214 33.5539 70.5161 33.5539 70.2109C33.5539 69.9057 33.6048 69.6005 33.7065 69.2953C33.91 68.5831 34.2152 68.0235 34.6222 67.6165C35.2326 67.1078 35.7922 66.5991 36.3009 66.0904C36.7079 65.48 37.1657 64.8695 37.6744 64.2591C38.997 62.5295 40.2179 60.6982 41.3371 58.7651C42.0492 56.9338 43.0667 55.1024 44.3893 53.2711C44.6945 52.8641 44.9489 52.4572 45.1523 52.0502C45.2541 51.8467 45.3558 51.6432 45.4576 51.4398C45.5593 51.2363 45.7119 51.0837 45.9154 50.9819C46.4241 50.168 46.8819 49.4049 47.2889 48.6928C47.6959 47.8788 48.1028 47.1158 48.5098 46.4036C48.6115 46.0984 48.7641 45.844 48.9676 45.6405C49.0694 45.3353 49.1711 45.0301 49.2728 44.7249C49.2728 44.4196 49.3237 44.1653 49.4254 43.9618C49.8324 43.1479 50.2394 42.334 50.6463 41.52C50.9516 40.7061 51.3076 39.9431 51.7146 39.2309L52.1724 37.8574C52.2742 37.3487 52.4777 36.84 52.7829 36.3313C52.9864 35.8226 53.1898 35.3139 53.3933 34.8051C54.4107 32.8721 55.1738 30.7864 55.6825 28.5481C55.9877 27.4289 56.0386 26.2081 55.8351 24.8854C55.8351 24.6819 55.8351 24.5293 55.8351 24.4276C55.7334 24.2241 55.6825 24.0715 55.6825 23.9698C55.1738 22.7489 54.5634 21.7315 53.8512 20.9175C53.0372 20.1036 51.969 19.5949 50.6463 19.3914C50.3411 19.2897 50.0868 19.1879 49.8833 19.0862C49.5781 18.8827 49.2728 18.8319 48.9676 18.9336C48.9676 18.9336 48.8659 18.8319 48.6624 18.6284C48.5606 18.2214 48.3572 18.0688 48.0519 18.1705C47.4415 18.5775 46.8311 18.7301 46.2206 18.6284C45.8136 18.6284 45.3049 18.7301 44.6945 18.9336C43.7788 19.4423 42.9649 19.951 42.2527 20.4597C41.8458 20.8667 41.3371 21.1719 40.7266 21.3754C40.2179 21.4771 39.8109 21.6806 39.5057 21.9858C39.0988 22.1893 38.6918 22.4437 38.2848 22.7489C37.3692 23.5628 36.6061 24.4785 35.9957 25.4959C35.3852 26.4115 34.8765 27.4289 34.4696 28.5481C34.0626 29.2603 33.7065 30.0233 33.4013 30.8373C33.0961 31.6512 32.7908 32.4651 32.4856 33.279C32.0787 34.2964 31.6717 35.3139 31.2647 36.3313C30.8578 37.2469 30.3491 38.2135 29.7386 39.2309C29.2299 40.0448 28.7721 40.9096 28.3651 41.8253C27.8564 42.6392 27.4494 43.504 27.1442 44.4196C26.9407 44.7249 26.7881 45.0301 26.6864 45.3353C26.5847 45.6405 26.4829 45.9458 26.3812 46.251C26.1777 47.1666 25.8725 48.0314 25.4655 48.8454C25.0585 49.6593 24.6516 50.4732 24.2446 51.2871C23.6342 51.9993 23.1763 52.8641 22.8711 53.8815C22.0572 55.1024 21.752 56.3233 21.9555 57.5442C21.8537 58.7651 22.0063 59.8842 22.4133 60.9016C22.7185 61.919 23.1255 62.8856 23.6342 63.8013C24.3464 64.6152 24.9059 65.48 25.3129 66.3956C25.8216 67.2096 26.1268 67.9726 26.2286 68.6848C26.2286 69.4987 26.3812 70.4653 26.6864 71.5844C26.6864 71.9914 26.7373 72.2966 26.839 72.5001C27.0425 72.907 27.2968 73.2123 27.6021 73.4158C28.009 73.8227 28.6195 74.1279 29.4334 74.3314ZM51.8672 82.1146C52.3759 82.2163 52.9864 82.0128 53.6986 81.5041L54.4616 80.5885C54.8686 79.7745 55.5299 79.0115 56.4456 78.2993C57.1577 77.7906 57.7682 77.1802 58.2769 76.468C58.7856 75.7558 59.2943 75.0436 59.803 74.3314C60.0065 74.0262 60.21 73.721 60.4134 73.4158C60.6169 73.0088 60.8204 72.6018 61.0239 72.1949C61.5326 71.3809 61.9904 70.5161 62.3974 69.6005C62.7026 68.6848 63.0587 67.82 63.4657 67.0061C63.5674 66.5991 63.72 66.243 63.9235 65.9378C64.127 65.5308 64.3305 65.1239 64.5339 64.7169C64.6357 64.4117 64.7374 64.1065 64.8392 63.8013C64.9409 63.496 65.0935 63.1908 65.297 62.8856C65.6022 62.4786 65.8057 62.0717 65.9074 61.6647C66.0092 61.2577 66.1618 60.9016 66.3653 60.5964C66.5688 60.1895 66.8231 59.7825 67.1283 59.3755L67.5862 58.3073C67.6879 58.1038 67.7896 57.8494 67.8914 57.5442C67.8914 57.239 67.9423 56.9846 68.044 56.7811C68.5527 55.8655 69.0614 54.7463 69.5701 53.4237C69.5701 53.322 69.6718 53.0676 69.8753 52.6606C70.2823 51.8467 70.6893 51.0328 71.0962 50.2189C71.4014 49.3032 71.7067 48.4384 72.0119 47.6245C72.1136 47.2175 72.3171 46.8614 72.6223 46.5562C72.8258 46.251 73.0293 45.9458 73.2328 45.6405C73.4363 45.2336 73.6397 44.8775 73.8432 44.5723C74.0467 44.1653 74.1993 43.7583 74.3011 43.3514C74.3011 43.0461 74.4028 42.7918 74.6063 42.5883C75.2167 41.4692 75.7763 40.4009 76.285 39.3835C76.7937 38.2643 77.3533 37.1961 77.9637 36.1786C78.0655 35.9752 78.1672 35.7717 78.2689 35.5682C78.3707 35.3647 78.4724 35.2121 78.5742 35.1104L79.4898 32.3634C79.795 31.7529 79.8459 31.0407 79.6424 30.2268L79.1846 28.2429C78.8794 27.022 78.2689 26.0554 77.3533 25.3433C76.8446 24.8346 76.285 24.4276 75.6745 24.1224C74.9624 23.8171 74.2502 23.5628 73.538 23.3593C73.2328 23.1558 72.9276 23.0541 72.6223 23.0541C72.2154 23.0541 71.8084 23.0541 71.4014 23.0541C70.5875 23.1558 69.8245 23.2576 69.1123 23.3593C68.2983 23.4611 67.5353 23.6645 66.8231 23.9698C66.5179 24.1732 66.2127 24.3767 65.9074 24.5802C65.6022 24.7837 65.3987 25.0889 65.297 25.4959C64.9918 25.9028 64.7374 26.3098 64.5339 26.7168C64.2287 27.022 63.9235 27.4289 63.6183 27.9376L62.3974 29.6164C62.1939 30.0233 61.9904 30.3794 61.7869 30.6846C61.5835 30.9899 61.38 31.2951 61.1765 31.6003C60.5661 32.6177 60.0574 33.6351 59.6504 34.6525C59.2434 35.5682 58.8365 36.5856 58.4295 37.7048C58.0225 38.7222 57.6156 39.7904 57.2086 40.9096C56.6999 41.927 56.2421 42.9953 55.8351 44.1144C55.4281 44.9283 55.0721 45.7931 54.7668 46.7088C54.3599 47.6245 54.0546 48.5401 53.8512 49.4558C53.5459 50.3715 53.2407 51.2871 52.9355 52.2028C52.5285 53.0167 52.1724 53.8815 51.8672 54.7972C51.4603 55.8146 51.0533 56.832 50.6463 57.8494C50.2394 58.7651 49.8324 59.7316 49.4254 60.749C48.815 62.6821 47.8993 64.5134 46.6784 66.243C46.068 67.1587 45.7628 68.1761 45.7628 69.2953V73.8736C45.7628 74.6875 46.0171 75.5014 46.5258 76.3154C46.5258 76.3154 46.6276 76.4171 46.8311 76.6206C47.238 77.0275 47.645 77.5362 48.0519 78.1467C48.3572 78.7571 48.6115 79.3676 48.815 79.978C49.0185 80.6902 49.4254 81.1989 50.0359 81.5041C50.5446 81.7076 51.155 81.9111 51.8672 82.1146Z"
                    className="fill-current"
                  />
                </svg>
              </div>
            </div>
            <p className="mt-5 text-[17px]">{testimonial.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Testimonial01;
