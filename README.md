# loaded-language

Identifies terms that often create bias within textual content.  The inspiration for this project? I discussion on YouTube that included Eric R. Weinstein.

For more information [https://en.wikipedia.org/wiki/Emotive_conjugation](https://en.wikipedia.org/wiki/Emotive_conjugation), where the 

"In rhetoric, emotive or emotional conjugation mimics the form of a grammatical conjugation of an irregular verb to illustrate humans' tendency to describe their own behavior more charitably than the behavior of others. It is often called the Russell's conjugation in honour of philosopher Bertrand Russell who expounded the concept in 1948 on the BBC Radio programme The Brains Trust." ([https://en.wikipedia.org/wiki/Emotive_conjugation](https://en.wikipedia.org/wiki/Emotive_conjugation))

## Install

```
npm install loaded-language
```

## Usage

```
const loadedLangague = require('loaded-language');
let str = 'That person is a Socialist.';
let result = loadedLanguage(str); 
```

## Result

```
{
	"anger": {
		"matches": []
	},
	"charged": {
		"matches": [
			"socialist"
		]
	},
	"confusion": {
		"matches": []
	},
	"curiosity": {
		"matches": []
	},
	"happy": {
		"matches": []
	},
	"inspiration": {
		"matches": []
	},
	"inspire_action": {
		"matches": []
	},
	"lust": {
		"matches": []
	},
	"maybe": {
		"matches": []
	},
	"relaxed": {
		"matches": []
	},
	"safe": {
		"matches": []
	},
	"sexually_charged": {
		"matches": []
	},
	"urgency": {
		"matches": []
	}
}


```