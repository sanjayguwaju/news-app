import Link from 'next/link';
import React from 'react';

const paginationData = {
  "ariaLabel": "Page navigation example",
  "items": [
    {
      "label": "Previous",
      "href": "#",
    },
    {
      "label": "1",
      "href": "#",
    },
    {
      "label": "2",
      "href": "#",
    },
    {
      "label": "3",
      "href": "#",
      "ariaCurrent": "page",
    },
    {
      "label": "4",
      "href": "#",
    },
    {
      "label": "5",
      "href": "#",
    },
    {
      "label": "Next",
      "href": "#",
    }
  ]
};

const Pagination = () => {
  return (
    <nav aria-label={paginationData.ariaLabel}>
      <ul className="inline-flex -space-x-px text-base h-10">
        {paginationData?.items?.map((item, index) => (
          <li key={index}>
            <Link href={item?.href} className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" aria-current={item?.ariaCurrent}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;