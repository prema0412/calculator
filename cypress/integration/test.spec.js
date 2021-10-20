// example from the docs
describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    })
  })
  
  // my actual first test - does the page load
  describe('The main page loads', () => {
    it('successfully loads', () => {
      cy.visit('http://127.0.0.1:5500/index.html')
    }) 
  })
  
  
  // testing basic operations
  describe('Basic Calculator Operations', () => {
    it('checks 7 + 2 equals 9', () => {
      // Arrange
      cy.visit('http://127.0.0.1:5500/index.html')
  
      // Act
      cy.get("[data-cy=seven]").click();
      cy.get("[data-cy=add]").click();
      cy.get("[data-cy=two]").click();
      cy.get("[data-cy=equalTo]").click();
  
      // Assert
      cy.get("[data-cy=output]").contains(9);
    }) 
  })

  describe('Basic Calculator Operations', () => {
    it('checks 72 + 27 equals 99', () => {
      // Arrange
      cy.visit('http://127.0.0.1:5500/index.html')
  
      // Act
      cy.get("[data-cy=seven]").click();
      cy.get("[data-cy=two]").click();
      cy.get("[data-cy=add]").click();
      cy.get("[data-cy=two]").click();
      cy.get("[data-cy=seven]").click();
      cy.get("[data-cy=equalTo]").click();
  
      // Assert
      cy.get("[data-cy=output]").contains(99);
    }) 
  })

  describe('Basic Calculator Operations', () => {
    it('checks 772 + 279 equals 1,051', () => {
      // Arrange
      cy.visit('http://127.0.0.1:5500/index.html')
  
      // Act
      cy.get("[data-cy=seven]").click();
      cy.get("[data-cy=seven]").click();
      cy.get("[data-cy=two]").click();
      cy.get("[data-cy=add]").click();
      cy.get("[data-cy=two]").click();
      cy.get("[data-cy=seven]").click();
      cy.get("[data-cy=nine]").click();
      cy.get("[data-cy=equalTo]").click();
  
      // Assert
      cy.get("[data-cy=output]").contains('1,051');
    }) 
  })

  describe('Basic Calculator Operations', () => {
    it('checks 5 - 4 equals 1', () => {
      // Arrange
      cy.visit('http://127.0.0.1:5500/index.html')
  
      // Act
      cy.get("[data-cy=five]").click();
      cy.get("[data-cy=subtract]").click();
      cy.get("[data-cy=four]").click();
      cy.get("[data-cy=equalTo]").click();
  
      // Assert
      cy.get("[data-cy=output]").contains(1);
    }) 
  })

  describe('Basic Calculator Operations', () => {
    it('checks 55 - 44 equals 11', () => {
      // Arrange
      cy.visit('http://127.0.0.1:5500/index.html')
  
      // Act
      cy.get("[data-cy=five]").click();
      cy.get("[data-cy=five]").click();
      cy.get("[data-cy=subtract]").click();
      cy.get("[data-cy=four]").click();
      cy.get("[data-cy=four]").click();
      cy.get("[data-cy=equalTo]").click();
  
      // Assert
      cy.get("[data-cy=output]").contains(11);
    }) 
  })

  describe('Basic Calculator Operations', () => {
    it('checks 555 - 444 equals 111', () => {
      // Arrange
      cy.visit('http://127.0.0.1:5500/index.html')
  
      // Act
      cy.get("[data-cy=five]").click();
      cy.get("[data-cy=five]").click();
      cy.get("[data-cy=five]").click();
      cy.get("[data-cy=five]").click();
      cy.get("[data-cy=subtract]").click();
      cy.get("[data-cy=four]").click();
      cy.get("[data-cy=four]").click();
      cy.get("[data-cy=four]").click();
      cy.get("[data-cy=equalTo]").click();
  
      // Assert
      cy.get("[data-cy=output]").contains(111);
    }) 
  })

  

  describe('Basic Calculator Operations', () => {
    it('checks 8 x 4 equals 32', () => {
      // Arrange
      cy.visit('http://127.0.0.1:5500/index.html')
  
      // Act
      cy.get("[data-cy=eight]").click();
      cy.get("[data-cy=multiply]").click();
      cy.get("[data-cy=four]").click();
      cy.get("[data-cy=equalTo]").click();
  
      // Assert
      cy.get("[data-cy=output]").contains(32);
    }) 
  })

  describe('Basic Calculator Operations', () => {
    it('checks 88 x 44 equals 3,872', () => {
      // Arrange
      cy.visit('http://127.0.0.1:5500/index.html')
  
      // Act
      cy.get("[data-cy=eight]").click();
      cy.get("[data-cy=eight]").click();
      cy.get("[data-cy=multiply]").click();
      cy.get("[data-cy=four]").click();
      cy.get("[data-cy=four]").click();
      cy.get("[data-cy=equalTo]").click();
  
      // Assert
      cy.get("[data-cy=output]").contains('3,872');
    }) 
  })

  describe('Basic Calculator Operations', () => {
    it('checks 888 x 444 equals 3,94,272', () => {
      // Arrange
      cy.visit('http://127.0.0.1:5500/index.html')
  
      // Act
      cy.get("[data-cy=eight]").click();
      cy.get("[data-cy=eight]").click();
      cy.get("[data-cy=eight]").click();
      cy.get("[data-cy=multiply]").click();
      cy.get("[data-cy=four]").click();
      cy.get("[data-cy=four]").click();
      cy.get("[data-cy=four]").click();
      cy.get("[data-cy=equalTo]").click();
  
      // Assert
      cy.get("[data-cy=output]").contains('3,94,272');
    }) 
  })

  describe('Basic Calculator Operations', () => {
    // Arrange
    
    it('checks 9 ÷ 3 equals 3', () => {
      cy.visit('http://127.0.0.1:5500/index.html')
  
      // Act
      cy.get("[data-cy=nine]").click();
      cy.get("[data-cy=divide]").click();
      cy.get("[data-cy=three]").click();
      cy.get("[data-cy=equalTo]").click();
  
      // Assert
      cy.get("[data-cy=output]").contains(3);
    }) 
  })

  describe('Basic Calculator Operations', () => {
    // Arrange
    
    it('checks % of 3 equals 0.03', () => {
      cy.visit('http://127.0.0.1:5500/index.html')
  
      // Act
      cy.get("[data-cy=three]").click();
      cy.get("[data-cy=percentage]").click();
      cy.get("[data-cy=equalTo]").click();
  
      // Assert
      cy.get("[data-cy=output]").contains(0.03);
    }) 
  })

  describe('Basic Calculator Operations - simple chain', () => {
    it('checks 8 + 4 -2  equals 10', () => {
      // Arrange
      cy.visit('http://127.0.0.1:5500/index.html')
  
      // Act
      cy.get("[data-cy=eight]").click();
      cy.get("[data-cy=add]").click();
      cy.get("[data-cy=four]").click();
      cy.get("[data-cy=subtract]").click();
      cy.get("[data-cy=two]").click();
      cy.get("[data-cy=equalTo]").click();
  
      // Assert
      cy.get("[data-cy=output]").contains(10);
    }) 
  })

  describe('Basic Calculator Operations - simple chain', () => {
    it('checks 8 x 4 / 2  equals 16', () => {
      // Arrange
      cy.visit('http://127.0.0.1:5500/index.html')
  
      // Act
      cy.get("[data-cy=eight]").click();
      cy.get("[data-cy=multiply]").click();
      cy.get("[data-cy=four]").click();
      cy.get("[data-cy=divide]").click();
      cy.get("[data-cy=two]").click();
      cy.get("[data-cy=equalTo]").click();
  
      // Assert
      cy.get("[data-cy=output]").contains(16);
    }) 
  })

  