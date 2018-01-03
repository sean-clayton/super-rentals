import { test } from 'qunit';
import moduleForAcceptance from 'super-rentals/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list rentals');

test('should show rentals as the home page', assert => {
  visit('/');
  andThen(() => {
    assert.equal(currentURL(), '/rentals', 'should redirect automatically')
  })
});

test('should link to information about the company', assert => {});

test('should link to contact information.', assert => {});

test('should list available rentals.', assert => {});

test('should filter the list of rentals by city', assert => {});

test('should show the details for a selected rental', assert => {});
