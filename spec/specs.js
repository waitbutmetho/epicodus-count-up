describe("countUp", function(){
  it("counts by the first input to the second input", function() {
    expect(countUp(5, 30)).to.eql([5, 10, 15, 20, 25, 30]);
  });
});
