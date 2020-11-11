export default {
    throttle(fn, time) {
        let canRun = true
        return function () {
            if (!canRun) return
            canRun = false
            setTimeout(() => {
                this[fn]();
                canRun = true
            }, time);
        }
    }
}