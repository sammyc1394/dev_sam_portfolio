import { forwardRef } from "react";

function MenuItems({text}) {
    return <div className='nav-items'>{text}</div>;
}

export default forwardRef(MenuItems);