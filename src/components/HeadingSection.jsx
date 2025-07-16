export default function HeadingSection({ children }) {
  return (
    <div className="relative flex justify-center items-center lg:justify-start mb-14 top-4 lg:top-0">
      <span className="absolute text-2xl font-extrabold text-background bg-primary shadow-[8px_8px_0px_0px_#030303] rounded-lg py-2 px-8 transform -rotate-6">
        {children}
      </span>
    </div>
  );
}
