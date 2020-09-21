describe("Upload file", () => {
  it("upload file", () => {
    const yourFixturePath = "CV_HuynhTanDung.pdf";
    cy.get('.uploadFile').attachFile(yourFixturePath);
  });
});
