var request = require('request');

describe("a simple test suite", function() {
	it("should repond with 'Hello Niket!'", function(done) {
		request("http://localhost:3000/name/Niket", function(error, response, body) {
			expect(body).toEqual("Hello Niket!\n\n");
			done();
		});
	});
});