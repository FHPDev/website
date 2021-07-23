import { useState, useCallback } from 'react';

const UseNavigation = () => {
    const [subnavOpen, setSubnavOpen] = useState(false);
    const toggler = useCallback(() => setSubnavOpen(!subnavOpen), [subnavOpen]);


    return [subnavOpen, toggler];
};

export default UseNavigation;
