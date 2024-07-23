"use client"

import React, { useState, useEffect } from 'react';
import LexicalContent from './LexicalContent';
import axiosInstance from '../utils/axiosInstance';
import './style.css';
import cn from '../utils/cn';

const ShowRichText = () => {
    const [exampleNodes, setExampleNodes] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get('/single-post/669f2ac7d7b8249a22b2de98', {
                    params: {
                        locale: 'undefined',
                        draft: false,
                        depth: 1,
                    },
                });
                const data = response.data;
                setExampleNodes(data?.content.root.children);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <h1 className="text-2xl font-bold mb-4">This is Rich Text Preview</h1>
            <div className="prose">
                {exampleNodes && <LexicalContent
                    childrenNodes={exampleNodes}
                    locale="en-US"
                    className='custom-class'
                    lazyLoadImages={true}
                />}
            </div>
        </>
    );
};

export default ShowRichText;