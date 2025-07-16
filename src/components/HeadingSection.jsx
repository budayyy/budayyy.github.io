export default function HeadingSection({ children }) {
  return (
    <div className="relative text-center lg:text-start mb-20">
      <span className="absolute text-2xl font-extrabold text-background bg-primary shadow-[8px_8px_0px_0px_#030303] rounded-lg py-2 px-8 transform -rotate-6">
        {children}
      </span>
    </div>
  );
}
