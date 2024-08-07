"use client"

import Card from '@/app/components/card';
import Pagination from '@/app/components/pagination';
import { fetchSinglePosts } from '@/app/libs/api/fetchGraphQL';
import { SINGLE_POSTS_QUERY } from '@/app/libs/api/queries';
import React, { useEffect, useState } from 'react';

const CategoryList: React.FC = () => {
  const [singePosts, setSinglePosts] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await fetchSinglePosts(SINGLE_POSTS_QUERY);
            console.log({ data });
            setSinglePosts(data?.SinglePosts?.docs);
          } catch (err) {
            console.log(err);
          } finally {
            console.log("finallyyy");
          }
        };
    
        fetchData();
    }, []);

    return (
        <>
            <div className="flex justify-center">
                <div className="max-w-full text-xs w-[1130px]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {singePosts?.map((category: any) => (
                            <Card
                                key={category.id}
                                image={category.media.url}
                                title={category.title}
                                postId={category.id}
                            />
                        ))}
                    </div>
                    <Pagination />
                </div>
            </div>

        </>
    );
};

export default CategoryList;