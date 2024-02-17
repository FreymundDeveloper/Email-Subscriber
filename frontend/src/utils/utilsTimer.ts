export const handleTimeout = (timeout: number, setContent: (content: any) => void, content: any) => {
    const timer = setTimeout(() => {
        setContent(content);
    }, timeout);

    const clear = () => {
        clearTimeout(timer);
    };

    return clear;
};
