
class UserFunctions {

	// Pull from database
	static async userParse(user) {
		user.skills = JSON.parse(user.skills);
      	user.locations = JSON.parse(user.locations);
		return user;
	}

	// Push to database
	static async userStringify(changes) {
		if (changes.skills) {changes.skills = JSON.stringify(changes.skills)};
    	if (changes.locations) {changes.locations = JSON.stringify(changes.locations)};
		return changes;
	}


}

module.exports = UserFunctions;
