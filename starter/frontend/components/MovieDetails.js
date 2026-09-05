import React from 'react';

export default function MovieDetails({ movie }) {
  return (
    <div>
      <p>ID: {movie.id}</p>
      <p>Title: {movie.title}</p>
    </div>
  );
}
