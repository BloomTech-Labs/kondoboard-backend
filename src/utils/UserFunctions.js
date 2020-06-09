class UserFunctions {
	// Push array to database
	static userStringify(changes) {
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
}

module.exports = UserFunctions;
