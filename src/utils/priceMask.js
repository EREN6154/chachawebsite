// Hides the exact number but keeps the general shape (hundreds vs thousands)
// so browsing still communicates roughly which tier a tour falls in,
// while pushing the visitor to actually ask for a quote.
export function maskPrice(price) {
  return price >= 1000 ? "X999" : "X99";
}
