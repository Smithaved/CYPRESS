describe("lenskart",()=>{
    it("lenskart",()=>{
        // cy.visit("https://www.lenskart.com/")
        const excelFilepath="E:/Smitha/Data.xlsx"
        const sheetName="Sample"
        cy.task('generateJsonFromExcel',{excelFilepath,sheetName}).then((data)=>{
            console.log(data[0]);
        })
        
    })
})