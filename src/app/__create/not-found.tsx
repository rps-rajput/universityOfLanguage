import { Link } from 'react-router';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-white font-semibold hover:opacity-90 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
