import React from 'react';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import './Pagination.scss';


const Pagination = ({numPages, page, setPage}) => {

    return (
      <div className="pagination">
        <button className="btn"
          onClick={() => {
            let newPage = page - 1;
            newPage = newPage > 0 ? newPage : 1;
            setPage(newPage);
        }}> 
            <FaAngleLeft size="24px" />
        </button>
        
        Page {page} of {numPages}
        
        <button className="btn"
          onClick={() => {
            let newPage = page + 1;
            newPage = newPage > numPages ? numPages : newPage;
            setPage(newPage);
        }}>
            <FaAngleRight size="24px" />
        </button>
      </div>
    );
};

export default Pagination;