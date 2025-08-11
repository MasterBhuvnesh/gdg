import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background">
      <h1 className="text-5xl font-bold ">404</h1>
      <p className="text-lg text-foreground mt-4">
        Oops! The page you&apos;re looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-6 px-6 py-2 bg-accent hover:bg-accent/80 text-background rounded-md transition-colors font-medium shadow"
      >
        Go Home
      </Link>
    </div>
  );
}
