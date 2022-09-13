export default function Homepage() {
  return (
    <div className="mt-16 container mx-auto">
      <h1>Hello world.</h1>
      <OutlineButton>Click</OutlineButton>
    </div>
  );
}

function Button({ children, ...rest }) {
  return <button {...rest}>{children}</button>;
}

function OutlineButton({ children }) {
  return (
    <Button className="border-gray-900 dark:border-white border-[1px] px-6 py-1">
      {children}
    </Button>
  );
}

function SolidButton({ children }) {
  return (
    <Button className="bg-gray-900 text-white dark:bg-white dark:text-black border-[1px] px-6 py-1">
      {children}
    </Button>
  );
}
