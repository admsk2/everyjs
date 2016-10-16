# everyjs
> v.0.1.0

The idea is to use it instead of '* * * * * *' when setting up CRON in nodeJS.

node-cron info:

[https://github.com/ncb000gt/node-cron](https://github.com/ncb000gt/node-cron)

### Important
This version does not cover patterns which are higher than the half of maximum value. For example, you can not set **CRON** every 45 minutes, 55 seconds, 15 hours, 7 months etc. This functionality is still in progress.

### Install
Include this piece of code into your project as follows:

```
var every = require('everyjs');
```

### About
Usually, node-cron is called following way:

```
var job = new CronJob('00 30 11 * * 1-5');
```
or
```
var job = new CronJob({
  cronTime: '00 30 11 * * 1-5'
});
```

You may find this pattern hard to understand, same as i had.

So with **everyjs** you can set up the _CronJob_ like:

```
var job = new CronJob(every(5, 'minutes'));
```
or
```
var job = new CronJob({
  cronTime: every(5, 'minutes')
});
```

Way more readable.

### Rules

You have following options to choose:

1. Seconds - **every(1-30, 'seconds')**
2. Minutes - **every(1-30, 'minutes')**
3. Hours - **every(1-12, 'hours')**
4. Days - **every(1-15, 'days')**
5. Months - **every(1-6, 'months')**
6. Days Of Week* - **every('monday')**

*look usage below, this one requires different method

The return of this method is a CRON pattern with proper rule. e.g. **'*/30 * * * * *'** for **every(30, 'seconds)**.

### Usage

Just remember to require the module at the beginning of your .js file.

```
every = require('everyjs').general // for options 1-5
```
or
```
every = require('everyjs').daysOfWeek // for option 6
```

**That is it. Hope it helps!**
