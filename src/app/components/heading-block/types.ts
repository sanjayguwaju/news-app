export type NewsItem = {
    imgSrc: string;
    title: string;
    author: string;
    date: string;
    comments: number;
};

export type ImageProps = {
    src: string;
    alt?: string;
    className?: string;
};