const testCasePage = {
    titleInput: "#title",
    statusInput: '[for="0-status"] + div',
    statusOption: "//*[text() = '%']",
    descInput: "//*[text()= 'Description']/../div",
    suiteDropDown: "//*[@for='suite']/../div",
    suiteOptions: "//div[@class='_ZTmUa'][text()='$']",
    dropDownInput: "//*[text()='$']/../div"
}

module.exports = {
    testCasePage
}