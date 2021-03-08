function isValidEntry(a, b) {
  return b.every(
    (hire) =>
      hire.candidate >= 0 &&
      hire.candidate < n &&
      hire.company >= 0 &&
      hire.company < n
  );
}
