import clsx from "clsx";
import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  title?: string;
  className?: string;
  childrenClassName?: string;
};

export default function Card({
  children,
  title,
  className,
  childrenClassName,
}: Props) {
  return (
    <div
      className={clsx(
        "p-4 rounded-md bg-linear-to-t from-card/60 to-card flex flex-col gap-4 2xl:h-full border",
        className
      )}
    >
      {/* TODO: Center text */}
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div
        className={clsx(
          childrenClassName,
          "animate-[fade-in_1s_ease-out_forwards] 2xl:flex-1"
        )}
      >
        {children}
      </div>
    </div>
  );
}
