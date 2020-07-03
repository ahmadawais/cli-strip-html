/**
 * Cli Strip Html.
 *
 * Strip HTML in a JavaScript/Node.js string.
 *
 * @author Awais <https://twitter.com/MrAhmadAwais/>
 */
module.exports = (str = '') => {
	const html = /<\/?([a-z][a-z0-9]*)\b[^>]*>?/gi;
	const doubleSpace = /\s{2,}/g;
	return str.replace(html, '').replace(doubleSpace, ' ').trim();
};
