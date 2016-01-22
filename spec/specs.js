describe("countUp", function(){
  it("counts by the first input to the second input", function() {
    expect(countUp(5, 30)).to.eql([5, 10, 15, 20, 25, 30]);
  });
  it("return an error if one of the numbers is negative", function() {
    expect(countUp(5, -30)).to.equal("You cannot have one negative and one positive");
  });
});
