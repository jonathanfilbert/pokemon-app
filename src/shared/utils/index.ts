// Turn a string into a title case
// cr: https://stackoverflow.com/a/196991
const titleCase = (str: string) => str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );

export const toTitleCase = (str:string) => str
.split("_").map((word) => titleCase(word)).join(" ")

// Pokemon types colors
// cr: https://gist.github.com/apaleslimghost/0d25ec801ca4fc43317bcff298af43c3
  const colours = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
  }

  export const getColorByType = (type:string):string => colours[type] || "#777";

export const THEMES = {
  color: {
    primary: '#18a522',
    secondary: "#d6ffdf",
    tertiary: "white",
    muted: "gray",
    error: "red",
  }
}
