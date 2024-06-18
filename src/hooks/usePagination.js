import { useState } from "react";

export const usePagination = (data, itemsPerPage) => {
    
    const [actualPage, setActualPage] = useState(1);
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handleBackPage = () => {
        setActualPage((prevState) => prevState - 1);    
    };

    const handleNextPage = () => {
        setActualPage((prevState) => prevState + 1);
    };

    const getItemsPage = () => {
        const firstIndex = (actualPage - 1) * itemsPerPage;
        const lastIndex = actualPage * itemsPerPage;

        return data.slice(firstIndex, lastIndex);
    };

    return {
        actualPage,
        totalPages,
        handleBackPage,
        handleNextPage,
        getItemsPage,
    };
};
