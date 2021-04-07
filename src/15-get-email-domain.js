/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  // throw new Error('Not implemented');
  // return email.match(/@[a-z]+.[a-z]+$/)
  // return email.split(/[a-z0-9]+@/);
  // return email.replace(/[a-z0-9]+@/, '');
  // return email.replace(/.+@/g, '');
  return email.replace(/[a-z0-9._-]+@/g, '');
}

module.exports = getEmailDomain;
