export default function SubtitleSection({ children }) {
  return (
    <p className="mt-4 mb-8 text-center lg:text-start text-sm lg:text-lg font-semibold underline decoration-2 decoration-primary">
      {children}
    </p>
  );
}
