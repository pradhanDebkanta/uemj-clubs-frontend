const throttle = (cb, delay = 1000) => {
    let shouldWait = false;
    let waitArgs;

    const timer=()=>{
        if(waitArgs===null){
            shouldWait = false;
        }else{
            cb(...waitArgs);
            waitArgs = null;
            setTimeout(timer, delay);
        }
    }

    return (...args) => {
        if (shouldWait) {
            waitArgs = args;
            return;
        }
        cb(...args);
        shouldWait = true;
        setTimeout(timer, delay);
    }
};

export default throttle;