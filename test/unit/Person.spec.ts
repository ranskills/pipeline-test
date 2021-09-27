import test, { Test } from 'tape';
import { Person } from '../../src/model/Person';

test('Person', function (t: Test) {
  let person = new Person('Bond', '');
  t.equal(person.name, 'Bond');

  person = new Person('Bond', 'Bond');
  t.equal(person.name, 'Bond');

  t.end();
});
