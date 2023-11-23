import { createSlice } from "@reduxjs/toolkit";

const genreReducer = createSlice({
  name: "genre",
  initialState: {
    arrayGenre: [
      ["Ação", "28"],
      ["Aventura", "12"],
      ["Animação", "16"],
      ["Comédia", "35"],
      ["Documentário", "99"],
      ["Drama", "18"],
      ["Terror", "27"],
      ["Romance", "10749"],
      ["Ficção", "878"],
      ["Guerra", "10752"],
      ["Séries"],
    ],
  },
});

export default genreReducer.reducer;
