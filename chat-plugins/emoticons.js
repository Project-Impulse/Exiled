/*
Emoticon plugin
This plugin allows you to use emoticons in both chat rooms (as long as they are enabled in the room) and private messages.
*/
'use strict';

const fs = require('fs');
let emoticons = {
	'feelscri': 'http://i.imgur.com/QAuUW7u.jpg',
	'facepalm': 'http://i.imgur.com/lv3GmpM.png',
	'feelscool': 'http://i.imgur.com/qdGngVl.jpg',
	'feelsbd': 'http://i.imgur.com/YyEdmwX.png',
	'feelswtf': 'http://i.imgur.com/BzZJedC.jpg',
	'feelsdd': 'http://i.imgur.com/fXtdLtV.png',
	'feelsgd': 'http://i.imgur.com/Jf0n4BL.png',
	'feelscrazy': 'http://i.imgur.com/NiJsT5W.png',
	'fukya': 'http://i.imgur.com/ampqCZi.gif',
	'fukno': 'http://i.imgur.com/QjQTx9W.png',
	'funnylol': 'http://i.imgur.com/SlzCghq.png',
	'hmmface': 'http://i.imgur.com/Z5lOwfZ.png',
	'noface': 'http://i.imgur.com/H744eRE.png',
	'Obama': 'http://i.imgur.com/rBA9M7A.png',
	'oshet': 'http://i.imgur.com/yr5DjuZ.png',
        'wtfman': 'http://i.imgur.com/kwR8Re9.png',
	'xaa': 'http://i.imgur.com/V728AvL.png',
	'yayface': 'http://i.imgur.com/anY1jf8.png',
	'trollface': 'http://cdn.overclock.net/a/a0/50x50px-ZC-a0e3f9a7_troll-troll-face.png',
	'feelsevil': 'http://i.imgur.com/OPmBOeJ.jpg',
};
let emoteRegex = new RegExp('feelsbd', 'g');
Exiled.ignoreEmotes = {};
try {
	Exiled.ignoreEmotes = JSON.parse(fs.readFileSync('config/ignoreemotes.json', 'utf8'));
} catch (e) {}

function loadEmoticons() {
	try {
		emoticons = JSON.parse(fs.readFileSync('config/emoticons.json', 'utf8'));
		emoteRegex = [];
		for (let emote in emoticons) {
			emoteRegex.push(escapeRegExp(emote));
		}
		emoteRegex = new RegExp('(' + emoteRegex.join('|') + ')', 'g');
	} catch (e) {}
}
loadEmoticons();

function saveEmoticons() {
	fs.writeFileSync('config/emoticons.json', JSON.stringify(emoticons));
	emoteRegex = [];
	for (let emote in emoticons) {
		emoteRegex.push(emote);
	}
	emoteRegex = new RegExp('(' + emoteRegex.join('|') + ')', 'g');
}

function parseEmoticons(message) {
	if (emoteRegex.test(message)) {
		message = Exiled.parseMessage(message).replace(emoteRegex, function (match) {
			return '<img src="' + emoticons[match] + '" title="' + match + '" height="50" width="50">';
		});
		return message;
	}
	return false;
}
Exiled.parseEmoticons = parseEmoticons;

exports.commands = {
	blockemote: 'ignoreemotes',
	blockemotes: 'ignoreemotes',
	blockemoticon: 'ignoreemotes',
	blockemoticons: 'ignoreemotes',
	ignoreemotes: function (target, room, user) {
		this.parse('/emoticons ignore');
	},

	unblockemote: 'unignoreemotes',
	unblockemotes: 'unignoreemotes',
	unblockemoticon: 'unignoreemotes',
	unblockemoticons: 'unignoreemotes',
	unignoreemotes: function (target, room, user) {
		this.parse('/emoticons unignore');
	},

	emoticons: 'emoticon',
	emote: 'emoticon',
	emotes: 'emoticon',
	emoticon: function (target, room, user) {
		if (!target) target = 'help';
		let parts = target.split(',');
		for (let u in parts) parts[u] = parts[u].trim();

		switch (parts[0]) {
		case 'add':
			if (!this.can('roomowner')) return false;
			if (!parts[2]) return this.sendReply("Usage: /emoticon add, [name], [url] - Remember to resize the image first! (recommended 50x50)");
			if (emoticons[parts[1]]) return this.sendReply("\"" + parts[1] + "\" is already an emoticon.");
			emoticons[parts[1]] = parts[2];
			saveEmoticons();
			this.sendReply('|raw|The emoticon "' + Chat.escapeHTML(parts[1]) + '" has been added: <img src="' + parts[2] + '">');
			Rooms('upperstaff').add('|raw|' + Exiled.nameColor(user.name, true) + ' has added the emote "' + Chat.escapeHTML(parts[1]) +
				'": <img width="50" height="50" src="' + parts[2] + '">').update();
			Exiled.messageSeniorStaff('/html ' + Exiled.nameColor(user.name, true) + ' has added the emote "' + Chat.escapeHTML(parts[1]) +
				'": <img width="50" height="50" src="' + parts[2] + '">');
			break;

		case 'delete':
		case 'remove':
		case 'rem':
		case 'del':
			if (!this.can('roomowner')) return false;
			if (!parts[1]) return this.sendReply("Usage: /emoticon del, [name]");
			if (!emoticons[parts[1]]) return this.sendReply("The emoticon \"" + parts[1] + "\" does not exist.");
			delete emoticons[parts[1]];
			saveEmoticons();
			this.sendReply("The emoticon \"" + parts[1] + "\" has been removed.");
			break;

		case 'on':
		case 'enable':
		case 'disable':
		case 'off':
			if (!this.can('roommod', null, room)) return this.sendReply('Access denied.');
			let status = ((parts[0] !== 'enable' && parts[0] !== 'on'));
			if (room.disableEmoticons === status) return this.sendReply("Emoticons are already " + (status ? "disabled" : "enabled") + " in this room.");
			room.disableEmoticons = status;
			room.chatRoomData.disableEmoticons = status;
			Rooms.global.writeChatRoomData();
			this.privateModCommand('(' + user.name + ' ' + (status ? ' disabled ' : ' enabled ') + 'emoticons in this room.)');
			break;

		case 'view':
		case 'list':
			if (!this.runBroadcast()) return;
			let reply = "<b><u>Emoticons (" + Object.keys(emoticons).length + ")</u></b><br />";
			for (let emote in emoticons) reply += "(" + emote + " <img src=\"" + emoticons[emote] + "\" height=\"50\" width=\"50\">) ";
			this.sendReply('|raw|<div class="infobox infobox-limited">' + reply + '</div>');
			break;

		case 'ignore':
			if (Exiled.ignoreEmotes[user.userid]) return this.errorReply("You are already ignoring emoticons.");
			Exiled.ignoreEmotes[user.userid] = true;
			fs.writeFileSync('config/ignoreemotes.json', JSON.stringify(Exiled.ignoreEmotes));
			this.sendReply("You are now ignoring emoticons.");
			break;

		case 'unignore':
			if (!Exiled.ignoreEmotes[user.userid]) return this.errorReply("You aren't ignoring emoticons.");
			delete Exiled.ignoreEmotes[user.userid];
			fs.writeFileSync('config/ignoreemotes.json', JSON.stringify(Exiled.ignoreEmotes));
			this.sendReply("You are no longer ignoring emoticons.");
			break;

		default:
		case 'help':
			if (!this.runBroadcast()) return;
			this.sendReplyBox(
				"Emoticon Commands:<br />" +
				"<small>/emoticon may be substituted with /emoticons, /emotes, or /emote</small><br />" +
				"/emoticon add, [name], [url] - Adds an emoticon.<br />" +
				"/emoticon del/delete/remove/rem, [name] - Removes an emoticon.<br />" +
				"/emoticon enable/on/disable/off - Enables or disables emoticons in the current room.<br />" +
				"/emoticon view/list - Displays the list of emoticons.<br />" +
				"/emoticon ignore - Ignores emoticons in chat messages.<br />" +
				"/emoticon unignore - Unignores emoticons in chat messages.<br />" +
				"/emoticon help - Displays this help command.<br />" +
				"<a href=\"https://gist.github.com/jd4564/ef66ecc47c58b3bb06ec\">Emoticon Plugin by: jd</a>"
			);
			break;
		}
	},
	randemote: function (target, room, user, connection) {
		if (!this.canTalk()) return;
		let e = Object.keys(emoticons)[Math.floor(Math.random() * Object.keys(emoticons).length)];
		return this.parse(e);
	},
};

function escapeRegExp(str) {
	return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
