import { FC, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  href: string;
}

const Card: FC<CardProps> = ({ children, href }) => {
  return (
    <div className="flex flex-col rounded border-2 border-gray-500 px-32 py-16 text-center text-3xl font-bold text-gray-700 drop-shadow-2xl transition-all duration-500 hover:scale-105">
      {children}
      <a
        className="text-base font-medium text-purple-500 underline"
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        Documentation
      </a>
    </div>
  );
};

const App = () => {
  return (
    <div className="container mx-auto flex h-screen flex-col items-center justify-center">
      <div className="flex w-full flex-col">
        <h1 className="text-center text-6xl font-extrabold text-gray-900 drop-shadow">
          Hello World
        </h1>
        <h2 className="mt-4 text-center text-3xl font-extrabold text-gray-500 drop-shadow">
          Useful links:
        </h2>
        <div className="mx-auto mt-8 grid w-fit grid-cols-2 gap-4">
          <Card href="https://reactjs.org/">React</Card>
          <Card href="https://tailwindcss.com/">TailwindCSS</Card>
        </div>
      </div>
    </div>
  );
};

export default App;
