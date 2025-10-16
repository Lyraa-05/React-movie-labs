// import React, { useContext } from "react";
// import PageTemplate from "../components/templateMovieListPage";
// import { MoviesContext } from "../contexts/moviesContext";
// import { useQueries } from "@tanstack/react-query";
// import { getMovie } from "../api/tmdb-api";
// import Spinner from '../components/spinner'

// const MustWatchPage = () => {
//     const {playlists: movieIds} = useContext(MoviesContext);

//     const mustWatchQueries = useQueries({
//         queries: movieIds.map((movieId) => {
//             return {
//                 queryKey: ['movie', {id: movieId}],
//                 queryFn: getMovie,
//             }
//         })
//     });

//     const isPending = mustWatchQueries.find((m) => m.isPending === true);

//     if (isPending) {
//         return <Spinner />;
//     }

//     const playlists = mustWatchQueries.map((q) => {
//         q.data.genre_ids = q.data.genres.map(g => g.id)
//         return q.data
//     });

//     const toDo = () => true;

//     return (
//         <PageTemplate
//             title="Must Watch"
//             playlists={movies}
//             />
//     );
// };

// export default MustWatchPage;
