import Image, { StaticImageData } from "next/image";

interface Props {
  className: string;
  children?: React.ReactNode;
  avatar: StaticImageData;
  name: string;
  description: string;
  title: string;
  testimonial: string;
}

function Box({
  className,
  avatar,
  name,
  description,
  title,
  testimonial,
  children,
}: Props) {
  return (
    <div className={className}>
      {children}
      <div className="flex gap-4 items-center">
        <Image
          src={avatar.src}
          alt="avatar"
          width={40}
          height={40}
          className=" rounded-full ring-2 ring-purple-300"
        />
        <div className="flex flex-col items-start text-sm z-10">
          <span>{name}</span>
          <span className="text-gray-500">{title}</span>
        </div>
      </div>
      <p className="text-lg leading-7 mt-6">{description}</p>
      <p className="opacity-50 leading-6 mt-6 text-sm">{testimonial}</p>
    </div>
  );
}

export default Box;
