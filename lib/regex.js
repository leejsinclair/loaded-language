/**
 * Convert array of words into regular expression
 * @param  {String} listId    ID of words list
 * @param  {Array} wordsList Array of words
 * @return {RegEx}           Regular expression used for matching
 */
function _convertWordsToRegExp(wordsList) {
	var regStr = '',
		regExpression;
	// Do not use preset
	for (var i = 0; i < wordsList.length; i++) {
		if (typeof(wordsList[i]) === 'string' && wordsList[i].length > 0) {
			regStr += ((i !== 0) ? '|' : '') + wordsList[i];
		}
	}

	regStr = '\\b(' + regStr + ')\\b';


	regExpression = new RegExp(regStr, 'gmi');

	return regExpression;
}

module.exports = _convertWordsToRegExp;