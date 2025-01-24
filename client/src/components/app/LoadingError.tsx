import React from "react";

/**
 * LoadingError component displays a loading animation or an error message.
 *
 * @param {boolean} loading - Indicates if the loading state is active.
 * @param {string | null} error - The error message to display, if any.
 * @returns {JSX.Element} The rendered LoadingError component.
 */
const LoadingError: React.FC<{ loading: boolean; error: string | null }> = ({
  loading,
  error,
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {loading ? (
        <div className="flex flex-col items-center">
          <svg
            viewBox="-1500 -800 3000 1600"
            xmlns="http://www.w3.org/2000/svg"
            className="rounded-md shadow-lg bg-gray-900 fill-none stroke-gray-800 stroke-linecap-round"
            style={{
              width: "100%",
              maxWidth: "80em",
              height: "auto",
              strokeWidth: "8%",
            }}
          >
            <path
              id="inf"
              d="M353-353A500 500 0 1 1 353 353L-353-353A500 500 0 1 0-353 353z"
            />
            <use
              href="#inf"
              strokeDasharray="1570 4758"
              strokeDashoffset="5000"
              className="stroke-white animate-stroke"
            />
          </svg>
          <p className="mt-4 text-lg text-gray-700">Loading...</p>
        </div>
      ) : (
        error && (
          <div className="flex flex-col items-center text-red-600">
            <svg
              className="w-16 h-16 mb-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 0a12 12 0 100 24 12 12 0 000-24zm1 17h-2v-2h2v2zm0-4h-2V7h2v6z"
              />
            </svg>
            <p className="text-lg">{error}</p>
          </div>
        )
      )}
    </div>
  );
};

export default LoadingError;
