type ContainerProps = React.PropsWithChildren;

export function Container({ children }: ContainerProps) {
  return (
    <div className="mx-auto w-full max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">{children}</div>
  );
}
