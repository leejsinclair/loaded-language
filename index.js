const toRegex = require('to-regex');

const anger = toRegex( require('./lib/anger'), { 'contains': true, 'flags': 'gmi' } );
const charged = toRegex( require('./lib/charged'), { 'contains': true, 'flags': 'gmi' } );
const confusion = toRegex( require('./lib/confusion'), { 'contains': true, 'flags': 'gmi' } );
const curiosity = toRegex( require('./lib/curiosity'), { 'contains': true, 'flags': 'gmi' } );
const happy = toRegex( require('./lib/happy'), { 'contains': true, 'flags': 'gmi' } );
const inspiration = toRegex( require('./lib/inspiration'), { 'contains': true, 'flags': 'gmi' } );
const inspire_action = toRegex( require('./lib/inspire_action'), { 'contains': true, 'flags': 'gmi' } );
const lust = toRegex( require('./lib/lust'), { 'contains': true, 'flags': 'gmi' } );
const maybe = toRegex( require('./lib/maybe-charged'), { 'contains': true, 'flags': 'gmi' } );
const relaxed = toRegex( require('./lib/relaxed'), { 'contains': true, 'flags': 'gmi' } );
const safe = toRegex( require('./lib/safe'), { 'contains': true, 'flags': 'gmi' } );
const sexually_charged = toRegex( require('./lib/sexualy_charged'), { 'contains': true, 'flags': 'gmi' } );
const urgency = toRegex( require('./lib/urgency'), { 'contains': true, 'flags': 'gmi' } );

function _report( text ){
    return {
        'anger': { 
            'matches': (t.match(anger) || [])
        },
        'charged': { 
            'matches': (t.match(charged) || [])
        },
        'confusion': { 
            'matches': (t.match(confusion) || [])
        },
        'curiosity': { 
            'matches': (t.match(curiosity) || [])
        },
        'happy': { 
            'matches': (t.match(happy) || [])
        },
        'inspiration': { 
            'matches': (t.match(inspiration) || [])
        },
        'inspire_action': { 
            'matches': (t.match(inspire_action) || [])
        },
        'lust': { 
            'matches': (t.match(lust) || [] )
        },
        'maybe': { 
            'matches': (t.match(maybe) || [])
        },
        'relaxed': { 
            'matches': (t.match(relaxed) || [])
        },
        'safe': { 
            'matches': (t.match(safe) || [])
        },
        'sexually_charged': { 
            'matches': (t.match(sexually_charged) || [])
        },
        'urgency': { 
            'matches': (t.match(urgency) || [])
        }
    };
};

module.exports = _report;