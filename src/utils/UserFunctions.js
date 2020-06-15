class UserFunctions {
	// Push array to database
	static userStringify(changes) {
		console.log(changes);
		// users table
		if (changes.skills) {
			changes.skills = JSON.stringify(changes.skills);
		}
		if (changes.states) {
			changes.states = JSON.stringify(changes.states);
		}
		if (changes.cities) {
			changes.cities = JSON.stringify(changes.cities);
		}
		return changes;
	}
	static tagsStringify(tags) {
		tags = JSON.stringify(tags);
		return tags;
	}
}

module.exports = UserFunctions;
