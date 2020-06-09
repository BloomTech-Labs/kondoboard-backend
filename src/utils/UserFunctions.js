class UserFunctions {
	// Push array to database
	static userStringify(changes) {
		if (changes.skills) {
			changes.skills = JSON.stringify(changes.skills);
		}
		if (changes.locations) {
			changes.locations = JSON.stringify(changes.locations);
		}
		return changes;
	}
}

module.exports = UserFunctions;
