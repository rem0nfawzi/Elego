export default (value, rules) => {
  let error;
  for (let rule of rules)
    switch (rule) {
      case "NOT_EMPTY":
        if (value.length === 0) {
          error = "Empty Field";
          break;
        }
      default:
        return true;
    }
  return error;
};
