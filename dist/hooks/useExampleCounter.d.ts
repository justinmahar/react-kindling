/**
 * Simple counter hook used as an example. Returns the count and functions to increment and reset.
 */
declare const useExample: (
  initialValue?: number
) => {
  count: number;
  increment: () => void;
  reset: () => void;
};
export default useExample;
