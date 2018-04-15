function getEvents (tx, filter) {
    const log = tx.logs;
    const events = _.filter(log, filter);
    return events;
}

function assertEvent(contract, filter) {
    return new Promise((resolve, reject) => {
        const event = contract[filter.event]();
        // event.watch, event.get, event.stopWatching
        // 在 web3 中也有對應的 function 來監聽區塊鏈上的事件
        event.watch();
        event.get((error, logs) => {
            const log = _.filter(logs, filter);
            if(!_.isEmpty(log)) {
                resolve(log);
            } else {
                reject(new Error('Failed to find filtered event for ' + filter.event));
            }
        });
        event.stopWatching();
    });
}