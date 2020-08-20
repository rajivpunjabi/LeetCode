/**
 *
 * 709. To Lower Case [Easy]
 * https://leetcode.com/problems/to-lower-case/
 *
 * Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.
 *
 * Example 1:
 * Input: "Hello"
 * Output: "hello"
 *
 * Example 2:
 * Input: "here"
 * Output: "here"
 *
 * Example 3:
 * Input: "LOVELY"
 * Output: "lovely"
 *
 */

function toLowerCase(str: string): string {
	let result = '';
	for (let i = 0; i < str.length; i++) {
		let code = str.charCodeAt(i);
		if (code >= 65 && code <= 90) {
			result += String.fromCharCode(code + 32);
		} else {
			result += str[i];
		}
	}
	return result;
}

console.log(toLowerCase('Hello'));
console.log(toLowerCase('here'));
console.log(toLowerCase('LOVELY'));
