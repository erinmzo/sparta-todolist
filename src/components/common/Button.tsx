import { ComponentProps } from "react";
import { Link } from "react-router-dom";

type ButtonBaseProps = {
  content: string;
  bgColor: string;
  textColor: string;
};

type LinkProps = ButtonBaseProps & ComponentProps<typeof Link> & { to: string };

type ButtonProps = ButtonBaseProps & ComponentProps<"button"> & { to?: never };

type Props = ButtonProps | LinkProps;

function Button({ content, type, bgColor, textColor, to, ...props }: Props) {
  const defaultVariant = "py-2 px-4 rounded-lg font-bold text-center";
  if (to)
    return (
      <Link to={to} className={`${bgColor} ${textColor} ${defaultVariant}`}>
        {content}
      </Link>
    );
  return (
    <button className={`${bgColor} ${textColor} ${defaultVariant}`} {...(props as ComponentProps<"button">)}>
      {content}
    </button>
  );
}

export default Button;
