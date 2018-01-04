import { test } from "qunit";
import moduleForAcceptance from "super-rentals/tests/helpers/module-for-acceptance";

moduleForAcceptance("Acceptance | list rentals");

test("should show rentals as the home page", assert => {
  visit("/");
  andThen(() => {
    assert.equal(currentURL(), "/rentals", "should redirect automatically");
  });
});

test("should link to information about the company", assert => {
  visit("/");
  click('a:contains("About")');
  andThen(() => {
    assert.equal(currentURL(), "/about", "should navigate to about page");
  });
});

test("should link to contact information.", assert => {
  visit("/");
  click('a:contains("Contact")');
  andThen(() => {
    assert.equal(currentURL(), "/contact", "should navigate to contact page");
  });
});

test("should list available rentals.", assert => {
  visit("/");
  andThen(() => {
    assert.equal(find(".listing").length, 3, "should see 3 listings");
  });
});

test("should filter the list of rentals by city", assert => {
  visit("/");
  fillIn(".list-filter input", "Seattle");
  keyEvent(".list-filter input", "keyup", 69);
  andThen(() => {
    assert.equal(find(".listing").length, 1, "should show 1 listing");
    assert.equal(
      find('.listing .location:contains("Seattle")').length,
      1,
      "should show only 1 listing with Seattle"
    );
  });
});

test("should show the details for a selected rental", () => {});
