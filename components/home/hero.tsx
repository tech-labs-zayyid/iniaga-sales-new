import { ArrowRight, MessageCircle, Mail, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Hero1Props {
  badge?: string;
  heading: string;
  description: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  image: {
    src: string;
    alt: string;
  };
}

const Hero1 = ({
  data
}: any) => {
  return (
    <section className="py-14">
      <div className="container mx-auto px-5 lg:px-0">
        <div className="bg-accent rounded-xl py-8 px-6 sm:py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-20">
            <div className="relative shrink-0 aspect-[3/4] max-w-[18rem] w-full bg-muted-foreground/20 rounded-xl"
              style={{background: `url('${data.url_image}') center no-repeat`, backgroundSize: 'cover'}}
            >
              <div className="absolute top-1/4 right-0 translate-x-1/2 h-12 w-12 bg-primary rounded-full flex items-center justify-center">
                <svg
                  width="102"
                  height="102"
                  viewBox="0 0 102 102"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                >
                  <path
                    d="M26.0063 19.8917C30.0826 19.8625 33.7081 20.9066 36.8826 23.024C40.057 25.1414 42.5746 28.0279 44.4353 31.6835C46.2959 35.339 47.2423 39.4088 47.2744 43.8927C47.327 51.2301 44.9837 58.4318 40.2444 65.4978C35.4039 72.6664 28.5671 78.5755 19.734 83.2249L2.54766 74.1759C8.33598 71.2808 13.2548 67.9334 17.3041 64.1335C21.2515 60.3344 23.9203 55.8821 25.3105 50.7765C20.5179 50.4031 16.6348 48.9532 13.6612 46.4267C10.5864 44.0028 9.03329 40.5999 9.00188 36.2178C8.97047 31.8358 10.5227 28.0029 13.6584 24.7192C16.693 21.5381 20.809 19.9289 26.0063 19.8917ZM77.0623 19.5257C81.1387 19.4965 84.7641 20.5406 87.9386 22.6581C91.1131 24.7755 93.6306 27.662 95.4913 31.3175C97.3519 34.9731 98.2983 39.0428 98.3304 43.5268C98.383 50.8642 96.0397 58.0659 91.3004 65.1319C86.4599 72.3005 79.6231 78.2095 70.79 82.859L53.6037 73.8099C59.392 70.9149 64.3108 67.5674 68.3601 63.7676C72.3075 59.9685 74.9763 55.5161 76.3665 50.4105C71.5739 50.0372 67.6908 48.5873 64.7172 46.0608C61.6424 43.6369 60.0893 40.2339 60.0579 35.8519C60.0265 31.4698 61.5787 27.6369 64.7145 24.3532C67.7491 21.1722 71.865 19.563 77.0623 19.5257Z"
                    className="fill-primary-foreground"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex sm:hidden md:flex mt-2 items-center gap-4">
                <Avatar>
                  <AvatarFallback className="text-xl font-medium bg-primary text-primary-foreground">
                    {data.fullname.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-lg font-semibold capitalize">{data.fullname}</p>
                </div>
              </div>
              <p className="mt-6 text-lg sm:text-1xl lg:text-[1rem] xl:text-2xl leading-normal lg:!leading-normal font-semibold tracking-tight">
                &quot;{data.desc}&quot;
              </p>
              <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start mt-3">
                <Button asChild className="w-full sm:w-auto">
                  <a href={`tel:${data.phone_number}`}>
                    <PhoneCall className="size-4" />
                    {data.phone_number}
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <a href={`mailto:${data.email}`}>
                    <Mail className="size-4" />
                    {data.email}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero1 };
