type AnyFunction = (...args: any[]) => any;

export function debounce<F extends AnyFunction>(func: F, delay: number): (...args: Parameters<F>) => void {
    let timeoutId: ReturnType<typeof setTimeout>;

    return function (this: ThisParameterType<F>, ...args: Parameters<F>): void {
        const context = this;

        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
}