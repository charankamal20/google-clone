import Link from 'next/link';
import React from 'react';
import PaginationButtons from './paginationButton';

function ImageSearchResults({results}) {
    
    return (
      <div className="pb-24 mt-4">
        <div className="grid space-y-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
          {results.items.map((result) => (
            <div key={result.link}>
              <div className="group">
                <Link href={result.image.contextLink}>
                  <img
                    className="h-60 group-hover:shadow-xl w-full object-contain transition-shadow"
                    src={result.link}
                    alt={result.title}
                  />
                </Link>
                <Link href={result.image.contextLink}>
                  <h2 className="group-hover:underline truncate text-lg -mb-1">
                    {result.title}
                  </h2>
                </Link>
                <Link href={result.image.contextLink}>
                  <p className="group-hover:underline text-gray-600 ">
                    {result.displayLink}
                  </p>
                </Link>
              </div>
            </div>
          ))}
          <div className="ml-16">
            <PaginationButtons />
          </div>
        </div>
      </div>
    );
}

export default ImageSearchResults;