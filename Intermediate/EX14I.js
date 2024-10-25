function throttle(func, delay) {
    let lastCall = 0;
    return function(...args) {
        const now = new Date().getTime();
        if (now - lastCall >= delay) {
            lastCall = now;
            func(...args);
        }
    };
}

let count = 0;
const updateClickCount = () => {
    document.getElementById("result").textContent = `Clicks: ${++count}`;
};

document.getElementById("throttleButton").addEventListener(
    "click",
    throttle(updateClickCount, 1000)
);
