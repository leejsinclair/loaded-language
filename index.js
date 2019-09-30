const convertArrayToRegex = require('./lib/regex.js');
const offensive = require('offensivewords');

const anger = convertArrayToRegex(require('./lib/anger'), { 'contains': true, 'flags': 'gmi' });
const charged = convertArrayToRegex(require('./lib/charged'), { 'contains': true, 'flags': 'gmi' });
const confusion = convertArrayToRegex(require('./lib/confusion'), { 'contains': true, 'flags': 'gmi' });
const curiosity = convertArrayToRegex(require('./lib/curiosity'), { 'contains': true, 'flags': 'gmi' });
const happy = convertArrayToRegex(require('./lib/happy'), { 'contains': true, 'flags': 'gmi' });
const inspiration = convertArrayToRegex(require('./lib/inspiration'), { 'contains': true, 'flags': 'gmi' });
const inspire_action = convertArrayToRegex(require('./lib/inspire_action'), { 'contains': true, 'flags': 'gmi' });
const lust = convertArrayToRegex(require('./lib/lust'), { 'contains': true, 'flags': 'gmi' });
const maybe = convertArrayToRegex(require('./lib/maybe-charged'), { 'contains': true, 'flags': 'gmi' });
const relaxed = convertArrayToRegex(require('./lib/relaxed'), { 'contains': true, 'flags': 'gmi' });
const safe = convertArrayToRegex(require('./lib/safe'), { 'contains': true, 'flags': 'gmi' });
const sexually_charged = convertArrayToRegex(require('./lib/sexualy_charged'), { 'contains': true, 'flags': 'gmi' });
const urgency = convertArrayToRegex(require('./lib/urgency'), { 'contains': true, 'flags': 'gmi' });

function _report(text) {
    text = text.toLowerCase();
    const off = offensive(text);
    return {
        'anger': {
            'matches': makeUnique(text.match(anger) || [])
        },
        'charged': {
            'matches': makeUnique(text.match(charged) || [])
        },
        'confusion': {
            'matches': makeUnique(text.match(confusion) || [])
        },
        'curiosity': {
            'matches': makeUnique(text.match(curiosity) || [])
        },
        'happy': {
            'matches': makeUnique(text.match(happy) || [])
        },
        'inspiration': {
            'matches': makeUnique(text.match(inspiration) || [])
        },
        'inspire_action': {
            'matches': makeUnique(text.match(inspire_action) || [])
        },
        'lust': {
            'matches': makeUnique(text.match(lust) || [])
        },
        'maybe': {
            'matches': makeUnique(text.match(maybe) || [])
        },
        'relaxed': {
            'matches': makeUnique(text.match(relaxed) || [])
        },
        'safe': {
            'matches': makeUnique(text.match(safe) || [])
        },
        'sexually_charged': {
            'matches': makeUnique(text.match(sexually_charged) || [])
        },
        'urgency': {
            'matches': makeUnique(text.match(urgency) || [])
        },
        'offensive': {
            'matches': makeUnique(off && off.offensive ? off.offensive : [])
        }
    };
};

function makeUnique(arr) {
    return arr.filter((el, i, a) => i === a.indexOf(el));
}

module.exports = _report;