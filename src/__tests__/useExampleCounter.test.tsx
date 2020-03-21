import { act, renderHook } from '@testing-library/react-hooks';
import { useExampleCounter } from '../hooks/useExampleCounter';

// Learn how to test React hooks:
// https://react-hooks-testing-library.com/

describe('useExampleCounter hook', () => {
  test('should use counter', () => {
    const { result } = renderHook(() => useExampleCounter());
    expect(result.current.count).toBe(0);
    expect(typeof result.current.increment).toBe('function');
  });

  test('should increment counter', () => {
    const { result } = renderHook(() => useExampleCounter());
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });

  test('should reset counter to updated initial value', () => {
    const { result, rerender } = renderHook(({ initialValue }) => useExampleCounter(initialValue), {
      initialProps: { initialValue: 0 },
    });
    rerender({ initialValue: 10 });
    act(() => {
      result.current.reset();
    });
    expect(result.current.count).toBe(10);
  });
});
