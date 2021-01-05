import React, { useState } from "react";
import cx from 'classnames';
import SearchIcon from "../../images/search.png";
import './style.scss';

interface Props { }

const Search: React.FC<Props> = () => {
    const [isSearchOpen, setSearchOpen] = useState(false);

    const onClickSearch = () => {
        setSearchOpen(!isSearchOpen);
    }

    return (
        <div className={cx(
            "search__wrapper",
            { 'search__wrapper--active': isSearchOpen }
        )}>
            <input className="search__input" />
            <button onClick={onClickSearch} className="search__icon">
                <img src={SearchIcon} alt="search" />
            </button>
        </div>
    );
};

export default Search;