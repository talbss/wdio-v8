const WDIOReporter = require('@wdio/reporter').default

class myCustomReporter extends WDIOReporter {
    constructor(options) {
        super(options);
        console.log(`options: ${JSON.stringify(options)}`);
    }

    onRunnerStart(runnerStats) {
        console.log(`[onRunnerStart] runnerStats: ${JSON.stringify(runnerStats)}`);
    }

    onSuiteStart(suiteStats) {
        console.log(`[onSuiteStart] suiteStats: ${JSON.stringify(suiteStats)}`);
    }

    onTestStart(testStats) {
        console.log(`[onTestStart] testStats: ${JSON.stringify(testStats)}`);

    }

    onTestSkip(testStats) {
        console.log(`[onTestSkip] onTestSkip: ${JSON.stringify(testStats)}`);
    }

    onTestEnd(testStats) {
        console.log(`[onTestEnd] testStats: ${JSON.stringify(testStats)}`);
    }

    onSuiteEnd(suiteStats) {
        console.log(`[onSuiteEnd] suiteStats: ${JSON.stringify(suiteStats)}`);
    }

    onRunnerEnd(runnerStats) {
        console.log(`[onRunnerEnd] runnerStats: ${JSON.stringify(runnerStats)}`);
    }
}

exports.default = myCustomReporter