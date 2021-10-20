"use strict";

// example from the docs
describe('My First Test', function () {
  it('Does not do much!', function () {
    expect(true).to.equal(true);
  });
}); // my actual first test - does the page load

describe('The main page loads', function () {
  it('successfully loads', function () {
    cy.visit('http://127.0.0.1:5500/index.html');
  });
}); // testing basic operations

describe('Basic Calculator Operations', function () {
  it('checks 7 + 2 equals 9', function () {
    // Arrange
    cy.visit('http://127.0.0.1:5500/index.html'); // Act

    cy.get("[data-cy=seven]").click();
    cy.get("[data-cy=add]").click();
    cy.get("[data-cy=two]").click();
    cy.get("[data-cy=equalTo]").click(); // Assert

    cy.get("[data-cy=output]").contains(9);
  });
});
describe('Basic Calculator Operations', function () {
  it('checks 72 + 27 equals 99', function () {
    // Arrange
    cy.visit('http://127.0.0.1:5500/index.html'); // Act

    cy.get("[data-cy=seven]").click();
    cy.get("[data-cy=two]").click();
    cy.get("[data-cy=add]").click();
    cy.get("[data-cy=two]").click();
    cy.get("[data-cy=seven]").click();
    cy.get("[data-cy=equalTo]").click(); // Assert

    cy.get("[data-cy=output]").contains(99);
  });
});
describe('Basic Calculator Operations', function () {
  it('checks 772 + 279 equals 1,051', function () {
    // Arrange
    cy.visit('http://127.0.0.1:5500/index.html'); // Act

    cy.get("[data-cy=seven]").click();
    cy.get("[data-cy=seven]").click();
    cy.get("[data-cy=two]").click();
    cy.get("[data-cy=add]").click();
    cy.get("[data-cy=two]").click();
    cy.get("[data-cy=seven]").click();
    cy.get("[data-cy=nine]").click();
    cy.get("[data-cy=equalTo]").click(); // Assert

    cy.get("[data-cy=output]").contains('1,051');
  });
});
describe('Basic Calculator Operations', function () {
  it('checks 5 - 4 equals 1', function () {
    // Arrange
    cy.visit('http://127.0.0.1:5500/index.html'); // Act

    cy.get("[data-cy=five]").click();
    cy.get("[data-cy=subtract]").click();
    cy.get("[data-cy=four]").click();
    cy.get("[data-cy=equalTo]").click(); // Assert

    cy.get("[data-cy=output]").contains(1);
  });
});
describe('Basic Calculator Operations', function () {
  it('checks 55 - 44 equals 11', function () {
    // Arrange
    cy.visit('http://127.0.0.1:5500/index.html'); // Act

    cy.get("[data-cy=five]").click();
    cy.get("[data-cy=five]").click();
    cy.get("[data-cy=subtract]").click();
    cy.get("[data-cy=four]").click();
    cy.get("[data-cy=four]").click();
    cy.get("[data-cy=equalTo]").click(); // Assert

    cy.get("[data-cy=output]").contains(11);
  });
});
describe('Basic Calculator Operations', function () {
  it('checks 555 - 444 equals 111', function () {
    // Arrange
    cy.visit('http://127.0.0.1:5500/index.html'); // Act

    cy.get("[data-cy=five]").click();
    cy.get("[data-cy=five]").click();
    cy.get("[data-cy=five]").click();
    cy.get("[data-cy=five]").click();
    cy.get("[data-cy=subtract]").click();
    cy.get("[data-cy=four]").click();
    cy.get("[data-cy=four]").click();
    cy.get("[data-cy=four]").click();
    cy.get("[data-cy=equalTo]").click(); // Assert

    cy.get("[data-cy=output]").contains(111);
  });
});
describe('Basic Calculator Operations', function () {
  it('checks 8 x 4 equals 32', function () {
    // Arrange
    cy.visit('http://127.0.0.1:5500/index.html'); // Act

    cy.get("[data-cy=eight]").click();
    cy.get("[data-cy=multiply]").click();
    cy.get("[data-cy=four]").click();
    cy.get("[data-cy=equalTo]").click(); // Assert

    cy.get("[data-cy=output]").contains(32);
  });
});
describe('Basic Calculator Operations', function () {
  it('checks 88 x 44 equals 3,872', function () {
    // Arrange
    cy.visit('http://127.0.0.1:5500/index.html'); // Act

    cy.get("[data-cy=eight]").click();
    cy.get("[data-cy=eight]").click();
    cy.get("[data-cy=multiply]").click();
    cy.get("[data-cy=four]").click();
    cy.get("[data-cy=four]").click();
    cy.get("[data-cy=equalTo]").click(); // Assert

    cy.get("[data-cy=output]").contains('3,872');
  });
});
describe('Basic Calculator Operations', function () {
  it('checks 888 x 444 equals 3,94,272', function () {
    // Arrange
    cy.visit('http://127.0.0.1:5500/index.html'); // Act

    cy.get("[data-cy=eight]").click();
    cy.get("[data-cy=eight]").click();
    cy.get("[data-cy=eight]").click();
    cy.get("[data-cy=multiply]").click();
    cy.get("[data-cy=four]").click();
    cy.get("[data-cy=four]").click();
    cy.get("[data-cy=four]").click();
    cy.get("[data-cy=equalTo]").click(); // Assert

    cy.get("[data-cy=output]").contains('3,94,272');
  });
});
describe('Basic Calculator Operations', function () {
  // Arrange
  it('checks 9 ÷ 3 equals 3', function () {
    cy.visit('http://127.0.0.1:5500/index.html'); // Act

    cy.get("[data-cy=nine]").click();
    cy.get("[data-cy=divide]").click();
    cy.get("[data-cy=three]").click();
    cy.get("[data-cy=equalTo]").click(); // Assert

    cy.get("[data-cy=output]").contains(3);
  });
});
describe('Basic Calculator Operations', function () {
  // Arrange
  it('checks % of 3 equals 0.03', function () {
    cy.visit('http://127.0.0.1:5500/index.html'); // Act

    cy.get("[data-cy=three]").click();
    cy.get("[data-cy=percentage]").click();
    cy.get("[data-cy=equalTo]").click(); // Assert

    cy.get("[data-cy=output]").contains(0.03);
  });
});
describe('Basic Calculator Operations - simple chain', function () {
  it('checks 8 + 4 -2  equals 10', function () {
    // Arrange
    cy.visit('http://127.0.0.1:5500/index.html'); // Act

    cy.get("[data-cy=eight]").click();
    cy.get("[data-cy=add]").click();
    cy.get("[data-cy=four]").click();
    cy.get("[data-cy=subtract]").click();
    cy.get("[data-cy=two]").click();
    cy.get("[data-cy=equalTo]").click(); // Assert

    cy.get("[data-cy=output]").contains(10);
  });
});
describe('Basic Calculator Operations - simple chain', function () {
  it('checks 8 x 4 / 2  equals 16', function () {
    // Arrange
    cy.visit('http://127.0.0.1:5500/index.html'); // Act

    cy.get("[data-cy=eight]").click();
    cy.get("[data-cy=multiply]").click();
    cy.get("[data-cy=four]").click();
    cy.get("[data-cy=divide]").click();
    cy.get("[data-cy=two]").click();
    cy.get("[data-cy=equalTo]").click(); // Assert

    cy.get("[data-cy=output]").contains(16);
  });
});