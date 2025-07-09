import { useEffect, useRef } from 'react';

/**
 * A hook that wraps a function and debounces it. The debounced function is
 * only called after the specified amount of time has passed since the last
 * call to the function.
 *
 * @param func The function to debounce.
 * @param delay The time in milliseconds to wait before calling the function.
 * @returns The debounced function.
 */
export function useDebounce<T extends (...args: Parameters<T>) => void>(
    func: T,
    delay = 500,
): T {
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Clean up the timer when the component is unmounted
    useEffect(
        () => () => {
            if (!timer.current) return;
            clearTimeout(timer.current);
        },
        [],
    );

    return ((...args) => {
        // Create a new timer
        const newTimer = setTimeout(() => {
            func(...args);
        }, delay);
        // Clear the previous timer if it exists
        if (timer.current) clearTimeout(timer.current);
        // Set the new timer
        timer.current = newTimer;
    }) as T;
}
