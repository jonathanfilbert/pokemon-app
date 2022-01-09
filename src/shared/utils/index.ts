// Turn a string into a title case
// cr: https://stackoverflow.com/a/196991
export const toTitleCase = (str: string) => str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
