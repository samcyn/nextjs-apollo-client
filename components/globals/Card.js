import React from 'react';
import Link from 'next/link';
import Moment from 'react-moment';
import { DelimeterHelper } from '../../utils';

const Card = ({ post: {id, title, description, createdAt }, min }) => (
  <div className="card">
    <div className="card__block">
      <h6 className="card__title title">
        <Link as={`/post/${id}`} href={`/post?id=${id}`}>
          <a>{title}</a>
        </Link>
      </h6>
      <p className="card__description description">{ min ? DelimeterHelper(description, 170) : description }</p>
      <small className="card__time">
        <Moment fromNow>{createdAt}</Moment>
      </small>
    </div>
  </div>
);

export default Card;