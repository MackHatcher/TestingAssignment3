describe("App", () => {
  describe("Counter", () => {
    it("is set to 120 when the button is clicked", () => {
      button.click();
      expect(counter.innerHTML).toBe('120');
    })
  })

  describe("Button", () => {
    it("has an ID of 'click-me'", () => {
      expect(button.id).toEqual('click-me');
    })
  })

  describe("Factorial", () => {
    it("returns the factorial of positive numbers", () => {
      expect(factorial(5)).toEqual(120)
    })

    it("returns 1 if the provided number is less than 1 ", () => {
      expect(factorial(0)).toBe(1)
    })
  })

  describe("Computer", () => {
    it("is created with a hard drive size of 512", () => {
      const computer = new Computer();
      expect(computer.hardDriveSpace).toEqual(512)
    })

    describe("installProgram", () => {
      
      describe('installProgram', () => {
        const computer = new Computer();
        beforeEach(function (done) {
          computer.installProgram(200, function () {
            done();
          });
        });

        it("can install a program if there is sufficient space", () => {
         
          expect(computer.hardDriveSpace).toBe(312);


        });
      })

      describe('installProgram', () => {
        const computer = new Computer();
        beforeEach(function (done) {
          computer.installProgram(550, function () {
            done();
          });
        });

        it("will not install the program if there is insufficient space", () => {
          
          expect(computer.hardDriveSpace).toBe(512)

        })
      })

    })

    describe("format", () => {
      const computer = new Computer();
      it("resets the hard drive to 512, even after programs have been installed", () => {
        expect(computer.hardDriveSpace).toEqual(512)
      });
    })

  })

})