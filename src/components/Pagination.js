import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nextPage } from '../actions/actorActions';
import './Pagination.scss';

const Pagination = () => {
  const dispatch = useDispatch();
  const actorData = useSelector((state) => state.actorData);
  const { person, keywords } = actorData;
  const { page, total_pages } = person;

  const pageLinks = [];
  // value of  5 returns first 100 results from API, could use prop
  const numPages = total_pages < 6 ? total_pages : 5;

  for (let i = 1; i <= numPages; i++) {
    let active = i === page ? 'active' : '';
    pageLinks.push(
      <li
        className={`pag-item ${active}`}
        key={i}
        onClick={() => dispatch(nextPage(keywords, i))}
      >
        <a href='#!'>{i}</a>
      </li>
    );
  }

  return (
    <section className='pagination'>
      <ul className='pag-list'>
        {page > 1 && (
          <li
            className='pag-item prev-next'
            onClick={() => dispatch(nextPage(keywords, page - 1))}
          >
            <a href='#!'>PREV</a>
          </li>
        )}
        {pageLinks}
        {page < numPages && (
          <li
            className='pag-item prev-next'
            onClick={() => dispatch(nextPage(keywords, page + 1))}
          >
            <a href='#!'>NEXT</a>
          </li>
        )}
      </ul>
    </section>
  );
};

export default Pagination;
